'use client';

import {useState, useRef, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useTranslations} from 'next-intl';
import {useSearchParams} from 'next/navigation';
import type {DateRange} from 'react-day-picker';

import {ChevronDown, Check} from 'lucide-react';

import {DateRangePicker} from '@/components/shared/DateRangePicker';

import {tours} from '@/data/tours';

const tourOptions = ['', ...tours.map(t => t.name)];
const tourLabel = (val: string) => val === '' ? 'Not sure yet' : val;

function TourSelect({value, onChange}: {value: string; onChange: (v: string) => void}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between rounded-2xl border border-text/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/20 transition-shadow text-left"
      >
        <span className={value ? 'text-text' : 'text-text-muted/60'}>{tourLabel(value)}</span>
        <ChevronDown className={`h-4 w-4 text-text-muted shrink-0 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-2xl shadow-xl border border-text/10 overflow-hidden py-1">
          {tourOptions.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-left text-text hover:bg-accent/5 transition-colors"
            >
              <span>{tourLabel(opt)}</span>
              {value === opt && <Check className="h-4 w-4 text-accent shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

type FormValues = {
  fullName: string;
  email?: string;
  phone?: string;
  dateFrom: string;
  dateTo?: string;
  groupSize: number;
  accommodation?: string;
  tour?: string;
  message?: string;
};

const inputCls = 'w-full rounded-2xl border border-text/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-light/40 transition-shadow';
const labelCls = 'block text-sm font-medium text-text mb-2';
const errorCls = 'mt-1 text-xs text-red-500';

export function InquiryForm({prefillTour}: {prefillTour?: string}) {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [dateError, setDateError] = useState(false);
  const [groupSize, setGroupSize] = useState<number>(1);
  const [contactMethod, setContactMethod] = useState<'email' | 'whatsapp'>('email');
  const [selectedTour, setSelectedTour] = useState<string>(prefillTour ?? '');

  const prefillDate = searchParams.get('date') ?? undefined;
  const prefillGuests = searchParams.get('guests');

  const {register, handleSubmit, setValue, formState: {errors}, reset} = useForm<FormValues>({
    defaultValues: {
      groupSize: prefillGuests ? parseInt(prefillGuests, 10) : 1,
      dateFrom: prefillDate,
      tour: prefillTour
    }
  });

  const onSubmit = async (values: FormValues) => {
    if (!dateRange?.from) { setDateError(true); return; }
    setDateError(false);
    setSubmitState('submitting');
    console.log('Booking inquiry:', values);
    await new Promise(r => setTimeout(r, 850));
    setSubmitState('success');
    reset(undefined, {keepDefaultValues: true});
    window.setTimeout(() => setSubmitState('idle'), 4000);
  };

  if (submitState === 'success') {
    return (
      <div className="rounded-3xl border border-accent/20 bg-accent/5 px-8 py-12 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-medium text-text mb-2">Got it!</h3>
        <p className="text-sm text-text-muted leading-6">I'll get back to you within the hour. Check your email.</p>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl border border-text/10 bg-white/70 backdrop-blur-sm p-7 shadow-[0_16px_40px_rgba(28,28,26,0.08)]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-5">

        {/* Full name */}
        <div>
          <label className={labelCls}>
            Full name <span className="text-red-400">*</span>
          </label>
          <input
            className={inputCls}
            placeholder="Your name"
            {...register('fullName', {required: 'Name is required', minLength: {value: 2, message: 'Too short'}})}
            aria-invalid={errors.fullName ? 'true' : 'false'}
          />
          {errors.fullName && <p className={errorCls}>{errors.fullName.message}</p>}
        </div>

        {/* Contact */}
        <div>
            <label className={labelCls}>
              Contact <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2 mb-2">
              {(['email', 'whatsapp'] as const).map(method => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setContactMethod(method)}
                  className={[
                    'px-4 h-8 rounded-xl border text-xs font-medium transition-colors capitalize',
                    contactMethod === method
                      ? 'border-accent bg-accent text-white'
                      : 'border-text/10 bg-white text-text hover:border-accent/40 hover:bg-accent/5'
                  ].join(' ')}
                >
                  {method === 'whatsapp' ? 'WhatsApp' : 'Email'}
                </button>
              ))}
            </div>
            {contactMethod === 'email' ? (
              <>
                <input
                  type="email"
                  className={inputCls}
                  placeholder="you@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email'}
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && <p className={errorCls}>{errors.email.message}</p>}
              </>
            ) : (
              <>
                <input
                  type="tel"
                  className={inputCls}
                  placeholder="+1 234 567 8900"
                  {...register('phone', {required: 'Phone number is required'})}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                />
                {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
              </>
            )}
        </div>

        {/* Tour + Dates row on desktop */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className={labelCls}>Select a tour <span className="text-text-muted text-xs font-normal">(optional)</span></label>
            <TourSelect
              value={selectedTour}
              onChange={v => { setSelectedTour(v); setValue('tour', v); }}
            />
          </div>

          <div>
            <label className={labelCls}>
              Preferred dates <span className="text-red-400">*</span>
            </label>
            <DateRangePicker
              value={dateRange}
              onChange={r => { setDateRange(r); setDateError(false); }}
              hasError={dateError}
            />
            {dateError && <p className={errorCls}>Please select at least a start date</p>}
          </div>
        </div>

        {/* Group size */}
        <div>
          <label className={labelCls}>
            How many people <span className="text-red-400">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {[1,2,3,4,5,6,7,8,9,10].map(n => (
              <button
                key={n}
                type="button"
                onClick={() => { setGroupSize(n); setValue('groupSize', n); }}
                className={[
                  'h-9 w-9 rounded-xl border text-sm font-medium transition-colors',
                  groupSize === n
                    ? 'border-accent bg-accent text-white'
                    : 'border-text/10 bg-white text-text hover:border-accent/40 hover:bg-accent/5'
                ].join(' ')}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => { setGroupSize(11); setValue('groupSize', 11); }}
              className={[
                'h-9 px-3 rounded-xl border text-sm font-medium transition-colors',
                groupSize === 11
                  ? 'border-accent bg-accent text-white'
                  : 'border-text/10 bg-white text-text hover:border-accent/40 hover:bg-accent/5'
              ].join(' ')}
            >
              10+
            </button>
          </div>
        </div>

        {/* Accommodation */}
        <div>
          <label className={labelCls}>Where are you staying?</label>
          <input
            className={inputCls}
            placeholder="Hotel name, resort, Airbnb..."
            {...register('accommodation')}
          />
        </div>

        {/* Message */}
        <div>
          <label className={labelCls}>Message <span className="text-text-muted text-xs font-normal">(optional)</span></label>
          <textarea
            rows={4}
            className={inputCls}
            placeholder="Anything else you'd like me to know..."
            {...register('message')}
          />
        </div>

      </div>

      <button
        type="submit"
        disabled={submitState === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-60 shadow-[0_8px_32px_rgba(0,255,255,0.25)]"
        style={{borderRadius: '900px', background: 'linear-gradient(100deg, #00D4FF -8.86%, #2EE0B4 104.42%)'}}
      >
        {submitState === 'submitting' ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}

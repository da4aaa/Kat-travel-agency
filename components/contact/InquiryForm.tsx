'use client';

import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useTranslations} from 'next-intl';
import {useSearchParams} from 'next/navigation';

import {tours} from '@/data/tours';

type FormValues = {
  fullName: string;
  email: string;
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

export function InquiryForm() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const prefillDate = searchParams.get('date') ?? undefined;
  const prefillGuests = searchParams.get('guests');
  const prefillTour = searchParams.get('tour') ?? undefined;

  const {register, handleSubmit, formState: {errors}, reset} = useForm<FormValues>({
    defaultValues: {
      groupSize: prefillGuests ? parseInt(prefillGuests, 10) : undefined,
      dateFrom: prefillDate,
      tour: prefillTour
    }
  });

  const onSubmit = async (values: FormValues) => {
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

        {/* Email */}
        <div>
          <label className={labelCls}>
            Email <span className="text-red-400">*</span>
          </label>
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
        </div>

        {/* Dates */}
        <div>
          <label className={labelCls}>
            Preferred dates <span className="text-red-400">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                type="date"
                className={inputCls}
                onClick={e => (e.currentTarget as HTMLInputElement).showPicker?.()}
                {...register('dateFrom', {required: 'Start date is required'})}
                aria-invalid={errors.dateFrom ? 'true' : 'false'}
              />
              {errors.dateFrom && <p className={errorCls}>{errors.dateFrom.message}</p>}
            </div>
            <div>
              <input
                type="date"
                className={inputCls}
                onClick={e => (e.currentTarget as HTMLInputElement).showPicker?.()}
                {...register('dateTo')}
              />
              <p className="mt-1 text-xs text-text-muted">End date (optional)</p>
            </div>
          </div>
        </div>

        {/* Group size */}
        <div>
          <label className={labelCls}>
            How many people <span className="text-red-400">*</span>
          </label>
          <select
            className={inputCls}
            {...register('groupSize', {required: 'Please select group size', valueAsNumber: true})}
            aria-invalid={errors.groupSize ? 'true' : 'false'}
          >
            <option value="">Select number of people</option>
            {[1,2,3,4,5,6,7,8,9,10].map(n => (
              <option key={n} value={n}>{n} {n === 1 ? 'person' : 'people'}</option>
            ))}
            <option value={11}>11+ people</option>
          </select>
          {errors.groupSize && <p className={errorCls}>{errors.groupSize.message}</p>}
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

        {/* Tour */}
        <div>
          <label className={labelCls}>Select a tour <span className="text-text-muted text-xs font-normal">(optional)</span></label>
          <select className={inputCls} {...register('tour')}>
            <option value="">Not sure yet</option>
            {tours.map(tour => (
              <option key={tour.slug} value={tour.name}>{tour.name}</option>
            ))}
          </select>
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

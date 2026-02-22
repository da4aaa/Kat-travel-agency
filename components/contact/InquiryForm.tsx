'use client';

import {useMemo, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useLocale, useTranslations} from 'next-intl';

type PreferredLanguage = 'en' | 'es' | 'ru';
type Interest = 'history' | 'cenotes' | 'adventure' | 'custom';

type FormValues = {
  fullName: string;
  email: string;
  preferredLanguage: PreferredLanguage;
  travelFrom?: string;
  travelTo?: string;
  groupSize: number;
  interests: Interest[];
  message: string;
};

export function InquiryForm() {
  const t = useTranslations();
  const locale = useLocale() as PreferredLanguage;
  const [submitState, setSubmitState] = useState<
    'idle' | 'submitting' | 'success'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm<FormValues>({
    defaultValues: {
      preferredLanguage: locale,
      interests: [],
      groupSize: 2
    }
  });

  const languageOptions = useMemo(
    () => [
      {value: 'en' as const, label: t('form.language.en')},
      {value: 'es' as const, label: t('form.language.es')},
      {value: 'ru' as const, label: t('form.language.ru')}
    ],
    [t]
  );

  const interestOptions = useMemo(
    () => [
      {value: 'history' as const, label: t('form.interests.history')},
      {value: 'cenotes' as const, label: t('form.interests.cenotes')},
      {value: 'adventure' as const, label: t('form.interests.adventure')},
      {value: 'custom' as const, label: t('form.interests.custom')}
    ],
    [t]
  );

  return (
    <form
      className="rounded-3xl border border-text/10 bg-white/70 backdrop-blur-sm p-7 shadow-[0_16px_40px_rgba(28,28,26,0.08)]"
      onSubmit={handleSubmit(async (values) => {
        setSubmitState('submitting');

        // TODO: Hook this up to email/API later.
        console.log('InquiryForm submit', values);

        await new Promise((r) => setTimeout(r, 850));
        setSubmitState('success');
        reset(undefined, {keepDefaultValues: true});

        window.setTimeout(() => setSubmitState('idle'), 3500);
      })}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-text">
            {t('form.fullName')}
          </label>
          <input
            className="mt-2 w-full rounded-2xl border border-text/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-light/40"
            {...register('fullName', {required: true, minLength: 2})}
            aria-invalid={errors.fullName ? 'true' : 'false'}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-text">{t('form.email')}</label>
          <input
            type="email"
            className="mt-2 w-full rounded-2xl border border-text/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-light/40"
            {...register('email', {
              required: true,
              pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-text">
            {t('form.preferredLanguage')}
          </label>
          <select
            className="mt-2 w-full rounded-2xl border border-text/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-light/40"
            {...register('preferredLanguage', {required: true})}
          >
            {languageOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-text">
            {t('form.travelDates')} ({t('form.travelDates.from')})
          </label>
          <input
            type="date"
            className="mt-2 w-full rounded-2xl border border-text/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-light/40"
            {...register('travelFrom')}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-text">
            {t('form.travelDates')} ({t('form.travelDates.to')})
          </label>
          <input
            type="date"
            className="mt-2 w-full rounded-2xl border border-text/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-light/40"
            {...register('travelTo')}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-text">{t('form.groupSize')}</label>
          <input
            type="number"
            min={1}
            className="mt-2 w-full rounded-2xl border border-text/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-light/40"
            {...register('groupSize', {required: true, valueAsNumber: true, min: 1})}
            aria-invalid={errors.groupSize ? 'true' : 'false'}
          />
        </div>

        <div className="md:col-span-2">
          <div className="text-sm font-medium text-text">{t('form.interests')}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {interestOptions.map((o) => (
              <label
                key={o.value}
                className="inline-flex items-center gap-2 rounded-full border border-text/10 bg-white/70 px-4 py-2 text-sm text-text/85 hover:bg-surface transition-colors cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={o.value}
                  className="h-4 w-4 accent-accent"
                  {...register('interests')}
                />
                <span>{o.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-text">{t('form.message')}</label>
          <textarea
            rows={5}
            className="mt-2 w-full rounded-2xl border border-text/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent-light/40"
            {...register('message', {required: true, minLength: 10})}
            aria-invalid={errors.message ? 'true' : 'false'}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitState === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors disabled:opacity-60"
      >
        {submitState === 'submitting' ? t('form.sending') : t('form.send')}
      </button>

      {submitState === 'success' && (
        <div className="mt-4 rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-text">
          {t('form.success')}
        </div>
      )}
    </form>
  );
}


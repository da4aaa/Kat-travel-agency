import {useTranslations} from 'next-intl';

import {Accordion} from '@/components/shared/Accordion';

export function FaqAccordion() {
  const t = useTranslations();

  return (
    <div className="mt-10">
      <h2 className="text-2xl md:text-3xl">{t('faq.title')}</h2>
      <div className="mt-6">
        <Accordion
          defaultOpenId="q1"
          items={[
            {id: 'q1', question: t('faq.q1'), answer: t('faq.a1')},
            {id: 'q2', question: t('faq.q2'), answer: t('faq.a2')},
            {id: 'q3', question: t('faq.q3'), answer: t('faq.a3')},
            {id: 'q4', question: t('faq.q4'), answer: t('faq.a4')},
            {id: 'q5', question: t('faq.q5'), answer: t('faq.a5')},
            {id: 'q6', question: t('faq.q6'), answer: t('faq.a6')}
          ]}
        />
      </div>
    </div>
  );
}


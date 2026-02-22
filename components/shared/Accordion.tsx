'use client';

import {useId, useState} from 'react';
import {ChevronDown} from 'lucide-react';

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

export function Accordion({
  items,
  defaultOpenId
}: {
  items: AccordionItem[];
  defaultOpenId?: string;
}) {
  const instanceId = useId();
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className="divide-y divide-text/10 rounded-3xl border border-text/10 bg-white/65 backdrop-blur-sm">
      {items.map((item) => {
        const expanded = item.id === openId;
        const buttonId = `${instanceId}-btn-${item.id}`;
        const panelId = `${instanceId}-panel-${item.id}`;

        return (
          <div key={item.id} className="px-6 py-5">
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setOpenId((cur) => (cur === item.id ? null : item.id))}
            >
              <span className="text-sm font-medium text-text">{item.question}</span>
              <ChevronDown
                className={[
                  'h-5 w-5 text-text-muted transition-transform',
                  expanded ? 'rotate-180' : 'rotate-0'
                ].join(' ')}
                aria-hidden="true"
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={[
                'grid transition-[grid-template-rows,opacity] duration-200 ease-out',
                expanded ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
              ].join(' ')}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-6 text-text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


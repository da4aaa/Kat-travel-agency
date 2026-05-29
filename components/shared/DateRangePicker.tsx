'use client';

import {useState, useRef, useEffect} from 'react';
import {DayPicker} from 'react-day-picker';
import type {DateRange} from 'react-day-picker';
import {Calendar} from 'lucide-react';

function fmt(date: Date) {
  return date.toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'});
}

function displayValue(range: DateRange | undefined): string {
  if (!range?.from) return '';
  if (!range.to) return fmt(range.from);
  return `${fmt(range.from)} — ${fmt(range.to)}`;
}

interface Props {
  value: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
  hasError?: boolean;
}

const cls = {
  root: 'p-3 select-none w-full',
  months: 'flex gap-6 w-full',
  month: 'relative w-full',
  month_caption: 'flex justify-center items-center h-10 mb-3 pointer-events-none',
  caption_label: 'text-sm font-semibold text-text',
  nav: 'absolute top-3 left-0 right-0 flex justify-between items-center h-10 z-10',
  button_previous: 'h-10 w-10 flex items-center justify-center rounded-full text-accent bg-accent/5 hover:bg-accent/15 active:bg-accent/25 transition-colors touch-manipulation',
  button_next:     'h-10 w-10 flex items-center justify-center rounded-full text-accent bg-accent/5 hover:bg-accent/15 active:bg-accent/25 transition-colors touch-manipulation',
  month_grid: 'w-full border-collapse',
  weekdays: '',
  weekday: 'text-[11px] font-medium text-text-muted pb-2 text-center',
  week: '',
  day: 'p-0 text-center',
  day_button: [
    'h-8 w-8 mx-auto flex items-center justify-center rounded-full text-sm',
    'text-text hover:bg-accent/10 transition-colors cursor-pointer',
    'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent',
  ].join(' '),
  today: 'font-semibold underline underline-offset-2',
  selected: '!bg-accent !text-white !rounded-full hover:!bg-accent-light',
  range_start: '!bg-accent !text-white !rounded-full',
  range_end:   '!bg-accent !text-white !rounded-full',
  range_middle: '!bg-accent/10 !text-text !rounded-none',
  outside: 'opacity-30',
  disabled: 'opacity-25 cursor-not-allowed',
};

export function DateRangePicker({value, onChange, hasError}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  const handleSelect = (range: DateRange | undefined) => {
    onChange(range);
    if (range?.from && range?.to) setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className={[
          'w-full flex items-center justify-between rounded-2xl border bg-white px-4 py-3 text-sm text-left outline-none focus:ring-2 focus:ring-accent/20 transition-shadow',
          hasError ? 'border-red-400' : 'border-text/10',
        ].join(' ')}
      >
        <span className={value?.from ? 'text-text' : 'text-text-muted/60'}>
          {value?.from ? displayValue(value) : 'Select date or range'}
        </span>
        <Calendar className="h-4 w-4 text-text-muted shrink-0 ml-2" />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-2xl shadow-xl border border-black/8 overflow-hidden">
          <DayPicker
            mode="range"
            selected={value}
            onSelect={handleSelect}
            disabled={{before: new Date()}}
            numberOfMonths={1}
            classNames={cls}
          />
        </div>
      )}
    </div>
  );
}

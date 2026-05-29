'use client';

import {useBookingModal} from '@/components/shared/BookingModal';
import {Button} from '@/components/shared/Button';

export function BookTourButton({label, tourName}: {label: string; tourName?: string}) {
  const {open} = useBookingModal();
  return <Button onClick={() => open(tourName)}>{label}</Button>;
}

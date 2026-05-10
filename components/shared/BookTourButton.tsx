'use client';

import {useBookingModal} from '@/components/shared/BookingModal';
import {Button} from '@/components/shared/Button';

export function BookTourButton({label}: {label: string}) {
  const {open} = useBookingModal();
  return <Button onClick={() => open()}>{label}</Button>;
}

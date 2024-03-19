import { defineStore } from 'pinia';
import { useGuest } from '@/composables/guest';
import type { Guest } from '@/types/guest.interface';

export const useGuestStore = defineStore('guestStore', () => {
  const { guest_, incrementPageviews } = useGuest();

  const setGuestState = (newValue: Guest) => {
    guest_.value = newValue;
    incrementPageviews();
  };

  return {
    guest_,
    incrementPageviews,
    setGuestState,
  };
});

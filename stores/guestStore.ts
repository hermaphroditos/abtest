import { defineStore } from 'pinia';
import { useGuest } from '@/composables/guest';
import type { Guest } from '@/types/guest.interface';

export const useGuestStore = defineStore('guestStore', () => {
  const { guest_, pageviews_, incrementPageviews } = useGuest();

  return {
    guest_,
    pageviews_,
    incrementPageviews,
  };
});

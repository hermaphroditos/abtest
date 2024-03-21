<template>
  <div>
    Thanks a lot for reading the article!
    <a id="signup" href="#" @click="handleClickSignup">SIGN UP</a> for Blinkist.
  </div>
</template>

<script setup lang="ts">
import { useGuestStore } from '~/stores/guestStore';

const { $trackEvent } = useNuxtApp();

const guestStore = useGuestStore();
const guest_ = guestStore.guest_;
const pageviews_ = guestStore.pageviews_;

// Sign up button click Event cookie
const signupCookie = useCookie<number>(
  'signup',
  {
    default: () => (0)
  }
);

// Sign up button click event
const handleClickSignup = (event: Event) => {
  signupCookie.value = 1;

  // @ts-ignore
  $trackEvent(guest_, pageviews_, event);

  const url = '/signup';
  window.location.href = url;
}

</script>

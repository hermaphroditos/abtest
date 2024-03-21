<template>
  <div>
    <h1>Check out the Blinkist app</h1>

    <img width="300" src="../assets/static/images/P5ST-hero_image.jpg" alt="Check out the Blinkist app" />

    <AbTest />
    <Signup />
  </div>
</template>

<script setup lang="ts">
import { useGuestStore } from '~/stores/guestStore';

// Imports plugins
const { $trackPageview } = useNuxtApp();
// Initializes the guest store to manage and access the guest state
const guestStore = useGuestStore();
const guest_ = guestStore.guest_;
const pageviews = guestStore.pageviews_;

// Lifecycle hook: Executes the provided function after the component is mounted to the DOM
onMounted(() => {
  guestStore.incrementPageviews();
  nextTick(() => {
    // Stores the current page URL in the session storage
    window.sessionStorage.setItem('previousUrl', window.location.href);

    // @ts-ignore
    $trackPageview(guest_, pageviews_); // Tracks the pageview event for the current guest
  });
});

</script>
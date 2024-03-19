<template>
  <div v-if="isLoading"></div>
  <div v-else>
    <div v-if="isVariantA">
      <!-- Control variation -->
      Meet the app that revolutionized reading.
    </div>

    <div v-else>
      <!-- Test variation -->
      Meet the app that has 18 million users.
    </div>
    <a id="signup" href="#" @click="handleClickSignup">Sign up</a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGuestStore } from '~/stores/guestStore';

// Imports plugins
const { $trackPageview, $trackEvent } = useNuxtApp();

const guestStore = useGuestStore();
const guest_ = guestStore.guest_;
const variantLetter = guest_.variantLetter;

const isLoading = ref(true);
if (variantLetter !== null) {
  isLoading.value = false;
}
const isVariantA = computed(() => {
  return variantLetter === 'a' ? true : false;
});

// Lifecycle hook: Executes the provided function after the component is mounted to the DOM
onMounted(() => {
  guestStore.incrementPageviews();
  nextTick(() => {
    // Stores the current page URL in the session storage
    window.sessionStorage.setItem('previousUrl', window.location.href);

    // @ts-ignore
    $trackPageview(guest_); // Tracks the pageview event for the current guest
  });
});

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
  $trackEvent(guest_, event);

  const url = '/signup';
  window.location.href = url;
}

</script>
<template>
  <div>
    <div>
      <!-- Control variation -->
      Meet the app that revolutionized reading.
    </div>

    <div>
      <!-- Test variation -->
      Meet the app that has 18 million users.
    </div>

    <a id="signup" href="#" @click="handleClickSignup">Sign up</a>
  </div>
</template>

<script setup lang="ts">
// Sign up button click event
const handleClickSignup = (event: Event) => {

  // @ts-ignore
  $trackEvent(guest_, event);

  const url = '/signup';
  window.location.href = url;
}

</script>
<template>
  <div v-if="isLoading"></div>
  <div v-else-if="isVariantA">
    <!-- Control variation -->
    Meet the app that revolutionized reading.
  </div>

  <div v-else>
    <!-- Test variation -->
    Meet the app that has 18 million users.
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGuestStore } from '~/stores/guestStore';

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
</script>

<template>
  <div v-if="isLoading"></div>
  <div v-else-if="isVariantA">
    <!-- Control variation -->
    {{ $t('text_01_a') }}
  </div>

  <div v-else>
    <!-- Test variation -->
    {{ $t('text_01_b') }}
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

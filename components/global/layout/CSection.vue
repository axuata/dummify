<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="bg-white p-6px rounded-18px b-(solid 1px gray-2)">
    <p class="text-center text-14px text-gray-5 mb-4px">{{ props.title }}</p>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
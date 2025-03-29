<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="font-en">
    <button class="b-(solid 1px gray-3) rounded-12px px-8px py-5px font-500 text-gray-7 text-14px hover:bg-gray-1 transition-colors duration-150">{{ props.label }}</button>
  </div>
</template>

<style scoped>

</style>
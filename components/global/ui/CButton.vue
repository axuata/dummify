<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div>
    <button class="px-7px py-5px text-14px text-gray-7 bg-#f9f9fb rounded-10px b-(solid 1px gray-3) hover:bg-gray-2 transition-colors duration-100">{{ props.label }}</button>
  </div>
</template>

<style scoped>

</style>
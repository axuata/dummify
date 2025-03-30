<script setup lang="ts">
const model = defineModel<string | number>();
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
});

function updateModel(event: Event) {
  const target = event.target as HTMLInputElement;
  model.value = target.value;
}
</script>

<template>
  <div>
    <input :type="props.type" :placeholder="props.placeholder" :style="{ width: props.length }" class="b-(solid 1px gray-2) px-6px py-2px rounded-8px" @input="updateModel($event)" />
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
const model = defineModel<string | number>();
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  }
});

function updateModel(event: Event): void {
  const target = event.target as HTMLInputElement;
  model.value = target.value;
}
</script>

<template>
  <div class="font-en flex items-center justify-between py-6px px-6px">
    <label :for="props.id" class="font-500 text-gray-7">{{ props.label }}</label>
    <input :name="props.id" :type="props.type" :placeholder="props.placeholder" class="bg-white b-(solid 1px gray-2) py-3px px-5px w-200px rounded-6px hover:b-gray-3" @input="updateModel($event)" />
  </div>
</template>

<style scoped>

</style>
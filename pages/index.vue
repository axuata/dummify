<script setup lang="ts">
import { consola } from "consola";

const config = {
  width: ref<number>(0),
  height: ref<number>(0),
  text: ref<string>(''),
};
const warning = ref<string>('');
const isDownloadDisabled = ref<boolean>(true);
let canvasElement: HTMLCanvasElement;

onMounted(() => {
  canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
});

function generate() {
  consola.info('Generating...');

  if (canvasElement) {
    if (config.width.value >= 20000 || config.height.value >= 20000) {
      warning.value = 'The size cannot be over 20000!';
      return;
    } else {
      warning.value = '';
    }

    const context = canvasElement.getContext('2d');

    canvasElement.width = config.width.value;
    canvasElement.height = config.height.value;

    if (context) {
      context.font = `${canvasElement.width / 7}px Inter`;

      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, config.width.value, config.height.value);

      context.fillStyle = '#1e1e1e';
      context.textAlign = 'center';
      context.textBaseline = 'middle'

      if (config.text.value === '') {
        context.fillText(`${config.width.value}x${config.height.value}`, config.width.value / 2, config.height.value / 2);
      } else {
        context.fillText(config.text.value, config.width.value / 2, config.height.value / 2);
      }

      isDownloadDisabled.value = false;
      consola.info('Generated!');
    } else {
      consola.error('Context is null!');
    }
  } else {
    consola.error('Canvas is null!');
  }
}

function download(type: 'png' | 'jpeg') {
  if (canvasElement) {
    const link = document.createElement('a');

    switch (type) {
      case 'png':
        link.href = canvasElement.toDataURL("image/png");
        link.download = `image-${config.width.value}x${config.height.value}.png`;
        break;
      case 'jpeg':
        link.href = canvasElement.toDataURL("image/jpeg");
        link.download = `image-${config.width.value}x${config.height.value}.jpg`;
        break;
    }

    link.click();
  }
}
</script>

<template>
  <!-- Links -->
  <div class="absolute left-0 top-0 p-5px">
    <a href="https://github.com/axuata/dummify" class="flex items-center justify-center h-30px bg-white px-5px b-(solid 1px gray-2) hover:bg-gray-1 rounded-8px">
      <img src="/images/brands/github.png" alt="GitHub Icon" class="size-17px" />
      <p class="text-14px ml-4px text-gray-7">Github Repo</p>
    </a>
  </div>

  <!-- Welcome -->
  <div class="my-16px text-center text-40px font-600 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-7 line-height-tight">
    <p>Dummify</p>
  </div>

  <!-- Generators -->
  <div class="flex justify-center">
    <!--  Image Generator  -->
    <div>
      <p class="text-14px text-center mb-5px text-gray-6">Image Generator</p>
      <CSection title="Options" class="w-400px">
        <div>
          <div class="flex items-center justify-between px-8px py-4px">
            <p class="text-gray-6">Width</p>
            <CInput v-model="config.width.value" type="number" placeholder="1920" length="200px" />
          </div>
          <div class="flex items-center justify-between px-8px py-4px">
            <p class="text-gray-6">Height</p>
            <CInput v-model="config.height.value" type="number" placeholder="1080" length="200px" />
          </div>
          <div class="flex items-center justify-between px-8px py-4px">
            <p class="text-gray-6">Custom Text</p>
            <CInput v-model="config.text.value" type="string" placeholder="" length="200px" />
          </div>
          <p class="text-14px text-orange-4 mx-8px">{{ warning }}</p>
        </div>
        <hr class="m-5px" />
        <div class="flex gap-5px p-5px">
          <CButton label="Generate" @click="generate()" :is-disabled="false" />
          <CButton label="Download as png" @click="download('png')" :is-disabled="isDownloadDisabled" />
          <CButton label="Download as jpeg" @click="download('jpeg')" :is-disabled="isDownloadDisabled" />
        </div>
      </CSection>
      <CSection title="Result (Scaled down)" class="mt-8px w-400px">
        <div class="flex justify-center">
          <canvas id="canvas" class="max-w-300px"></canvas>
        </div>
      </CSection>
    </div>
  </div>

  <!-- Footer -->
  <div class="text-center text-14px my-10px text-gray-7">
    <p>© 2025 Axuata - All Rights Reserved</p>
  </div>
</template>

<style scoped>

</style>
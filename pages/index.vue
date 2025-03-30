<script setup lang="ts">
const imageWidth = ref<number>(0);
const imageHeight = ref<number>(0);
const imageText = ref<string>('');
const imageWarning= ref<string>('');
let canvasElement: HTMLCanvasElement;

onMounted(() => {
  canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
});

function generate() {
  console.log("Generating...");

  if (canvasElement) {
    if (imageWidth.value >= 20000 || imageHeight.value >= 20000) {
      imageWarning.value = 'The size cannot be over 20000!';
      return;
    } else {
      imageWarning.value = '';
    }

    const context = canvasElement.getContext('2d');

    canvasElement.width = imageWidth.value;
    canvasElement.height = imageHeight.value;

    if (context) {
      context.font = `${canvasElement.width / 7}px Inter`;

      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, imageWidth.value, imageHeight.value);

      context.fillStyle = '#1e1e1e';
      context.textAlign = 'center';
      context.textBaseline = 'middle'

      if (imageText.value === '') {
        context.fillText(`${imageWidth.value}x${imageHeight.value}`, imageWidth.value / 2, imageHeight.value / 2);
      } else {
        context.fillText(imageText.value, imageWidth.value / 2, imageHeight.value / 2);
      }

      console.log("Generated!");
    } else {
      console.log('Context is null!');
    }
  } else {
    console.log('Canvas is null!');
  }
}

function download(type: 'png' | 'jpeg') {
  if (canvasElement) {
    const link = document.createElement('a');

    switch (type) {
      case 'png':
        link.href = canvasElement.toDataURL("image/png");
        link.download = `image-${imageWidth.value}x${imageHeight.value}.png`;
        break;
      case 'jpeg':
        link.href = canvasElement.toDataURL("image/jpeg");
        link.download = `image-${imageWidth.value}x${imageHeight.value}.jpg`;
        break;
    }

    link.click();
  }
}
</script>

<template>
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
            <CInput v-model="imageWidth" type="number" placeholder="1920" length="200px" />
          </div>
          <div class="flex items-center justify-between px-8px py-4px">
            <p class="text-gray-6">Height</p>
            <CInput v-model="imageHeight" type="number" placeholder="1080" length="200px" />
          </div>
          <div class="flex items-center justify-between px-8px py-4px">
            <p class="text-gray-6">Custom Text</p>
            <CInput v-model="imageText" type="string" placeholder="" length="200px" />
          </div>
          <p class="text-14px text-orange-4 mx-8px">{{ imageWarning }}</p>
        </div>
        <hr class="m-5px" />
        <div class="flex gap-5px p-5px">
          <CButton label="Generate" @click="generate()" />
          <CButton label="Download as png" @click="download('png')" />
          <CButton label="Download as jpeg" @click="download('jpeg')" />
        </div>
      </CSection>
      <CSection title="Result" class="mt-8px w-400px">
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
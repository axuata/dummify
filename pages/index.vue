<script setup lang="ts">
const imageWidth = ref<number>(0);
const imageHeight = ref<number>(0);
let canvasElement: HTMLCanvasElement;

onMounted(() => {
  canvasElement = document.getElementById("canvas") as HTMLCanvasElement;
})

function generate(): void {
  if (canvasElement) {
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
      context.fillText(`${imageWidth.value}x${imageHeight.value}`, imageWidth.value / 2, imageHeight.value / 2);
    }
  }
}

function download(type: 'png' | 'jpeg'): void {
  if (canvasElement) {
    const link = document.createElement("a");

    if (type === 'png') {
      link.href = canvasElement.toDataURL("image/png");
    } else if (type === 'jpeg') {
      link.href = canvasElement.toDataURL("image/jpeg");
    }

    link.download = "download.png";
    link.click();
  }
}
</script>

<template>
  <div class="w-100vw h-100vh flex items-center justify-center">
    <div>
      <div class="bg-white w-400px h-auto b-(solid 1px gray-2) rounded-18px p-10px">
        <p class="text-center mb-6px font-en text-14px text-gray-7">Settings</p>
        <COption v-model="imageWidth" id="imageWidth" label="Width" type="number" placeholder="1920" />
        <COption v-model="imageHeight" id="imageHeight" label="Height" type="number" placeholder="1080" />
        <hr class="my-10px" />
        <div class="flex gap-5px items-center">
          <CButton label="Generate" @click="generate()" />
          <CButton label="Download (.png)" @click="download('png')" />
          <CButton label="Download (.jpeg)" @click="download('jpeg')" />
        </div>
      </div>
      <div class="bg-white w-400px h-auto b-(solid 1px gray-2) rounded-18px mt-8px">
        <div class="p-10px">
          <p class="text-center mb-6px font-en text-14px text-gray-7">Result (Scale down)</p>
        </div>
        <div class="flex items-center justify-center">
          <canvas id="canvas" class="max-w-300px"></canvas>
        </div>
      </div>
    </div>
    <footer class="font-en absolute bottom-240px text-14px text-gray-5 font-600">
      <p>© 2025 Axuata - This project is licensed under the MIT License.</p>
    </footer>
  </div>
</template>

<style scoped>

</style>
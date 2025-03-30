import {defineConfig, presetWind3, transformerDirectives, transformerVariantGroup, presetIcons} from 'unocss';

export default defineConfig({
    presets: [
        presetWind3(),
        presetIcons(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
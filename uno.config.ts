import presetWind3 from '@unocss/preset-wind3'
import {defineConfig, transformerDirectives, transformerVariantGroup, presetIcons} from 'unocss';

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
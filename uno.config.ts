import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      primary: "oklch(78.86% 0.1208 185.59)",
    },
    animation: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      durations: {
        float: "3s",
      },
      timingFns: {
        float: "ease-in-out",
      },
      counts: {
        float: "infinite",
      },
    },
  },
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        heading: "Montserrat",
        sans: "Be Vietnam Pro",
        mono: "Roboto Mono",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

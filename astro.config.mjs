import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Lexend",
      cssVariable: "--font-lexend",
      provider: fontProviders.google(),
    },
  ],
});

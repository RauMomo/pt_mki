import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";
import { configDotenv } from "dotenv";

import react from "@astrojs/react";

configDotenv();

// https://astro.build/config
export default defineConfig({
  output: "server",
  trailingSlash: "never",
  integrations: [
    pagefind(),
    tailwind({
      applyBaseStyles: true,
    }),
    react({
      experimentalReactChildren: true,
    }),
  ],
});

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://ck-johnny.github.io",
  base: "/german2b1",
  integrations: [mdx()],
});

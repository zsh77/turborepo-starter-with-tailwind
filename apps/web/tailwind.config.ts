import type { Config } from "tailwindcss";
import SharedConfig from "@repo/tailwind-config/tailwind";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,html}",
    "../../packages/ui/src/**/*.{ts,tsx,js,html}",
  ],
  presets: [SharedConfig],
};
export default config;

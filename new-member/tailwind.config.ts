import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", ".dark"],
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

import myCustomConfig from "@evgeniyworkbel/prettier-config";

export default {
  ...myCustomConfig,
  plugins: ["prettier-plugin-tailwindcss"],

  // Settings provided for prettier-plugin-tailwindcss
  tailwindStylesheet: "./src/app/global.css",
};

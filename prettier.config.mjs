export default {
  plugins: ["prettier-plugin-tailwindcss"],

  // Settings provided for prettier-plugin-tailwindcss
  tailwindStylesheet: "./src/app/global.css",
  tailwindAttributes: ["className"],
  tailwindFunctions: ["cn", "clsx", "cva"],
};

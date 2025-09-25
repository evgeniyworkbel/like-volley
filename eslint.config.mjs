import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import reactUseEffect from "eslint-plugin-react-useeffect";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["eslint-plugin-react-useeffect"],
    rules: {
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "react-useeffect/no-non-function-return": "error",
    },
  }),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;

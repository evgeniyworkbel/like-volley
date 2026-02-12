export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 145],
    "scope-empty": [2, "never"],
    "scope-enum": [
      2,
      "always",
      ["root", "public", "app", "widgets", "features", "shared", "packaging", "project"],
    ],
    "body-max-line-length": [2, "always", 400],
  },
};

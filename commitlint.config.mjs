export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 120],
    "scope-empty": [2, "never"],
    "scope-enum": [2, "always", ["root", "public", "app", "widgets", "shared"]],
    "body-max-line-length": [2, "always", 200],
  },
};

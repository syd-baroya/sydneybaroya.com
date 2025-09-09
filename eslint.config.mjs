import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
});

const eslintConfig = [{
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}, ...compat.extends("next/core-web-vitals"), ...compat.extends("eslint:recommended"), ...compat.extends("plugin:react/recommended"), ...compat.extends("plugin:react-hooks/recommended"), // Added import plugin
...compat.extends("plugin:import/recommended"), // Added jsx-a11y plugin
...compat.extends("plugin:jsx-a11y/recommended"), {
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"], // This maps '@' to your 'src' directory
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
}];

export default eslintConfig;

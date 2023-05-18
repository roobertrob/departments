module.exports = {
   env: {
      browser: true,
      node: true,
      es2021: true,
      jest: true,
   },
   extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:@next/next/recommended",
   ],
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: "latest",
      tsconfigRootDir: __dirname,
      sourceType: "module",
      project: "tsconfig.json",
   },
   ignorePatterns: ["*.js"],
   plugins: ["@typescript-eslint", "prettier", "react-hooks", "jsx-a11y"],
   rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "import/no-extraneous-dependencies": "off",
      "import/prefer-default-export": "off",
      "prettier/prettier": "error",
      "jsx-a11y/anchor-is-valid": "off",
      "react/button-has-type": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-array-index-key": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "react/function-component-definition": [
         2,
         {
            namedComponents: "arrow-function",
         },
      ],
   },
};

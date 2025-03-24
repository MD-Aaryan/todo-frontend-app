# TODO APP

## Topics cover in this code with link

1. Setup with Vite - [Link](https://tailwindcss.com/docs/installation/using-vite)
2. Components
3. Props - [Link](https://react.dev/learn/passing-props-to-a-component)
4. Tailwind Setup - [Link](https://tailwindcss.com/docs/installation/using-vite)
5. State Management - [Link](https://react.dev/learn/managing-state)
6. LocalStorage for data persistence - [Link](https://www.freecodecamp.org/news/use-local-storage-in-modern-applications/)
   - To store certain data locally such as access token
7. React Router - [Link](https://reactrouter.com/start/declarative/installation)
   - To navigate between different pages in the app
8. Icons - [Link](https://lucide.dev/guide/packages/lucide-react)
9. Axios - [Link](https://axios-http.com/docs/intro)
10. useActionState - [Link](https://react.dev/reference/react/useActionState)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

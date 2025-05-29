# Angular Build Tool Showcase

A modern Angular project showcasing the use of Webpack, TypeScript, Sass (SCSS), ESLint, and Prettier. The project demonstrates clean architecture, build optimization, and consistent code styling.

---

## 🚀 Project Overview

This Angular-based project illustrates how to:

- Configure and bundle Angular apps with **Webpack**
- Use **TypeScript** for type-safe development
- Style using **Sass (SCSS)** with variables, mixins, and partials
- Apply **ESLint** rules and **Prettier** for consistent formatting
- Write and run **unit tests with Jest**

---

## 🛠️ Setup and Run Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/angular-build-showcase.git
   cd angular-build-showcase
   ```

2. Install dependencies - npm install

3. Start development server - npm run dev

4. Build for production - npm run build

🧱 Build Process

WEBPACK

webpack.dev.mjs: Development config with live reloading

webpack.prod.mjs: Optimized build with minification and code splitting

Uses webpack-merge for shared base config

TYPESCRIPT

Provides static typing and interfaces

Transpiled using ts-loader

SASS (SCSS)

Supports variables, mixins, and partials for reusable styles

Compiled with sass-loader, css-loader, and extracted using
mini-css-extract-plugin

Linting and Formatting

ESLint with TypeScript rules via @typescript-eslint

Prettier integrated through eslint-plugin-prettier

Auto-linting and formatting on save using Husky pre-commit hooks

📜 AVAILABLE NPM SCRIPTS

npm run dev #Start development server with Webpack and hot reloading
npm run build #Build the app for production with optimized assets
npm run watch #Watch for file changes and rebuild in development mode
npm run lint #Run ESLint on all .ts files in src/ and auto-fix issues
npm run format #Format all .ts files in src/ using Prettier
npm run test #Run unit tests using Jest
npm run prepare #Initialize Husky for Git hooks
npm run precommit #Run linting and formatting before committing code

🧪 Testing

Unit Testing with Jest
Unit tests are written using Jest and ts-jest for TypeScript support
Test files follow the .test.ts naming convention
Coverage reports help ensure logic is well-tested

Run Tests:
npm run test

🧑‍💻 Author

Yesu Kay – @yesukay2

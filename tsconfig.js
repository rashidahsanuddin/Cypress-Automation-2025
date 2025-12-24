// tsconfig.js
// This file is not standard for TypeScript configuration. Typically, TypeScript uses tsconfig.json.
// If you intended to create a TypeScript configuration file, consider using tsconfig.json instead.

module.exports = {
  compilerOptions: {
    target: "es6",
    module: "commonjs",
    strict: true,
    esModuleInterop: true,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true,
    types: ["cypress-xpath"]
  },
  include: ["cypress/**/*.ts"],
  exclude: ["node_modules"]
};

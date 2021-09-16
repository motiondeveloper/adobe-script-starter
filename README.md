# Adobe Scripting Setup

Basic setup for writing Adobe `.jsx` scripts in modern JavaScript with types and bundling.

## Commands

- `dev` compile script in watch mode
- `build` compile script
- `release` create release on github with script attached

## Features

- Modern JavaScript syntax compiled to ES3 (but no polyfills) using TypeScript
- Types from [bbb999/Types-for-Adobe](https://github.com/bbb999/Types-for-Adobe)

  The types for After Effects are included by default. You can add programs in `tsconfig.json`, by adding them to `compilerOptions.types`.

- Bundling with [Rollup](https://github.com/rollup/rollup)

- Debugging with the [ExtendScript Debugger](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug)

  Pressing <kbd>F5</kbd> will run `dist/script.jsx` in your selected application. Edit `.vscode/launch.json` to specify a different script.

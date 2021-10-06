# Adobe Scripting Setup

Basic setup for writing Adobe `.jsx` scripts in TypeScript with compilation to ES3 and bundling.

## Commands

- `dev` compile script in watch mode
- `build` compile script
- `release` create release on github with script attached

## Features

- Modern JavaScript syntax compiled to ES3 (but no polyfills) and bundled using [SWC](https://github.com/swc-project/swc)
- Types from [bbb999/Types-for-Adobe](https://github.com/bbb999/Types-for-Adobe)

  The types for After Effects are included by default. You can add programs in `tsconfig.json`, by adding them to `compilerOptions.types`.

- Debugging with the [ExtendScript Debugger](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug)

  Pressing <kbd>F5</kbd> will run `dist/script.jsx` in your selected application. Edit `.vscode/launch.json` to specify a different script.

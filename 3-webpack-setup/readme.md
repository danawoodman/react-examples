# WebPack Setup

A simple example of using WebPack to compile ES6/7 React code into ES5 that runs in any modern web browser.

You build the code with `build` npm script: `npm run build` or watch for changes with `npm run dev`.

This generates a compiled version of the code in `index.js` into the file `build.js` file.

`webpack-dev-server` serves the HTML file and reloads when WebPack detects a change and recompiles.

We use a few Babel presets in order to support React and other ES6/7 syntax.

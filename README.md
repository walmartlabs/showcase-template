Showcase demo embed project
===========================

So the idea here is to allow for embedding a showcase into a project.
That project could be some type of rollup project that references a lot
of component libraries, or just an individual library.

## Installation

To install it you copy in the `showcase` top level directory into your
project. And the `src/showcase` directory into your `src` directory. Then:

```
npm install component-playground object-assign react-bootstrap stylus-loader webpack-dev-server react-tools html-webpack-plugin html-webpack-template --save-dev
```

Though you may need to add more.

## Running

To run it you can:

```
webpack-dev-server --config showcase/webpack.config.js
```

As a `npm script` for example:

```
  "scripts": {
    "showcase": "webpack-dev-server --config showcase/webpack.config.js"
  }
```

Then you can:

```
npm run showcase
```

## Adding pages

Create a new page in `src/showcase` by cloning or replacing one of the original
files, then link to it in `src/showcase/index.jsx`.

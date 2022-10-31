## Download and setup

### local development server

## Adding a geofence

## Adding a point of view

## Your own project page

## Images

## Styling

**The project uses @emotion/styled - Tailwind CSS - twin.macro**

Tailwind CSS is configured to be suitable for multiple applications with different themes and sharing common buildable libraries.

Because of this we have a shared preset under:

```
libs/tailwind-preset/tailwind.config.js
```

\*\* TODO: add here config details once completed

In here use CSS variables to allow each application/library to provide different values and overwrite defaults.

These css variables are defined in:

```
<my-app>/assets/theme.css
```

Theme is statically loaded in the index.html

```
<link rel="stylesheet" href="assets/theme.css" type="text/css" />
```

### To create a new component/library with this stack (always recommended):

**Generate component/library with style: @emotion/styled**

```
nx generate @nrwl/react:component  --style=@emotion/styled
```

**Add Tailwind CSS config**

```
nx generate @nrwl/react:setup-tailwind project-or-library-name
```

**Because of twin.macro add babel-plugin-macros.config.js to your project/lib root folder with the following config:**

```
const { resolve } = require('path');

module.exports = {
  twin: {
    preset: 'emotion',
    config: resolve(__dirname, 'tailwind.config.js'),
  },
};

```
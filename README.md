# jstransformer-sass

[SASS](https://github.com/sass/node-sass) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-sass/master.svg)](https://travis-ci.org/jstransformers/jstransformer-sass)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-sass/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-sass)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-sass/master.svg)](http://david-dm.org/jstransformers/jstransformer-sass)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-sass.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-sass.svg)](https://www.npmjs.org/package/jstransformer-sass)

## Installation

    npm install jstransformer-sass

## API

```js
var sass = require('jstransformer')(require('jstransformer-sass'))

sass.render('h1\n  color: red').body
//=> 'h1 {\n  color: red;\n}'
```

## License

MIT

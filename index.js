'use strict';

var sass = require('sass');

exports.outputFormat = 'css';
exports.compile = function (str, options) {
  return sass.render(str);
};

'use strict';

var sass = require('sass');

exports.name = 'sass';
exports.outputFormat = 'css';

exports.render = function (str, options) {
  return sass.render(str);
};

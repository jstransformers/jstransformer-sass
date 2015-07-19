'use strict';

var scss = require('jstransformer-scss')

exports.name = 'sass'
exports.outputFormat = 'css'

exports.render = function (str, options, locals) {
  options.indentedSyntax = true
  return scss.render(str, options, locals)
}
exports.renderAsync = function (str, options, locals) {
  options.indentedSyntax = true
  return scss.renderAsync(str, options, locals)
}
exports.renderFile = function (str, options, locals) {
  options.indentedSyntax = true
  return scss.renderFile(str, options, locals)
}
exports.renderFileAsync = function (str, options, locals) {
  options.indentedSyntax = true
  return scss.renderFileAsync(str, options, locals)
}

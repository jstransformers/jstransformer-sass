'use strict'

const scss = require('jstransformer-scss')

exports.name = 'sass'
exports.outputFormat = 'css'

/**
 * Clean the given options, injecting indentedSyntax if required.
 */
function getOptions(options) {
  // Ensure options exists.
  options = options || {}

  // Default indentedSyntax to true for SASS syntax.
  if (!('indentedSyntax' in options)) {
    options.indentedSyntax = true
  }

  return options
}

exports.render = function (str, options, locals) {
  return scss.render(str, getOptions(options), locals)
}

exports.renderAsync = function (str, options, locals) {
  return scss.renderAsync(str, getOptions(options), locals)
}

exports.renderFile = function (str, options, locals) {
  return scss.renderFile(str, getOptions(options), locals)
}

exports.renderFileAsync = function (str, options, locals) {
  return scss.renderFileAsync(str, getOptions(options), locals)
}

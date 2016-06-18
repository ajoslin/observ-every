'use strict'

var toArray = require('to-array')
var Computed = require('observ/computed')

module.exports = function observEvery () {
  var values = Array.isArray(arguments[0]) ? arguments[0] : toArray(arguments)
  return Computed(values, function () {
    return toArray(arguments).every(Boolean)
  })
}

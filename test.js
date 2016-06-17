'use strict'

var test = require('tape')
var Observ = require('observ')
var observEvery = require('./')

test(function (t) {
  t.plan(2)

  var a = Observ(false)
  var b = Observ(true)

  var every = observEvery([a, b])

  t.equal(every(), false)

  a.set(true)
  t.equal(every(), true)
})

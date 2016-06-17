# observ-every [![Build Status](https://travis-ci.org/ajoslin/observ-every.svg?branch=master)](https://travis-ci.org/ajoslin/observ-every)

> Return a computed observ representing whether all the given observs are truthy

## Install

```
$ npm install --save observ-every
```


## Usage

```js
var Observ = require('observ')
var ObservEvery = require('observ-every')
var first = Observ(true)
var second = Observc(false)

var every = ObservEvery(first, second)
every() // => false

second.set(true)
every() // => true
```

## API

#### `ObservEvery(observ...|Array<observ>)` -> `observEvery`

Given an array of or splat of observs, return a read-only observable that will evaluate to true if every of the given observablers is truthy.

## License

MIT © [Andrew Joslin](http://ajoslin.com)

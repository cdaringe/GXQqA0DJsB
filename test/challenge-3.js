/**
 * challenge 3.
 *
 * Suppose you have a task that computes a single value.  That value is obtained
 * by aggegating simple integers.  Suppose that it:
 * - gets the first value, using a function a()
 *     - the aggregate is updated via `aggregate = someFunction(a_result)`
 * - gets the second and third values, via b1() and b2(), in asyncronously in parallel
 *     - the aggregate value is updated by `aggregate += someFunction(a_result + b1_result)`
 *       and `aggregate += someFunction(a_result + b2_result)`
 * - gets final value from c(), and aggregates just as above
 *     - the aggregate value is updated by `aggregate += someFunction(a_result + b1_result + b2_result + c_result)`
 *
 * in other words, the value is obtained using the following control flow:
 *   a     // tier 1 get a, aggregate
 *  / \
 * b1 b2   // tier 2 get b1, b2, aggregate
 * \  /
 *  c      // tier 3 get c, aggregate
 *
 * Each of these functions, however, are asynchronus.  Modify the `controller`
 * code to honor the control flow described above and satisfy the test.
 * The `entry` function expresses the intent of what you need to do, as if all
 * of the code was written synchronously.  In the above hypothetical, we reference
 * `someFunction`, but in the actual code below, `getTierValue` plays this role.
 *
 */
'use strict'

var tooling = require('./challenge-tooling')
var test = require('tape')
var jq = require('jquery')


// edits only required in the `controller`, after removing the `t.fail` below
var controller = {

  // start here. entry is written as though the other functions in controller
  // were synchronous.  however, other methods are asynchronus.  adapt `entry`
  // and the other methods as needed to pass the test!
  entry: function (cb) {
    var aggregate = 0

    this.tier = 1
    aggregate = this.getTierValue(this.a())

    this.tier = 2
    aggregate += this.getTierValue(a + this.b1()) // note how a is used w/ b1's output
    aggregate += this.getTierValue(a + this.b2())

    this.tier = 3
    aggregate += this.getTierValue(a + b1 + b2 + this.c())

    return cb(null, aggregate)
  },

  getTierValue: function (val) {
    return this.tier * val
  },

  /**
   * function `a` should use the node-style callback paradigm to callback with
   * the value 1 only after isEvenTime confirms that the current time... is even!
   */
  a: function (cb) {
    // calls back with whether or not we are an even count of ticks from the epoch
    // calls back many times until an even time is called
    model.isEvenTime(function testForEven (err, isEven) { if (isEven) cb(null, 1) })
  },

  /**
   * promises or callbacks OK. b1 must use getB1Value to get its value
   */
  b1: function () {
    return model.getB1Value() // returns a Promise. will resolve to b1's value
  },

  /**
   * no rules! must pass 5 to its caller though any means desired
   */
  b2: function () {
    return 5 // not an async function :)
  },

  /**
   * promises or callbacks OK. c must use getCValues to get its value
   */
  c: function () {
    model.getCValues() // returns an array of Promises. sum the results results on resolution
  }
}

var model = {
  getB1Value: function () { return Promise.resolve(3) },
  getCValues: function () {
    return [
      new Promise(function (res) { setTimeout(function () { res(1) }, 50) }),
      2,
      Promise.resolve(4)
    ]
  },
  isEvenTime: function (cb) {
    var loop = setInterval(function () {
      var isEven = !!(Date.now() % 2)
      cb(null, isEven)
      if (isEven) { clearInterval(loop) }
    }, 100)
  }
}

// NO EDITS BELOW
test('CHALLENGE 3 - async flow & aggregation', function (t) {
  // REMOVE the following two statements to begin!
  t.fail('==> 🚨 👀 please open test/challenge-3.js and follow comment prompts. 🚨 👀')
  return t.end()
  // END REMOVE
  t.plan(1)
  var end = function (err, r) {
    if (err) return t.fail(err)
    t.equals(r, 69, 'async aggregate == 69')
    t.end()
  }
  controller.entry(end)
})

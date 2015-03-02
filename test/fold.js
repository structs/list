
require('babel/register')

var foldl = require('../lib/foldl')
var foldr = require('../lib/foldr')

var Assert = require('assert')
var Type = require('is')

describe('#foldl() #foldr()', function () {

  it('should be curried', function () {
    Assert.ok(Type.fn(append(fst)))
    Assert.deepEqual(append(sec)([fst]), [1, 2])
  })

  it('should append an item to an array', function () {
    Assert.deepEqual(append(2, [1]), [1, 2])
  })
})
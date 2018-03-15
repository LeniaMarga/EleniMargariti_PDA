var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('returns 1+3=4', function(){
    calculator.numberClick(1);
  //  calculator.operatorClick(+);
    assert.equal(4, calculator.add(3))
  })

  it('returns 5-1=4', function(){
    calculator.numberClick(5);
    assert.equal(4, calculator.substract(1))
  })

  it('returns 2*4=8', function(){
    calculator.numberClick(2);
    assert.equal(8, calculator.multiply(4))
  })

  it('returns 4/2=2', function(){
    calculator.numberClick(4);
    assert.equal(2, calculator.divide(2))
  })

  it('returns 2', function(){
    assert.equal(2, calculator.numberClick(2))
  })

  it('returns +', function(){
    assert.equal(+, calculator.operatorClick(+));
  })

  it('returns 0', function(){
    assert.equal(0, calculator.clearClick());
  })

});

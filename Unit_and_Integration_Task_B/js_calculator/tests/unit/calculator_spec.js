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

  it('it returns 1+4=5', function(){
    calculator.numberClick('1');
    calculator.operatorClick('+');
    calculator.numberClick('4');
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal);
  })

  it('addition is working', function(){
    calculator.previousTotal = 2;
    calculator.add('4');
    assert.equal(6, calculator.runningTotal);
  })


  it('it returns 7-4=3', function(){
    calculator.numberClick('7');
    calculator.operatorClick('-');
    calculator.numberClick('4');
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  })

  it('it returns 8-1=7', function(){
    calculator.previousTotal = 8;
    calculator.subtract('1');
    assert.equal(7, calculator.runningTotal);
  })


  it('it returns 3*5=15', function(){
    calculator.previousTotal = 3;
    calculator.multiply('5');
    assert.equal(15, calculator.runningTotal);

  })

  it('it returns 21/7=3', function(){
    calculator.previousTotal = 21;
    calculator.divide('7');
    assert.equal(3, calculator.runningTotal);
  })

  it('it returns 4/2*3=6', function(){
    calculator.previousTotal = 4;
    calculator.operatorClick('/');
    calculator.numberClick('2');
    calculator.operatorClick('*');
    calculator.numberClick('3');
    calculator.operatorClick('=');
    assert.equal(6, calculator.runningTotal);
  })

  it('returns the number clicked', function(){
    calculator.numberClick('2');
    assert.equal(2, calculator.runningTotal);
  })

  it('clears all', function(){
    calculator.previousTotal = 2;
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

});

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should be able to do 3+3=6', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator+'))
    element(by.css('#number3')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal(6)
 })

 it('should be able to do 3-3=0', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number3')).click();
   element(by.css('#operator-'))
   element(by.css('#number3')).click();
 expect(running_total.getAttribute('value')).to.eventually.equal(0)
})

it('should be able to do 3*3=9', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number3')).click();
  element(by.css('#operator*'))
  element(by.css('#number3')).click();
expect(running_total.getAttribute('value')).to.eventually.equal(9)
})

it('should be able to do 3/3=1', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number3')).click();
  element(by.css('#operator/'))
  element(by.css('#number3')).click();
expect(running_total.getAttribute('value')).to.eventually.equal(1)
})

it('should be able to do 3/3=1', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number3')).click();
  element(by.css('#operator/'))
  element(by.css('#number3')).click();
expect(running_total.getAttribute('value')).to.eventually.equal(1)
})

it('should be able to do 3/3+1=2', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number3')).click();
  element(by.css('#operator/'))
  element(by.css('#number3')).click();
  running_total = element(by.css('#running_total'))
  element(by.css('#operator+'))
  element(by.css('#number1')).click();
expect(running_total.getAttribute('value')).to.eventually.equal(2)
})

it('should be able to do -3+3-100=-100', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number3')).click();
  element(by.css('#operator/'))
  element(by.css('#number3')).click();
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
expect(running_total.getAttribute('value')).to.eventually.equal(-100)
})

it('should be able to do 0/1 = +oo', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#operator/'))
  element(by.css('#number0')).click();
expect(running_total.getAttribute('value')).to.eventually.equal(+oo)
})

});

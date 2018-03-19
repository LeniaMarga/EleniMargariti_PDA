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
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

  it('Do the number buttons work to update the display of the running total?', function(){
    running_total = element(by.css('#running_total'));
    var i;
    for (i=1; i<=10; i++) {
      element(by.css('#number'+(i%10))).click();
    }
    expect(running_total.getAttribute('value')).to.eventually.equal('1234567890');
  })


  it('should be able to do 3+3=6', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('6');
 })

 it('should be able to do 3-3=0', function(){
   running_total = element(by.css('#running_total'));
   element(by.css('#number3')).click();
   element(by.css('#operator_subtract')).click();
   element(by.css('#number3')).click();
   element(by.css('#operator_equals')).click();
 expect(running_total.getAttribute('value')).to.eventually.equal('0');
})

it('should be able to do 3*3=9', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
expect(running_total.getAttribute('value')).to.eventually.equal('9');
})

it('should be able to do 3/3=1', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
expect(running_total.getAttribute('value')).to.eventually.equal('1');
})


it('should be able to chain operations together, like 3/3+1=2', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number1')).click();
  element(by.css('#operator_equals')).click();
expect(running_total.getAttribute('value')).to.eventually.equal('2');
})

it('should be able to do 3-6-1000=-1003', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number6')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
expect(running_total.getAttribute('value')).to.eventually.equal('-1003');
})


it('If you divide by zero, what is the effect?', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
})

});

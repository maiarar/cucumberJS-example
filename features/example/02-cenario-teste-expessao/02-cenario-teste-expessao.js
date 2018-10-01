const { Given, When, Then } = require('cucumber');
const assert = require('assert');

//Realização de uma expressão simples

Given('que eu tenho uma variável com o valor {int}', (firstNumber) =>  {
    this.number = firstNumber;
})

When('eu multiplico o valor desta variável com pelo valor numérico {int}', (newNumber) =>  {
 this.number = (this.number) * newNumber
})

Given('adiciono o número {int}', function and(numberC) {
 this.number += numberC;
});

Then('o valor da variável multiplicada passa a ser {int}', (result) =>  {
 assert(this.number,result);
})
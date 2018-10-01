const { Given, When, Then } = require('cucumber');
const assert = require('assert');

//Realização de uma soma simples

Given('que eu tenho uma variável com o valor numérico {int}', (firstNumber) =>  {
 this.number = firstNumber;
})

When('eu incremento o valor desta variável com mais {int}', (newNumber) =>  {
 this.number = (this.number) + newNumber;
})

Then('o valor da variável passa a ser {int}', (result) =>  {
 assert(this.number,result);
})

// Realização de uma subtração simples

When('eu subtraio o valor desta variável com o valor {int}', (newNumber) =>  {
    this.number = (this.number) - newNumber;
})
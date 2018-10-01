const { Before, BeforeAll, After, AfterAll } = require('cucumber');

/**
 * Executado ANTES de tudo
 */
BeforeAll(function (){
    console.log(`[BeforeAll] >>> VÃO COMEÇAR OS TESTES!\n`)
});

/**
 * Executado DEPOIS de tudo
 */
AfterAll(function (){
    console.log(`\n[AfterAll] >>> TERMINARAM OS TESTES!`)
});

/**
 * Executado ANTES de @soma
 */
Before({ tags: "@soma_e_subtracao" }, function (testCase) {
    console.log(`\n\t[Before] Soma!`) 
});
  
/**
 * Executado DEPOIS de @soma
 */
After({ tags: "@soma_e_subtracao" }, function (testCase) {
    console.log(`\n\t[After] Soma!`)
 });

/**
 * Executado ANTES de @expressao
 */
Before({ tags: "@expressao" }, function (testCase) {
    console.log(`\n\t[Before] Expressão!`) 
});
  
/**
 * Executado DEPOIS de @expressao
 */
After({ tags: "@expressao" }, function (testCase) {
    console.log(`\n\t[After] Expressão!`)
 });
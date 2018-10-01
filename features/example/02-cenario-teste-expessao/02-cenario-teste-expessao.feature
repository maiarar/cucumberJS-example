#Temos aqui outro cenário de exemplo, mas de expressão!

@expressao

Feature: Cenário de Teste Matemático

 Esse cenário de teste tem como objetivo realizar as validações de uma soma e de multiplicações.

 Scenario Outline: Realização de uma expressão simples
   Given que eu tenho uma variável com o valor <numeroA>
   When eu multiplico o valor desta variável com pelo valor numérico <numeroB>
   And adiciono o número <numeroC>
   Then o valor da variável multiplicada passa a ser <resultado>

   Examples:
     | numeroA | numeroB | numeroC | resultado |
     | 1       | 2       | 2       | 4         |
     | 3       | 4       | 5       | 17        |
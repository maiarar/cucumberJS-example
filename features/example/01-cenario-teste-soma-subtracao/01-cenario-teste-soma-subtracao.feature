#Esse é um cenário de exemplo de soma e subtração!
@soma_e_subtracao

Feature: Cenário de Soma e Subtração

  Esse cenário de teste tem como objetivo realizar as validações de uma soma e subtração.

  Scenario: Realização de uma soma simples
    Given que eu tenho uma variável com o valor numérico 1
    When eu incremento o valor desta variável com mais 1
    Then o valor da variável passa a ser 23

  Scenario Outline: Realização de uma subtração simples
    Given que eu tenho uma variável com o valor numérico <numeroA>
    When eu subtraio o valor desta variável com o valor <numeroB>
    Then o valor da variável passa a ser <numeroC>

    Examples:
      | numeroA | numeroB | numeroC |
      | 10      | 3       | 7       |
      | 100     | 33      | 77      |
      | 1000    | 333     | 777     |
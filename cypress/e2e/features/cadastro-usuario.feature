Feature: Funcionalidade Cadastro Usuário
  Como um novo usuário do site Automation Practice
  Quero conseguir fazer um cadastro com minhas informações
  Para que eu possa fazer compras

  Scenario: Cadastro com campos vazios
    Given que o usuário acessa a página de Cadastro
    When clica no botão "Cadastrar"
    Then deve apresentar a mensagem de erro "O campo nome deve ser prenchido"

  Scenario: Cadastro com campo e-mail vazio
    Given que o usuário acessa a página de Cadastro
    And preenche o nome "Fulano da Silva"
    And preenche a senha "123456"
    When clica no botão "Cadastrar"
    Then deve apresentar a mensagem de erro "O campo e-mail deve ser prenchido corretamente"

  Scenario: Cadastro com campo e-mail inválido
    Given que o usuário acessa a página de Cadastro
    And preenche o nome "Fulano da Silva"
    And preenche o e-mail inválido "fulano"
    And preenche a senha "123456"
    When clica no botão "Cadastrar"
    Then deve apresentar a mensagem de erro "O campo e-mail deve ser prenchido corretamente"

  Scenario: Cadastro com campo senha vazia
    Given que o usuário acessa a página de Cadastro
    And preenche o nome "Fulano da Silva"
    And preenche o e-mail "fulano@test.com"
    When clica no botão "Cadastrar"
    Then deve apresentar a mensagem de erro "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Cadastro com campo senha inválida
    Given que o usuário acessa a página de Cadastro
    And preenche o nome "Fulano da Silva"
    And preenche o e-mail "fulano@test.com"
    And preenche a senha "12345"
    When clica no botão "Cadastrar"
    Then deve apresentar a mensagem de erro "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Cadastro realizado com sucesso
    Given que o usuário acessa a página de Cadastro
    And preenche o nome "Fulano da Silva"
    And preenche o e-mail "fulano@test.com"
    And preenche a senha "123456"
    When clica no botão "Cadastrar"
    Then deve apresentar a mensagem "Cadastro realizado!"
    And deve apresentar a mensagem "Bem-vindo Fulano da Silva"
    And o usuário deve ser direcionado para o dashboard da página
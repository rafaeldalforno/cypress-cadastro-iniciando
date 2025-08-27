/// <reference types = "cypress" />

import home_page from '../support/pages/home_page';

// importando dados da fixtures
const user_data = require('../fixtures/desafio_valid_data.json');
const user_invalid_data = require('../fixtures/desafio_invalid_data.json');

// const screens = ['desktop', 'iphone-x', 'iphone-6'] // Testes para diferentes telas
const screens = ['desktop']

screens.forEach(element => {
  describe('Cadastro de User', () => {
  // const user_name = 'Fulano da Silva';
  // const user_email = 'fulano.silva@test.com';
  // const user_password = '123456';

  beforeEach('Acessando página de cadastro', () => {
    // config de tela de teste
    if(element != 'desktop') {
      cy.viewport(element);
    }
    // Acessando Tela de Cadastro de usuário
    // cy.accessRegisterPage();
    home_page.accessRegisterPage();
  })

  it('Cadastro dados vazio', () => {
    // // config de tela de teste
    // cy.viewport(1700, 1200);
    
    // // acessando a homepage e clicando no "cadastro"
    // cy.visit('/')
    //   .get('.fa-lock')
    //   .click();

    cy.saveRegister();

    // verificando mensagem de erro
    cy.get('#errorMessageFirstName')
      .then((element) => {
        expect(element).visible
        expect(element.text()).equals('O campo nome deve ser prenchido')
      })
  });

  it('Cadastro campo e-mail vazio', () => {
    // cy.viewport(1700, 1200);
    // cy.visit('/')
    //   .get('.fa-lock')
    //   .click();

    cy.fillName(user_data.name);
    cy.fillPassword(user_data.password);
    cy.saveRegister();

    cy.errorMessage('O campo e-mail deve ser prenchido corretamente');
  });

  it('Cadastro campo e-mail inválido', () => {
    // cy.viewport(1700, 1200);
    // cy.visit('/')
    //   .get('.fa-lock')
    //   .click();

    cy.fillName(user_data.name);
    cy.fillEmail(user_invalid_data.email);
    cy.fillPassword(user_data.password);
    cy.saveRegister();

    cy.errorMessage('O campo e-mail deve ser prenchido corretamente');
  });

  it('Cadastro campo senha vazia', () => {
    // cy.viewport(1700, 1200)
    // cy.visit('/')
    //   .get('.fa-lock')
    //   .click();

    cy.fillName(user_data.name);
    cy.fillEmail(user_data.email);
    cy.saveRegister();

    cy.errorMessage('O campo senha deve ter pelo menos 6 dígitos');
  });

  it('Cadastro campo senha inválida', () => {
    // cy.viewport(1700, 1200)
    // cy.visit('/')
    //   .get('.fa-lock')
    //   .click();

    cy.fillName(user_data.name);
    cy.fillEmail(user_data.email);
    cy.fillPassword(user_invalid_data.password);
    cy.saveRegister();
    
    cy.errorMessage('O campo senha deve ter pelo menos 6 dígitos');
  });

  it('Cadastro realizado com Sucesso', () => {
    // cy.viewport(1700, 1200)
    // cy.visit('/')
    //   .get('.fa-lock')
    //   .click();

    cy.fillName(user_data.name);
    cy.fillEmail(user_data.email);
    cy.fillPassword(user_data.password);
    cy.saveRegister();
    
    cy.successRegister(user_data.name);

    cy.confirmRegister();

    cy.confirmLogged(user_data.name);
  });

  });
});
/// <reference types = "cypress" />

// importando dados da fixtures
const user_data = require('../fixtures/desafio_valid_data.json');
const user_invalid_data = require('../fixtures/desafio_invalid_data.json');

describe('Cadastro de User', () => {
  // const user_name = 'Fulano da Silva';
  // const user_email = 'fulano.silva@test.com';
  // const user_password = '123456';

  beforeEach('Acessando página de cadastro', () => {
    // config de tela de teste
    cy.viewport(1700, 1200);
    
    // acessando a homepage e clicando no "cadastro"
    cy.visit('/')
      .get('.fa-lock')
      .click();
  })

  it('Cadastro dados vazio', () => {
    // // config de tela de teste
    // cy.viewport(1700, 1200);
    
    // // acessando a homepage e clicando no "cadastro"
    // cy.visit('/')
    //   .get('.fa-lock')
    //   .click();

    // clicando no botão cadastrar
    cy.get('#btnRegister')
      .click();

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

    cy.get('#user')
      .type(user_data.name);

    cy.get('#password')
      .type(user_data.password);

    cy.get('#btnRegister')
      .click();

    cy.get('#errorMessageFirstName')
      .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
      .then((element) => {
        expect(element).visible
        expect(element.text()).equals('O campo e-mail deve ser prenchido corretamente')
      })
  });

  it('Cadastro campo e-mail inválido', () => {
    // cy.viewport(1700, 1200);
    // cy.visit('/')
    //   .get('.fa-lock')
    //   .click();

    cy.get('#user')
      .type(user_data.name)
    cy.get('#email')
      .type(user_invalid_data.email)
    cy.get('#password')
      .type(user_data.password)
    cy.get('#btnRegister')
      .click()
    
    cy.get('#errorMessageFirstName')
      .then((element) => {
        expect(element).visible
        expect(element.text()).equal('O campo e-mail deve ser prenchido corretamente')
      })
  });

  it('Cadastro campo senha vazia', () => {
    // cy.viewport(1700, 1200)
    // cy.visit('/')
    //   .get('.fa-lock')
    //   .click();

    cy.get('#user')
      .type(user_data.name);
    cy.get('#email')
      .type(user_data.email);
    cy.get('#btnRegister')
      .click();
    
    cy.get('#errorMessageFirstName')
      .then((element) => {
        expect(element).visible
        expect(element.text()).equals('O campo senha deve ter pelo menos 6 dígitos')
      })
  });

  it('Cadastro campo senha inválida', () => {
    // cy.viewport(1700, 1200)
    // cy.visit('/')
    //   .get('.fa-lock')
    //   .click();

    cy.get('#user')
      .type(user_data.name);
    cy.get('#email')
      .type(user_data.email);
    cy.get('#password')
      .type(user_invalid_data.password);
    cy.get('#btnRegister')
      .click();
    
    cy.get('#errorMessageFirstName')
      .then((element) => {
        expect(element).visible
        expect(element.text()).equals('O campo senha deve ter pelo menos 6 dígitos')
      });
  });

  it('Cadastro realizado com Sucesso', () => {
    // cy.viewport(1700, 1200)
    // cy.visit('/')
    //   .get('.fa-lock')
    //   .click();

    cy.get('#user')
      .type(user_data.name);
    cy.get('#email')
      .type(user_data.email);
    cy.get('#password')
      .type(user_data.password);
    cy.get('#btnRegister')
      .click();
    
    cy.get('#swal2-title')
      .then((element) => {
        expect(element).visible
        expect(element.text()).equal('Cadastro realizado!');
      });

    cy.get('#swal2-html-container')
      .then((element) => {
        expect(element.text()).equal(`Bem-vindo ${user_data.name}`);
      });

    cy.get('.swal2-confirm')
      .click()

    cy.get('#userLogged')
      .should('contain', `${user_data.name}`);
  });

});
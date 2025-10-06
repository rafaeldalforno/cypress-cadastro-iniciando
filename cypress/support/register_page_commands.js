/// <reference types = "cypress" />

// ELEMENTOS:
// const btnRegister = '#btnRegister';
const elements = {
  buttons: {
    register: '#btnRegister',
    confirmRegister: '.swal2-confirm'
  }, 
  fields: {
    name: '#user',
    email: '#email',
    password: '#passwordX' 
  },
  messages: {
    error: '#errorMessageFirstName',
    successTitle: '#swal2-title',
    successSubtitle: '#swal2-html-container'
  }
}
const userProfile = '#userLogged';

// AÇÕES / MÉTODOS / FUNÇÕES:
Cypress.Commands.add('saveRegister', () => {
  // clicando no botão cadastrar
    cy.get(elements.buttons.register)
      .click();
});

Cypress.Commands.add('fillName', (name) => {
  cy.get(elements.fields.name)
    .type(name);
});

Cypress.Commands.add('fillEmail', (email) => {
  cy.get(elements.fields.email)
    .type(email);
});

Cypress.Commands.add('fillPassword', (password) => {
  cy.get(elements.fields.password)
    .type(password);
});

Cypress.Commands.add('errorMessage', (message) => {
  cy.get(elements.messages.error)
    .should('have.text', message)
    .then((element) => {
      expect(element).visible
      expect(element.text()).equals(message)
    })
});

Cypress.Commands.add('successRegister', (name) => {
  cy.get(elements.messages.successTitle)
      .then((element) => {
        expect(element).visible
        expect(element.text()).equal('Cadastro realizado!');
      });

    cy.get(elements.messages.successSubtitle)
      .then((element) => {
        expect(element.text()).equal(`Bem-vindo ${name}`);
      });
});

Cypress.Commands.add('confirmRegister', () => {
  cy.get(elements.buttons.confirmRegister)
      .click();
});

Cypress.Commands.add('confirmLogged', (name) => {
  cy.get(userProfile)
      .should('contain', `${name}`);
});
/// <reference types = "cypress" />

Cypress.Commands.add('saveRegister', () => {
  // clicando no botão cadastrar
    cy.get('#btnRegister')
      .click();
});

Cypress.Commands.add('fillName', (name) => {
  cy.get('#user')
    .type(name);
});

Cypress.Commands.add('fillEmail', (email) => {
  cy.get('#email')
    .type(email);
});

Cypress.Commands.add('fillPassword', (password) => {
  cy.get('#password')
    .type(password);
});

Cypress.Commands.add('errorMessage', (message) => {
  cy.get('#errorMessageFirstName')
    .should('have.text', message)
    .then((element) => {
      expect(element).visible
      expect(element.text()).equals(message)
    })
});

Cypress.Commands.add('successRegister', (name) => {
  cy.get('#swal2-title')
      .then((element) => {
        expect(element).visible
        expect(element.text()).equal('Cadastro realizado!');
      });

    cy.get('#swal2-html-container')
      .then((element) => {
        expect(element.text()).equal(`Bem-vindo ${name}`);
      });
});

Cypress.Commands.add('confirmRegister', () => {
  cy.get('.swal2-confirm')
      .click();
});

Cypress.Commands.add('confirmLogged', (name) => {
  cy.get('#userLogged')
      .should('contain', `${name}`);
});
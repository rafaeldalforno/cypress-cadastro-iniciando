// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types = "cypress" />

Cypress.Commands.add('accessRegisterPage', () => {
    // config de tela de teste
    cy.viewport(1700, 1200);
    
    // acessando a homepage e clicando no "cadastro"
    cy.visit('/')
      .get('.fa-lock')
      .click();
});
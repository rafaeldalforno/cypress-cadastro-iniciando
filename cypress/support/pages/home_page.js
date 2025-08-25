/// <reference types = "cypress" />

export default {
  accessRegisterPage() {
    // acessando a homepage e clicando no "cadastro"
    cy.visit('/')
      .get('.fa-lock')
      .click();

    // verifica se está na página de cadastro
    cy.get('#user')
      .should('be.visible');
  }
}
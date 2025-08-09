/// <reference types = "cypress" />

export default {
  accessRegisterPage() {
    // config de tela de teste
    cy.viewport(1700, 1200);
    
    // acessando a homepage e clicando no "cadastro"
    cy.visit('/')
      .get('.fa-lock')
      .click();

    // verifica se está na página de cadastro
    cy.get('#user')
      .should('be.visible');
  }
}
/// <reference types="cypress" />

cypress.commands.add('Login', (email, password) => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#login').click();

    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/login');
    }) 

    cy.get('body > nav >button').should('be.visible');
});

cypress.commands.add('MsgLoginFalho', () => {
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('be.visible');
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text', 'E-mail e/ou senha inválios')
});
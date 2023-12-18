//hooks
    //before - antes de todos os testes
    //beforeEach - antes de cada teste
    //after - depis de todos os testes
    //afterEach - depois de cada teste
/// <reference types= "cypress" />
const element = require("../fixtures/login.json")

beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login');
});

afterEach(() => {
    cy.screenshot();
})

describe ('Login', () => {

    it('Login com sucesso', () => {
        const email = cypress.env('EMAIL');
        const password = cypress.env('PASSWORD')
        cy.login(email, password);
        cy.MsgLoginFalho()

    });


    it('Login com e-mail válido e a senha inválida', () => {
    
        cy.get(element.input_email).type(cypress.env('EMAIL'));
        cy.get(element.input_password).type(cypress.env('PASSWORD_INV'));
        cy.get(element.btn_login).click();
            
    });
    
    it('Login com e-mail inválido e a senha válida', () => {
        
        cy.get(element.input_email).type(cypress.env('EMAIL_INV'));
        cy.get(element.input_password).type('1234@test');
        cy.get(element.btn_login).click().screenshot('bt_entrar');
      
    });

})



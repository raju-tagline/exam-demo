// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************

// -------DECLARE TYPE INTERFACE OF DECLARE FUNCTION KEYWORD-------
declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(email: string, password: string): typeof login;
  }
  interface Chainable<Subject = any> {
    singup(
      name: string,
      email: string,
      password: string,
      role: string
    ): typeof singup;
  }
  interface Chainable<Subject = any> {
    getSignUp(): typeof getSignUp;
  }
}

// -------LOGIN FUNCTION-------
function login(email: string, password: string): void {
  cy.visit('/');
  cy.url().should('include', 'login');
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('#btn-login').click();
}

Cypress.Commands.add('login', login);

// -------SIGN UP FUNCTION-------
function singup(
  name: string,
  email: string,
  password: string,
  role: string
): void {
  cy.getSignUp();
  cy.get('[ formControlName="name" ]').type(name);
  cy.get('[formControlName = "email"]').type(email);
  cy.get('[formControlName = "password"]').type(password);
  cy.get('[ formControlName ="role" ]').select(role);
  //cy.get('button').click();
}

Cypress.Commands.add('singup', singup);

// GET SINF UP
function getSignUp() {
  cy.visit('/');
  cy.get('#a-singup').click();
  cy.url().should('include', 'signup');
}
Cypress.Commands.add('getSignUp', getSignUp);

//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

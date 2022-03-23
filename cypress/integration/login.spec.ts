describe('exam demo login spec', () => {
  //-----------------CYPRESS HOOKS STARTS-----------------

  before(() => {
    cy.visit('/');
  });

  //-----------------CYPRESS HOOKS ENDS-----------------

  //-----------------CYPRESS TEST CASES STARTS-----------------

  it('Check validation of email by touched and untouched', () => {
    cy.url().should('include', 'login');
    cy.get('#email').click();
    cy.get('#form-div').click('bottom');
  });

  it('Check validation of password by touched and untouched', () => {
    cy.url().should('include', 'login');
    cy.get('#password').click();
    cy.get('#form-div').click('bottom');
  });

  it('check email validation should have @ and proper valid mail', () => {
    cy.url().should('include', 'login');
    cy.get('#email').type('asdfasdf');
    cy.get('#form-div').click('bottom');
  });

  it('check email validation with @@ at same time', () => {
    cy.url().should('include', 'login');
    cy.get('#email').type('asdfasdf@@');
    cy.get('#form-div').click('bottom');
  });

  it('check email validation with . at last of email', () => {
    cy.url().should('include', 'login');
    cy.get('#email').type('asdfasdf@gmail.');
    cy.get('#form-div').click('bottom');
  });

  it('check password validation should have proper length', () => {
    cy.url().should('include', 'login');
    cy.get('#password').type('sa');
    cy.get('#form-div').click('bottom');
  });

  it('check both email and password area valid or not', () => {
    cy.url().should('include', 'login');
    cy.get('#email').type('raju.tagline+23@gmail..com');
    cy.get('#password').type('raju1234');
    cy.get('#form-div').click('bottom');
  });

  it('check auth service is used or not', () => {
    cy.visit('/teacher');
  });

  it('Visits the initial project page first time', () => {
    cy.login('raju.tagline+1@gmail.com', 'Raju1234');
  });

  //-----------------CYPRESS TEST CASES ENDS-----------------
});

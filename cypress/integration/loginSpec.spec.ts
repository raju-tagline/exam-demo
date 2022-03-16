describe('First login test', () => {
  it('check email validation should have @ and proper valid mail', () => {
    cy.visit('/');
    cy.url().should('include', 'login');
    cy.get('#email').type('asdfasdf');
    cy.get('#btn-login').click();
  });

  it('check password validation should have proper length', () => {
    cy.url().should('include', 'login');
    cy.get('#password').type('sa');
    cy.get('#btn-login').click();
  });

});

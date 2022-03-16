describe('First signup test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.get('#a-singup').click();
    cy.url().should('include', 'signup');
    cy.get('[ formControlName="name" ]').type('test one');
    cy.get('[formControlName = "email"]').type('cypress.test.raju@gmail.com');
    cy.get('[formControlName = "password"]').type('Raju1234');
    cy.get('[ formControlName ="role" ]').select('Teacher');
    //cy.get('button').click();
  });
});

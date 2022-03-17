describe('exxam demo login spec', () => {
  xit('Check validation of email by touched and untouched', () => {
    cy.visit('/');
    cy.url().should('include', 'login');
    cy.get('#email').click();
    cy.get('#form-div').click('bottom');
    cy.wait(3000);
  });

  xit('Check validation of password by touched and untouched', () => {
    cy.visit('/');
    cy.url().should('include', 'login');
    cy.get('#password').click();
    cy.get('#form-div').click('bottom');
    cy.wait(3000);
  });

  xit('check email validation should have @ and proper valid mail', () => {
    cy.visit('/');
    cy.url().should('include', 'login');
    cy.get('#email').type('asdfasdf');
    cy.get('#btn-login').click();
    // cy.get('#form-div').click('bottom');
    cy.wait(3000);
  });

  xit('check email validation with @@ at same time', () => {
    cy.visit('/');
    cy.url().should('include', 'login');
    cy.get('#email').type('asdfasdf@@');
    cy.get('#btn-login').click();
    // cy.get('#form-div').click('bottom');
    cy.wait(3000);
  });

  xit('check email validation with . at last of email', () => {
    cy.visit('/');
    cy.url().should('include', 'login');
    cy.get('#email').type('asdfasdf@gmail.');
    cy.get('#btn-login').click();
    cy.wait(3000);
  });

  xit('check password validation should have proper length', () => {
    cy.visit('/');
    cy.url().should('include', 'login');
    cy.get('#password').type('sa');
    cy.get('#btn-login').click();
    cy.wait(3000);
  });

  xit('check both email and password area valid or not', () => {
    cy.visit('/');
    cy.url().should('include', 'login');
    cy.get('#email').type('raju.tagline+23@gmail..com');
    cy.get('#password').type('raju1234');
    cy.get('#btn-login').click();
  });

  xit('check auth service is used or not', () => {
    cy.visit('/teacher');
  })

  xit('Visits the initial project page first time', () => {
    cy.login('raju.tagline+1@gmail.com', 'Raju1234');
  });
});

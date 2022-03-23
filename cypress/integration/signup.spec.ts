describe('First signup test', () => {
  it('check validation in user sign up without and details', () => {
    cy.getSignUp();
    cy.get('#btn-signup').click();
  });

  it('check validation of name using touch and untouch', () => {
    cy.getSignUp();
    cy.get('#name').click();
    cy.get('#form-div').click('bottom');
  });

  it('check validation of email using touch and untouch', () => {
    cy.getSignUp();
    cy.get('#email').click();
    cy.get('#form-div').click('bottom');
  });

  it('check validation of password using touch and untouch', () => {
    cy.getSignUp();
    cy.get('#password').click();
    cy.get('#form-div').click('bottom');
  });

  it('check email validation using pattern', () => {
    cy.getSignUp();
    cy.get('#email').type('asdfasdf');
    cy.get('#form-div').click('bottom');
  });

  it('check email validation using pattern', () => {
    cy.getSignUp();
    cy.get('#email').type('asdfasdf@asdf');
    cy.get('#form-div').click('bottom');
  });

  it('check validation of select using touch and untouch', () => {
    cy.getSignUp();
    // cy.get('select').('Teacher');
    cy.get('#form-div').click('bottom');
  });

  it('Visits the initial project page', () => {
    cy.singup('test-1', 'test@test.com', 'test1234', 'Teacher');
    cy.get('#btn-signup').click();
  });
});

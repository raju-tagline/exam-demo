describe('First login test', () => {
  xit('Incorrect password for user login', () => {
    cy.login('raju.tagline+1@gmail.com', 'raju1234');
  });

  it('Visits the initial project page first time', () => {
    cy.login('raju.tagline+1@gmail.com','Raju1234')
  });
});

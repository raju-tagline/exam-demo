describe('After login', () => {
  it('check validation of login button', () => {
    cy.visit('/');
    cy.get('#btn-login').should('be.disabled');
  });

  it('Visits the first page after login', () => {
    cy.login('raju.tagline+1@gmail.com', 'Raju1234');
    cy.wait(1000);
    cy.url().should('include', 'teacher/student-list');
    cy.get('#verified-Student').and('have.text', 'Verified Student');
  });

  xit('check welcome text is present or not', () => {
    cy.get('app-dashboard > .navbar > :nth-child(1)').should(
      'have.text',
      ' Welcome,  '
    );
    cy.scrollTo('bottom');
  });

  xit('Visits student view exam after student list ', () => {
    //get table
    cy.get('table').should('have.class', 'table');

    //get table th deatils
    cy.get('table > thead > tr > th').should(
      'have.text',
      'S.NoStatusIdNameEmailAction'
    );

    //get singel person info
    cy.get('table tr')
      .contains('td', '620f265128293b0015993d98')
      .should('be.visible');

    //get text using tr td nth-child
    cy.get('table > tbody > tr:nth-child(287) > td:nth-child(4)').should(
      'have.text',
      ' Raju Student '
    );
  });

  xit('clear localstprage', () => {
    cy.clearLocalStorage();
    cy.contains('LogOut').should('be.visible');
  });

  xit('reload', () => {
    cy.reload();
    // cy.get(':nth-child(1) > .btn').should('have.class', 'btn btn-success');
    cy.get(':nth-child(1) > .btn').should('have.text', 'LogIn');
  });
});

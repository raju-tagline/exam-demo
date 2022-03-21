describe('After login', () => {
  it('Visits the first page after login', () => {
    cy.login('raju.tagline+1@gmail.com', 'Raju1234');
    cy.wait(1000);
    // cy.reload();
  });

  it('check welcome text is present or not', () => {
    // cy.wait(2000);
    // cy.reload(); Welcome, Raju Tagline
    cy.get('app-dashboard > .navbar > :nth-child(1)').should(
      'have.text',
      ' Welcome,  '
    );
    cy.scrollTo('bottom');
  });

  it('Visits student view exam after student list ', () => {
    // cy.login('raju.tagline+1@gmail.com', 'Raju1234');
    // cy.wait(3000);
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

  it('clear localstprage', () => {
    // cy.wait(2000);
    cy.clearLocalStorage();
    cy.contains('LogOut').should('be.visible');
  });

  it('reload', () => {
    cy.reload();
    // cy.get(':nth-child(1) > .btn').should('have.class', 'btn btn-success');
    cy.get(':nth-child(1) > .btn').should('have.text', 'LogIn');
  });
});

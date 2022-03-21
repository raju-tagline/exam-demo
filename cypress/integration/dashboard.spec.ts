describe('After login', () => {
  it('Visits the first page after login', () => {
    cy.login('raju.tagline+1@gmail.com', 'Raju1234');
    cy.wait(2000);
    // cy.url().should('include', '/teacher/student-list');
    // cy.wait(2000);
  });

  it('clear localstroage', () => {
    cy.wait(2000);
    cy.reload();
    cy.get('app-dashboard > .navbar > :nth-child(1)').should(
      'have.text',
      'Welcome, Raju Tagline'
    );
    cy.wait(2000);
    cy.clearLocalStorage();
  });

  xit('reload', () => {
    cy.reload();
    cy.get(':nth-child(1) > .btn').should('have.class', 'btn btn-success');
    cy.get(':nth-child(1) > .btn').should('have.text', 'LogIn');
  });

  xit('Visits student view exam after student list ', () => {
    cy.login('raju.tagline+1@gmail.com', 'Raju1234');
    cy.wait(3000);
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

  xit('test title of website', () => {
    //get title of website
    cy.login('raju.tagline+1@gmail.com', 'Raju1234');
    cy.wait(3000);
    cy.title().should('have.text', 'Welcome, Raju Tagline');
  });
});

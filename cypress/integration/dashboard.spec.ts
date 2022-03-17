describe('After login', () => {


  it('Visits student view exam after student list ', () => {
    cy.login('raju.tagline+1@gmail.com', 'Raju1234');
    cy.wait(3000);
    //get table
    cy.get('table').should('have.class', 'table');
    
    //get table th deatils
    cy.get('table tr th').should('have.text', 'S.NoStatusIdNameEmailAction');

    //get singel person info
    cy.get('table tr')
      .contains('td', '620f265128293b0015993d98')
      .should('be.visible');
    
    //get text using tr td nth-child
    cy.get('table > tbody > tr:nth-child(287) > td:nth-child(4)').should(
      'have.text',
      ' Raju Student '
    );

    //
  });
});

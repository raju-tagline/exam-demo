describe('Teacher dashboard test cases', () => {
  //-----------------CYPRESS HOOKS STARTS-----------------

  before(() => {
    cy.visit('/'); // before run the spec cypress visit one time here
  });

  beforeEach(() => {
    cy.viewport(1500, 800); // it will run after every it block
  });

  after(() => {
    cy.viewport('ipad-2', 'landscape'); // run after the all the test are complete
  });

  afterEach(() => {
    cy.scrollTo('bottom'); // run after every test case ends
  });

  //-----------------CYPRESS HOOKS ENDS-----------------

  //-----------------CYPRESS TEST CASES STARTS-----------------

  xit('change view of cypress display', () => {
    cy.visit('/');
    cy.viewport(1200, 500);
  });

  it.only('check validation of login button', () => {
    cy.visit('/');
    cy.get('#btn-login').should('be.disabled');
  });

  //use only to use only one test case
  it.only('Visits the first page after login', () => {
    cy.login('raju.tagline+1@gmail.com', 'Raju1234');
    cy.wait(1000);
    cy.url().should('include', 'teacher/student-list');
    cy.get('#verified-Student').and('have.text', 'Verified Student');
    cy.get('table > tbody > tr:nth-child(130) > td:nth-child(6)').click({
      force: true,
    }); //for force click
  });

  xit('check welcome text is present or not', () => {
    cy.get('app-dashboard > .navbar > :nth-child(1)').should(
      'have.text',
      ' Welcome, Raju Tagline '
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

  //-----------------CYPRESS TEST CASES ENDS-----------------
});

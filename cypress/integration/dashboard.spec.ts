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

  //use and assertions
  it.only('Check and assertions', () => {
    cy.get('#btn-login').and('be.disabled');
  });

  //change size of screen for responsive test
  it('change view of cypress display', () => {
    cy.viewport(1200, 500);
  });

  //check button disable or not
  it('check validation of login button', () => {
    cy.get('#btn-login').should('be.disabled');
  });

  //use only to use only one test case
  it('Login to website', () => {
    cy.login('raju.tagline+1@gmail.com', 'Raju1234');
  });

  //first page og website
  it('First page after login', () => {
    cy.get('#verified-Student', { timeout: 10000 }).and(
      'have.text',
      'Verified Student'
    );
    cy.get('table > tbody > tr:nth-child(130) > td:nth-child(6)', {
      timeout: 10000,
    }).click({
      force: true,
    }); //for force click
  });

  //name of dashboard
  it('check welcome text is present or not', () => {
    cy.get('app-dashboard > .navbar > :nth-child(1)', {
      timeout: 10000,
    }).should('have.text', ' Welcome, Raju Tagline ');
  });

  it('Visits student view exam after student list ', () => {
    //get table
    cy.get('table').should('have.class', 'table');

    //get table th deatils
    cy.get('table > thead > tr > th').should(
      'have.text',
      'S.NoStatusIdNameEmailAction'
    );

    //get single person info
    cy.get('table tr')
      .contains('td', '620f265128293b0015993d98')
      .should('be.visible');

    //get text using tr td nth-child
    cy.get('table > tbody > tr:nth-child(287) > td:nth-child(4)').should(
      'have.text',
      ' Raju Student '
    );
  });

  //clera LocalStorage
  it('clear localstorage', () => {
    cy.clearLocalStorage();
    cy.contains('LogOut').should('be.visible');
  });

  it.only('reload', () => {
    cy.reload();
    cy.get(':nth-child(1) > .btn').and('have.class', 'btn btn-success');
    cy.get(':nth-child(1) > .btn').should('have.text', 'LogIn');
  });

  //-----------------CYPRESS TEST CASES ENDS-----------------
});

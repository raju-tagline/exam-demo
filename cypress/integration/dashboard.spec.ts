describe('After login', () => {
  it('Visits the first page after login', () => {
    cy.login('raju.tagline+1@gmail.com', 'Raju1234');
    cy.wait(2000)
    cy.url().should('include', '/teacher/student-list');
    cy.wait(2000);
    // cy.get('#student-View-Exam').click();
    // cy.wait(2000);
    // cy.get('#show-exam').click();
    // cy.wait(2000);
    // cy.get('#close-info').click();
    // cy.wait(2000);
    // cy.get('#verified-Student').click();
    // cy.wait(2000);
    // cy.get('#student-Exam').click();
    // cy.wait(2000);
    // cy.get('#btn-logout').click();
  });

  it('Visits student view exam after student list ', () => {
    cy.url().should('/teacher');
    // cy.login('raju.tagline+1@gmail.com', 'Raju1234');
    cy.wait(3000);
    cy.get('.btn-dark').click();
  });
});

describe('the app', () => {

  it('should call the correct endpoint', () => {

    cy.server();

    cy.route({
      method: 'GET',
      url: '/api/pathA?value=hereissometesttext',
    }).as('getData');

    cy.route({
      method: 'GET',
      url: '/api/pathB?value=hereissometesttext',
    }).as('getData2');


    cy.visit("http://localhost:3000");
    cy.get("#btn").click();
    cy.wait('@getData').then((xhr) => {
      expect(xhr.url).to.equal('http://localhost:3000/api/pathA?value=hereissometesttext');
    })
    cy.wait('@getData2').then((xhr) => {
      expect(xhr.url).to.equal('http://localhost:3000/api/pathB?value=hereissometesttext');
    })
  })
});
context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have title', () => {
    cy.get('ion-title').should('contain', 'Home');
  });

  it('should be blank', () => {
    cy.findByText('Welcome to Ionic').should('exist');
  });
});

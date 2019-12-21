context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have title', () => {
    cy.get('ion-title').should('contain', 'Home');
  });

  it('should be blank', () => {
    cy.get('ion-card-title').should('contain', 'Welcome to Ionic');
  });
});

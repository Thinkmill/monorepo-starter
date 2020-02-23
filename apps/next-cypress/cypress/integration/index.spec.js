describe('Basic Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/');
  });

  afterEach(() => {
    cy.get('input').clear();
  });

  it('should check if the input element exists', () => {
    cy.get('input').should('exist');
  });

  it('should render the correct value', () => {
    const value = "Hello World!";
    cy.get('input').clear().type(value).should('have.value', value);
  });

});

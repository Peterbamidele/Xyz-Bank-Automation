describe('Xyz LandingPage', () => {
  it('User should be able to vist landing page with Url', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.title().should('eq','XYZ Bank')
  })
})
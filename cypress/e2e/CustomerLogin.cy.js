describe('Customer Login Page',() =>{
    it('User Should be able to login to website',()=>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get('.borderM > :nth-child(1) > .btn').click()
    })
})
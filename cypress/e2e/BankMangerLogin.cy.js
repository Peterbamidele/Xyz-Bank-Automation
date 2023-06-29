describe('Bank Manager Login Page',()=>{
    it('Bank manager should be able to login to plaform',() =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get(':nth-child(3) > .btn').click()
    })

    it('Bank manager should be able to add customer',() =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get(':nth-child(3) > .btn').click()
        cy.get('[ng-class="btnClass1"]').click()

        // Type first Name
        cy.get(':nth-child(1) > .form-control').type('Tamidele')
        //Type LastName
        cy.get(':nth-child(2) > .form-control').type('delebami')
        //Type Postal Code
        cy.get(':nth-child(3) > .form-control').type('10001')
        // Add Customer
        cy.get('form.ng-dirty > .btn').click()
    })

    it('Bank manager should be able to create customer account',() =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get(':nth-child(3) > .btn').click()
        cy.get('[ng-class="btnClass1"]').click()

        // Type first Name
        cy.get(':nth-child(1) > .form-control').type('Bamidele')
        //Type LastName
        cy.get(':nth-child(2) > .form-control').type('delebami')
        //Type Postal Code
        cy.get(':nth-child(3) > .form-control').type('10001')
        // Add Customer
        cy.get('form.ng-dirty > .btn').click()
    })

    it.only('Bank manager should be able to view, delete and search customer details',() =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.title().should('eq','XYZ Bank')
        cy.get(':nth-child(3) > .btn').click()

        //Click Customer Button
        cy.get('[ng-class="btnClass3"]').click()

        cy.get('.form-control').type('Ron')
        
        //Delete a customer 
        cy.get(':nth-child(5) > button').click()
    })
})
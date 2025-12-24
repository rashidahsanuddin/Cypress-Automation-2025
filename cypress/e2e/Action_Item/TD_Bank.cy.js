describe ('TD Bank Test Suite', () => {

    it ('Verify TD Bank Loan Application Functionality', () => {

        //Navigate to TD Bank Homepage
        cy.visit('https://www.td.com/')

        //Wait for 3 seconds
        cy.wait(3000)

        //Click on "Lending" menu.
        cy.get('[data-di-id="di-id-9b334a30-3a5bf177"]').click()

        //Wait for 3 seconds
        cy.wait(3000)

        //Click on "Personal Loans" option.
        cy.get('[data-di-id="di-id-440be26e-74a172ae"]').click()

        //Click on "Check My rate" button
        cy.get('[id="button-6a037d80be-b7"]').click()

        //Wait for 3 seconds
        cy.wait(3000)

        //Log message into Cypress console
        cy.log('TD Bank Loan Application Page Loaded Successfully')

    })//end of test 1

})//end of describe suite
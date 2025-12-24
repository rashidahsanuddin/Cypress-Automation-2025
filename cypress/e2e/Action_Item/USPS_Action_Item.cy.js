describe ('USPS Action Item Test Suite', () => {

    it ('Verify USPS Tracking Functionality', () => {

        //Navigate to USPS Tracking Page
        cy.visit('https://usps.com')

        //Wait for 3 seconds
        cy.wait(3000)

        //Hover over the "Quick Tools" section to reveal the dropdown menu
        cy.get('[class="qt-nav menuheader"]').realHover()

        //Wait for 3 seconds
        cy.wait(3000)

        //Click on the "Track a Package" option from the dropdown menu
        cy.get('[alt="Tracking Icon"]').click()

        //Wait for 3 seconds
        cy.wait(3000)
        

        //Capture the current url and verify it contains "Track"
        cy.url().should('contain', 'Track')

    
    })//end of test 1


    //Test 2: Enter Invalid Tracking Number and Verify Error Message
    it ('Enter Invalid Tracking Number and Verify Error Message', () => {

        //Visit USPS Tracking Page
        cy.visit('https://tools.usps.com')

        //Wait for 3 seconds
        cy.wait(3000)

        //Enter a invalid tracking number into the tracking input field
        cy.get('[id="tracking-input"]').type('1234567890')

        //Click on the "Track" button to submit the tracking number
        cy.get('[class="col-sm-2 track-btn-ctn"]').click()

        //Wait for 3 seconds
        cy.wait(3000)

        //Capture and verify the error message displayed
        cy.get('[class="banner-content"]').invoke('text').then((errorMessage) => {
            expect(errorMessage).to.contain('Tracking is not available for this item.');
        })

    })//end of test 2
})//end of describe suite

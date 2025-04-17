describe('verif hidden element click functionality ', () => {


    it('verify click on hiden element forcetrue functionality !', () => {

        cy.visit('https://www.cypress.io/')


        //cy.wait(10000)
        //cy.contains('Installing Cypress').click({force:true})


      cy.wait(5000)

      cy.reload()

      cy.wait(5000)

      cy.go(1)
      cy.wait(5000)
      cy.go(-1)


    })
})



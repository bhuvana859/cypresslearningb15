


describe('Automation - Write file and Read file ', function () {

    it('Cypress Test Case - Write file example', function () {

        
        cy.writeFile('cypress/fixtures/module1/test.txt', "Raju123\n")

 
     
    })


    it('Cypress Test Case - Append Data in end to the file ', function () {
        
        cy.writeFile('cypress/fixtures/module1/test.txt', "Cypress Trainer",{flag: 'a+'});
     
    })

    it('Cypress Test Case - Create Json file ', function () {
        
        cy.writeFile('cypress/fixtures/module1/test6.json', { firstname: 'G', lastname: 'Thimmaraju'});
     
    })

    it.only('Cypress Test Case - Validation of Data both Text file and Json ', function () {
        
        cy.readFile('cypress/fixtures/addjobtitle.json').should('exist')

        cy.readFile('cypress/fixtures/addemployee/addemployeeone.json').its('firstname').should('eq','harish')

        cy.readFile('cypress/fixtures/addemployee/addemployeetwo.json').its('firstname').should('eq','anil')

      cy.readFile('cypress/fixtures/addjobtitle.json').should('contain','test job title');

    // cy.readFile('cypress/fixtures/module1/test.txt').should('contain','Raju123\nCypress Trainer')       
    })

    it('Cypress Test Case - Capture Text ', function () {
        
        cy.visit("/")
        cy.xpath(login.Orangehrmlogo).should("be.visible")
        //actions
        cy.login(logindata.username, logindata.password)
    
        //Assertions
    
        cy.url().should("eq", logindata.dashboardurl)
    
        cy.url().should("include", logindata.partialdashurl)
    
        //or
        cy.contains(dashboard.dashboardpageheader()).should("be.visible")

        cy.contains("Buzz").click()
    
       cy.xpath("(//div[@class='orangehrm-buzz-post-body']/p)[3]").then((txt) =>{

             var textvalue = txt.text()

             cy.writeFile('cypress/fixtures/module1/test5.txt', textvalue)
             cy.writeFile('cypress/fixtures/module1/test5.json', { text: textvalue});    

       })
    })

  })
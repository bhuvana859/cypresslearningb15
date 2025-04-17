import addjobtitle from '../pageobjects/addjobtitle.po'
import logindata from '../fixtures/login.json'
import dashboard from '../pageobjects/dashboard.po'
import login from '../pageobjects/loginpage.po'

describe('Verify add jobtitle functionality', () => {

    it('Verify addjobtitle  with valid details', () => {
       
       // cy.login("Admin","admin123")
       cy.login(logindata.username,logindata.password)
        //  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //  cy.get(login.userNameInput()).type('admin')
        //  cy.get(login.passwordInput()).type('admin123')
        //  cy.get(login.loginBtn()).click()
        // // //assertions
       // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //or
       // cy.url().should('include','web/index.php/dashboard/index')
        //or
        cy.contains('Dashboard').should('be.visible')

        cy.navigatetoAddJobPage()
      //    cy.contains(dashboard.adminMenuItem()).click()
      //    cy.contains(addjobtitle.jobsubMenuItem()).click()
      //    cy.contains(addjobtitle.jobtitleMenuItem()).click()

         cy.contains(addjobtitle.addBtnItem()).click()
        cy.get(addjobtitle.jobtitleInput()).last().type('tester')
        cy.get(addjobtitle.jobDescriptionInput()).first().type('testing')
        cy.contains(addjobtitle.addBtnItem()).click()
        cy.contains(addjobtitle.saveBtn()).click()
        
        
    })



    
})

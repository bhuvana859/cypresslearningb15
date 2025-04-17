
import addjobtitiledata from '../fixtures/addjobtitle.json'

import logindata from '../fixtures/login.json'
import addemployee from "../pageobjects/addemployee.po"
import dashboard from "../pageobjects/dashboard.po"
import login from "../pageobjects/loginpage.po"

describe('Verify add employee functionality', () => {

    it('Verify add employee  with valid details', () => {
       
       cy.login(logindata.username,logindata.password)
       // cy.login("Admin","admin123")
       // cy.login(logindata.username,logindata.password)
        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get(login.userNameInput()).type('admin')
        // cy.get(login.passwordInput()).type('admin123')
        // cy.get(login.loginBtn()).click()
        // //assertions
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //or
        cy.url().should('include','web/index.php/dashboard/index')
        //or
        cy.contains('Dashboard').should('be.visible')
        cy.contains(dashboard.pimMenuItem()).click()
        cy.contains(addemployee.addemployeeInput()).click()
        cy.get(addemployee.firstNameInput()).type('ravikumar')
        cy.get(addemployee.lastNameInput()).type('kumar')
        cy.get(addemployee.submitBtn()).click()

        //Assertion
        cy.contains(addemployee.successMessageInput()).should('be.visible')
    })
})
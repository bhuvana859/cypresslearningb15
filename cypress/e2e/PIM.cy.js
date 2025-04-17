import login from "../pageobjects/loginpage.po"
import logindata from '../fixtures/login.json'
import dashboard from "../pageobjects/dashboard.po"

import termination from "../pageobjects/PIM.po"
describe('Verify pim termination reson', () => {

    it ('Verify terminat employee', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(login.userNameInput()).type(logindata.username)
        cy.get(login.passwordInput()).type(logindata.password)
        cy.get(login.loginBtn()).click()
        cy.contains('Dashboard').should('be.visible')
        cy.contains(dashboard.pimMenuItem()).click()
        cy.contains(termination.configurationInput()).click()
        cy.contains(termination.terminationResonInput()).click()
        cy.contains(termination.addBtnInput()).click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get(termination.terminationReson()).last().type("indicipline"+r)
        cy.contains(termination.saveBtn()).click()
        cy.contains(termination.successMessage()).should('be.visible')
        cy.contains("indicipline"+r).should("be.visible")



    })
})
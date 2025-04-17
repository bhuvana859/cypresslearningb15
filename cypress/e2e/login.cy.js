
import login from "../pageobjects/loginpage.po"
import logindata from '../fixtures/login.json'
describe('Verify login module functionality', () => {

    it ('Verify add  jobtitle functionalty with valid details', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath(login.userNameInput()).type(logindata.username)
        cy.get(login.passwordInput()).type(logindata.password)
        cy.get(login.loginBtn()).click()
        cy.contains('Dashboard').should('be.visible')
       // assertions
       // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //or
       // cy.url().should('include', 'web/index.php/dashboard/index')
        //or
    })


    it('Verify add  jobtitle functionalty with valid details', () => {

       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath(login.userNameInput()).type('adminn')
        cy.get(login.passwordInput()).type('admin123')
        cy.get(login.loginBtn()).click()
        cy.contains(login.loginErrorMessage()).should('be.visible')
      })


it('Verify add  jobtitle functionalty with valid details', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.xpath(login.userNameInput()).type('admin')
    cy.get(login.passwordInput()).type('admin1234')
    cy.get(login.loginBtn()).click()
    cy.contains(login.loginErrorMessage()).should('be.visible')
  
})

it('Verify add  jobtitle functionalty with valid details', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.xpath(login.userNameInput()).type('adminn')
    cy.get(login.passwordInput()).type('admin12355')
    cy.get(login.loginBtn()).click()
    cy.contains(login.loginErrorMessage()).should('be.visible')
 
})

})


//cy.get('div[id="app"] > div:nth-child(2)').click()  or .type()   this is div indexing syntax
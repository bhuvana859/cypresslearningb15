
import dashboard from "../pageobjects/dashboard.po"
import addemployee from "../pageobjects/addemployee.po"
import logindata from "../fixtures/login.json"
import login from "../pageobjects/loginpage.po"
import data from "../fixtures/exceltojson/user_data.json"


describe('Automation - Working With Data driven testing json ', function () {
data.forEach((data) => {
    it('Cypress Test Case - Understanding Data driven testing json ', function () {

      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get(login.userNameInput()).type(logindata.username)
      cy.get(login.passwordInput()).type(logindata.password)
      cy.get(login.loginBtn()).click()
      cy.contains('Dashboard').should('be.visible')
      cy.contains(dashboard.pimMenuItem()).click()
      cy.contains(addemployee.addemployeeInput()).click()
      cy.get(addemployee.firstNameInput()).type(data.firstname)
      cy.get(addemployee.lastNameInput()).type(data.lastname)
      
    })

   

  })
})

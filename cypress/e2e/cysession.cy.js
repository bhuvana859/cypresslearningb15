import login from '../pageobjects/loginpage.po'
import addemployee from '../pageobjects/pim/addemployee.po'


describe('Validate Orange HRM Login functionality', function () {


  beforeEach(function () {

    cy.session("Login session", () => {
      cy.visit("/web/index.php/auth/login")
    cy.xpath(login.userNameInput()).type('Admin')
    cy.get(login.passwordInput()).type('admin123')

    cy.get(login.loginBtn()).click()
    })

  })

  it.only('Validate Add job title ', function () {


    cy.visit("/web/index.php/admin/saveJobTitle");
    let r = (Math.random() + 1).toString(36).substring(7);
    cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Senior Analyst"+r)

    cy.get('button[type="submit"]').click()


  })

  it.only('Validate Add employee ', function () {


    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')

    cy.get(addemployee.firstNameInput()).type("Raju")


  })

  it.only('Validate add pay grade', function () {


    cy.visit("/web/index.php/admin/payGrade")
    let r = (Math.random() + 1).toString(36).substring(7);

    cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Grade 6"+r)

    cy.get('button[type="submit"]').click()
    cy.wait(3000)


  })

   it.only('Validate employment status ', function () {


    cy.visit("/web/index.php/admin/saveEmploymentStatus")
    cy.wait(3000)
    cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Full time")

    cy.get('button[type="submit"]').click()

   })

  it.only('Validate Employee report ', function () {


    cy.visit("/web/index.php/time/displayProjectReportCriteria")


  })


  it.only('Attendance Total Summary Report', function () {


    cy.visit("web/index.php/time/displayAttendanceSummaryReportCriteria")
    cy.wait(3000)
    //cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")

  })

  it.only('Add vacancy', function () {


    cy.visit("web/index.php/recruitment/addJobVacancy")
    cy.wait(3000)
    //cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")

  })

  

}) 
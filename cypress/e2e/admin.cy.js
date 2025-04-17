
import dashboard from '../pageobjects/dashboard.po'
import logindata from '../fixtures/login.json'
import addjobtitiledata from '../fixtures/addjobtitle.json'

 

         //cy.login("Admin","admin123")
         cy.login(logindata.username,logindata.password)
        
        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get('input[name="username"]').type('admin')
        // cy.get('input[type="password"]').type('admin123')
        // cy.get('button[type="submit"]').click()
        // //assertions
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        // //or
        // cy.url().should('include', 'web/index.php/dashboard/index')
        // //or
        // cy.contains('Dashboard').should('be.visible')
        cy.contains(dashboard.adminMenuItem()).click()
        cy.contains('Job ').click()
        cy.contains('Job Titles').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type(addjobtitiledata.jobtitle + r)

             cy.get('textarea[placeholder="Type description here"]').type(addjobtitiledata.jobdescription)


        cy.contains(' Save ').click()
        //assertion
        cy.contains('Successfully Saved').should('be.visible')
    })
    it.only('Verify mandarory field in add job title', () => {
         
        cy.login("Admin", "admin123")
        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get('input[name="username"]').type('admin')
        // cy.get('input[type="password"]').type('admin123')
        // cy.get('button[type="submit"]').click()
        // //assertions
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        // //or
        // cy.url().should('include', 'web/index.php/dashboard/index')
        // //or
        // cy.contains('Dashboard').should('be.visible')
        cy.contains('Admin').click()
        cy.contains('Job ').click()
        cy.contains('Job Titles').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        cy.contains(' Save ').click()
        //assertion
        cy.contains('Required').should('be.visible')


    })
    it('Verify add  jobtitle mandatory fields functionalty with valid details', () => {
        cy.login("Admin", "admin123")

        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get('input[name="username"]').type('admin')
        // cy.get('input[type="password"]').type('admin123')
        // cy.get('button[type="submit"]').click()
        // //assertions
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        // //or
        // cy.url().should('include', 'web/index.php/dashboard/index')
        // //or
        // cy.contains('Dashboard').should('be.visible')
        cy.contains('Admin').click()
        cy.contains('Job ').click()
        cy.contains('Job Titles').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        // let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type('A while back I needed to count the amount of letters that a piece of text in an email template had (to avoid')
        // cy.get('textarea[placeholder="Type description here"]').type('Testing')
        cy.contains('Should not exceed 100 characters').should('be.visible')
    })

    it('Verify add  jobdescription mandatory fields functionalty with valid details', () => {

        cy.login("Admin", "admin123")

        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get('input[name="username"]').type('admin')
        // cy.get('input[type="password"]').type('admin123')
        // cy.get('button[type="submit"]').click()
        // //assertions
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        // //or
        // cy.url().should('include', 'web/index.php/dashboard/index')
        // //or
        // cy.contains('Dashboard').should('be.visible')
        cy.contains('Admin').click()
        cy.contains('Job ').click()
        cy.contains('Job Titles').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        // let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('textarea[placeholder="Type description here"]').type('A while back I needed to count the amount of letters that a piece of text in an email template had (to avoidA while back I needed to count the amount of letters that a piece of text in an email template had (to avoidA while back I needed to count the amount of letters that a piece of text in an email template had (to avoidA while back I needed to count the amount of letters that a piece of text in an e')
        // cy.get('textarea[placeholder="Type description here"]').type('Testing')
        cy.contains('Should not exceed 400 characters').should('be.visible')
    })

    it('Verify add  jobdescription mandatory fields functionalty with valid details', () => {


        cy.login("Admin", "admin123")



        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get('input[name="username"]').type('admin')
        // cy.get('input[type="password"]').type('admin123')
        // cy.get('button[type="submit"]').click()
        // //assertions
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        // //or
        // cy.url().should('include', 'web/index.php/dashboard/index')
        // //or
        // cy.contains('Dashboard').should('be.visible')
        cy.contains('Admin').click()
        cy.contains('Job ').click()
        cy.contains('Job Titles').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        // let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type('A while back I needed to count the amount of letters that a piece of text in an email template had (to avoidA')
        cy.contains('Should not exceed 100 characters').should('be.visible')
        cy.get('textarea[placeholder="Type description here"]').type('A while back I needed to count the amount of letters that a piece of text in an email template had (to avoidA while back I needed to count the amount of letters that a piece of text in an email template had (to avoidA while back I needed to count the amount of letters that a piece of text in an email template had (to avoidA while back I needed to count the amount of letters that a piece of text in an e')
        // cy.get('textarea[placeholder="Type description here"]').type('Testing')
        cy.contains('Should not exceed 400 characters').should('be.visible')
    })








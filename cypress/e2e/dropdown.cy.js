describe('checkbox Test', function () {

    it('Working with Check boxes', function () {
 
       cy.visit("https://register.rediff.com/register/register.php");

    //Dropdowns3 ways we can handle 

    //  1. BY TEXT
 
    cy.get('select[name*="DOB_Month"]').select('FEB')

   //cy.wait(5000)


   // 2.  BY TEXT WITH ASSERTION

    cy.get('select[name*="DOB_Month"]').select("MAR").should("have.value", "03" )

    //cy.wait(5000)

   cy.get('select[name*="DOB_Month"]').select('APR').should("have.value", "04" )



  //Value
 
   cy.get('select[name*="DOB_Month"]').select("05").should("have.value", "05" )
   cy.wait(5000)
  cy.get('select[name*="DOB_Month"]').select('06')
 
 
   // Index 
 
   cy.get('select[name*="DOB_Month"]').select("07").should("have.value", "07" )
    cy.wait(5000)
   cy.get('select[name*="DOB_Month"]').select(8)

     });
    });
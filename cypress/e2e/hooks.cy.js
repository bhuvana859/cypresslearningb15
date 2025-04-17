

// describe("test suite name", ()=>{


//     before( ()=>{

//         cy.log("This before All hook")
 
//       })

//       beforeEach( ()=>{

//         cy.log("This before Each hook")
 
//       })

//      after( ()=>{

//        cy.log("This after All hook")

//      })


//      afterEach( ()=>{

//         cy.log("This after Each hook")
 
//       })




//     specify("test case 1", ()=>{

//         cy.log("1st it block body")
//     })

    
//     it("test case 2", ()=>{
   
//         cy.log("2nd it block body")

//     })

    
//     it("test case 3", ()=>{

//         cy.log("3rd it block body")
//     })

    
//     it("test case 4", ()=>{

//         cy.log("4th it block body")
//     })
// })

























describe("test suite name",()=>{

before(()=>{

cy.log("this is before all hook")

})

beforeEach(()=>{

  cy.log("this is before each hook")
 
})

  after(()=>{

    cy.log("this is after all hook")

  })

  afterEach(()=>{

      cy.log("this is after each hook")


  })
 mk

it("test case 1",()=>{
cy.log("1st it block body")

})

it("test case 2",()=>{
  cy.log("2nd it block body")
})


it("test case 3",()=>{
  cy.log("3rd it block body")
})

it("test case 4",()=>{
  cy.log("4t it block body")
})
})
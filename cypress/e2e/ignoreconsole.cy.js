describe("select box", () => {

    it("should load website with select box", () => {

      
       
      cy.visit("https://chercher.tech/practice/dropdowns");

      cy.get("#order-changed").select(2);

    });
    
  });
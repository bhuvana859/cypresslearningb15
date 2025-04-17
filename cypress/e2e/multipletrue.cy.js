describe('verif click on all add to cart element functionality ', () => {


    it('verify multiple true  !', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('div[class="product-action"]').click ({multiple:true})
    })
})
<reference types ="cypress"/>

describe("Handling pop up", function() {
    it("Tests window", function(){
        cy.visit("url")
        cy.get('').invoke('removeAttr','target').click()
    })
})
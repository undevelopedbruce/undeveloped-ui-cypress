describe('Contact Form', () => {
    it('Tries to send an incomplete form', () => {
        cy.visit("/contact")
        cy.get("#g2-name").type("BruceBot 2000{enter}")
        cy.get("#g2-email").type("beans{enter}")
        cy.get(".contact-submit").click()
        //Form uses aria-required which is built into browser and so warnings cannot
        //be asserted against because they're not in the dom
        cy.url().should("include", "/contact")
    })
})
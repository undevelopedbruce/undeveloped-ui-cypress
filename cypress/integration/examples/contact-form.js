describe('Contact Form', () => {
    it('Shows error on invalid form send', () => {
        cy.visit("/contact")
        cy.get("#g2-name").type("BruceBot 2000{enter}")
        cy.get("#g2-email").type("beans@bob{enter}")
        cy.get("#contact-form-comment-g2-comment").type("banana rama{enter}")
        cy.get(".pushbutton-wide").click()
        cy.get(".form-error-message").should("contain", "requires a valid email")

    })
    it('Sends a valid form', () => {
        cy.visit("/contact")
        cy.get("#g2-name").type("BruceBot 2000{enter}")
        cy.get("#g2-email").type("undevelopedbruce@gmail.com{enter}")
        cy.get("#contact-form-comment-g2-comment").type("banana{enter}")
        cy.get(".pushbutton-wide").click()
        cy.get(".contact-form-submission").should("contain", "BruceBot 2000")
    })
})
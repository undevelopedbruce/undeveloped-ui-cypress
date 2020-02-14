describe('Site Loading and Navigation', () => {
    it('Navigates to a blog post', () => {
        cy.visit("/")
        cy.get(".post").contains("Part 3").click()
        cy.url().should("include", "part-3")
        cy.get(".entry-title").should("contain", "Part 3")
    })
    it('Navigates to About Bruce', () => {
        cy.pageNav("About", "/about-me")
    })
    it('Navigates to Dungeons and Testing', () => {
        cy.pageNav("Dungeons", "/dungeons-and-testing")
    })
    it('Navigates to Contact Bruce', () => {
        cy.pageNav("Contact", "/contact")
    })
})
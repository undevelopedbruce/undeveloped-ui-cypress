describe('Site Content and Navigation', () => {
    it('Navigates to first blog post', () => {
        cy.visit("/")
        cy.get(".post").contains("Part 3").click()
        cy.url().should("include", "part-3")
        cy.get(".entry-title").contains("Part 3")
    })
})
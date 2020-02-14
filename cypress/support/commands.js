//Custom command to get rid of repetition in tests
Cypress.Commands.add('pageNav', (name, append) => {
    cy.get("#primary-menu").contains(name).click()
    cy.url().should("include", append)
    cy.get(".entry-title").should("contain", name)
})

// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

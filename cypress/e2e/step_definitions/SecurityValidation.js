import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



When("I enter malicious script {string} in the login form", (script) => {
    cy.get('[data-testid="email"]').type(script);
    cy.get('[data-testid="submit"]').click();
});

Then("the validation error should be appear", () => {
    cy.get('#email-helper-text').should("exist").and("have.text","Please Insert a correct Email format");
});

Then("the script should not execute", () => {
  // Verify no alert is shown
    cy.on("window:alert", (str) => {
    throw new Error("Unexpected alert: " + str);
    });
});

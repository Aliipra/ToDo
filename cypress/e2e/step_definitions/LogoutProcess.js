import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I click the logout button", () => {
    cy.wait(2000)
    cy.get('.MuiButton-label').click();
});

Then("I should be redirected to the login page", () => {
    cy.url().should("eq", "https://todo.qacart.com/login");
});

Then("I should not be able to access the home page without logging in again", () => {
    cy.wait(2000)
    cy.visit("/todo");
    cy.wait(2000)
    cy.url().should("include", "/login");
});

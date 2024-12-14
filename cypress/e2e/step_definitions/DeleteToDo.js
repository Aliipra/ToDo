import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I delete the task {string}", (task) => {
    cy.get("[data-testid='todo-item']")
    .contains(task)
    .parent()
    .find("[data-testid='delete']")
    .click();
});

Then("the task {string} should no longer appear in the list", (task) => {
    cy.get("[data-testid='todo-item']")
    .contains(task)
    .should("not.exist");
});

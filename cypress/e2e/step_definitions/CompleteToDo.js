import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("I mark the task {string} as completed", (task) => {
    cy.get("[data-testid='todo-item']")
    .contains(task)
    .parent()
    .find("input[type='checkbox']")
    .check();
});

Then("the task {string} should be marked as completed", (task) => {
cy.get("[data-testid='todo-item']")
    .contains(task)
    .parent()
    .find("input[type='checkbox']")
    .should("be.checked");
});

When("I undo the task {string}", (task) => {
    cy.get("[data-testid='todo-item']")
    .contains(task)
    .parent()
    .find("input[type='checkbox']")
    .uncheck();
});

Then("the task {string} should be didn't have marked as completed", (task) => {
cy.get("[data-testid='todo-item']")
    .contains(task)
    .parent()
    .find("input[type='checkbox']")
    .should("not.be.checked");
});

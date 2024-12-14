import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("I select Adding button",()=>{
cy.get('.sc-idiyUo > .MuiButtonBase-root').click()
});

When("I add a new task with {string}", (task) => {
cy.get('[data-testid="new-todo"]').type(task);
});

When("I Select create button",()=>{
    cy.get('[data-testid="submit-newTask"]').click()
});

Then("I should see the task {string} in the list", (task) => {
cy.contains(task).should("be.visible");
});

When("I add multiple tasks with {string}", (task) => {
    cy.get("[data-testid='new-todo']").type(task);
});

Then("I should see the tasks {string} in the list", (task) => {

    cy.contains(task).should("be.visible");

});

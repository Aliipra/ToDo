import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// Background

Given("I visit the to-do website", () => {
  cy.visit("/");
});

Given("I select the Registration option", () => {
  cy.get('[data-testid="signup"]').click();
});

When("I click on the submit button", () => {
  cy.get('[data-testid="submit"]').click();
});


// Registration on the To-Do page - Positive

When("I enter valid {string} in the firstName field", (firstName) => {
  cy.get('[data-testid="first-name"]').type(firstName);
});
When("I enter valid {string} in the lastName field", (lastName) => {
  cy.get('[data-testid="last-name"]').type(lastName);
});
When("I enter valid {string} in the email field", (email) => {
  cy.get('[data-testid="email"]').type(email);
});
When("I enter valid {string} in the password fields", (password) => {
    cy.get('[data-testid="password"]').type(password)
    cy.get('[data-testid="confirm-password"]').type(password)
});


Then("the registration should be successful", () => {
cy.url().should("eq","https://todo.qacart.com/todo");
});


// Registration on the To-Do page - Negative

When("I enter invalid {string} in the firstName field", (firstName) => {
    cy.get('[data-testid="first-name"]').type(firstName);
  });

  When("I enter invalid {string} in the lastName field", (lastName) => {
  cy.get('[data-testid="last-name"]').type(lastName);
});

When("I enter invalid {string} in the email field", (email) => {
  cy.get('[data-testid="email"]').type(email);
});

When("I enter invalid {string} in the password field", (password) => {
  cy.get('[data-testid="password"]').type(password)
});

When("I enter invalid {string} in the confirm Password field", (confirmPassword) => {

  cy.get('[data-testid="confirm-password"]').type(confirmPassword)
});


Then("the registration process should fail", () => {
  cy.url().should("be.contains","/signup");
});

Then("a warning message should appear contain the error {string}", (text) => {
  cy.get('.MuiFormHelperText-root').should("have.text",text)
});

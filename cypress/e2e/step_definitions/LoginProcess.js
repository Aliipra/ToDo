import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Login to the To-Do page - Positive

When("I enter a valid {string} in the email field", (email) => {
cy.get('[data-testid="email"]').type(email);
});

When("I enter a valid {string} in the password field", (password) => {
cy.get('[data-testid="password"]').type(password);
});

When("I select LOGIN button", () => {
cy.get('[data-testid="submit"]').click();
});

Then("I should be logged in successfully", () => {
cy.url().should("eq","https://todo.qacart.com/todo")
});

// Login to the To-Do page - Negative

When("I enter an invalid {string} in the email field", (email) => {
cy.get('[data-testid="email"]').type(email);
});

When("I enter an invalid {string} in the password field", (password) => {
cy.get('[data-testid="password"]').type(password);
});


Then("the login process should fail", () => {
cy.url().should("eq","https://todo.qacart.com/")
});

Then("a warning message should appear have {string}", (text) => {
cy.get('.MuiAlert-message').should("have.text",text)
});

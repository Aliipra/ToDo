Feature: Automation test for the Login Process

    Background: Login Process
        Given I visit the to-do website


    Scenario: Login to the To-Do page - Positive
        When I enter a valid "eng.ali.m.ibrahim@hotmail.com" in the email field
        And I enter a valid "Pop@123456789" in the password field
        And I select LOGIN button
        Then I should be logged in successfully

    Scenario: Login to the To-Do page - Negative
        When I enter an invalid "<email>" in the email field
        And I enter an invalid "<password>" in the password field
        And I select LOGIN button
        Then the login process should fail
        And a warning message should appear have "<text>"
        Examples:
            | email                         | password        | text                                                                                        |
            | inValidEmail@hotmail.com      | Pop@123456789   | We could not find the email in the database                                                 |
            | eng.ali.m.ibrahim@hotmail.com | inValidPassword | The email and password combination is not correct, please fill a correct email and password |

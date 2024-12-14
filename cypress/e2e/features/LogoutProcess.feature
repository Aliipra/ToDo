Feature: Automation test for the Logout Process

    Background: Logout Process
        Given I visit the to-do website
        When I enter a valid "eng.ali.m.ibrahim@hotmail.com" in the email field
        And I enter a valid "Pop@123456789" in the password field
        And I select LOGIN button


    Scenario: Logout functionality
        When I click the logout button
        Then I should be redirected to the login page
        And I should not be able to access the home page without logging in again
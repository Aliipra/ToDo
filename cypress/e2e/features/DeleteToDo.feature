Feature: Automation test for the Delete task Process

    Background: Delete task Process
        Given I visit the to-do website
        When I enter a valid "eng.ali.m.ibrahim@hotmail.com" in the email field
        And I enter a valid "Pop@123456789" in the password field
        And I select LOGIN button


    Scenario: Deleting a task
        When I delete the task "Learn QA"
        Then the task "Workout" should no longer appear in the list


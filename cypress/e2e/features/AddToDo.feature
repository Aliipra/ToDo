Feature: Automation test for the Adding Process


    Scenario: Adding a new task to the to-do list
        Given I visit the to-do website
        When I enter a valid "eng.ali.m.ibrahim@hotmail.com" in the email field
        And I enter a valid "Pop@123456789" in the password field
        And I select LOGIN button
        ##
        When I select Adding button
        And I add a new task with "Learn QA"
        And I Select create button
        Then I should see the task "Learn QA" in the list

    Scenario Outline: Adding multiple tasks to the to-do list
        When I select Adding button
        And I add multiple tasks with "<Task>"
        And I Select create button
        Then I should see the tasks "<Task>" in the list
        Examples:
            | Task   |
            | Task 1 |
            | Task 2 |
            | Task 3 |

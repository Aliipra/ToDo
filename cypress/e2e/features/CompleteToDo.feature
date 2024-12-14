Feature: Automation test for the complete task Process

    Background: Complete task Process
        Given I visit the to-do website
        When I enter a valid "eng.ali.m.ibrahim@hotmail.com" in the email field
        And I enter a valid "Pop@123456789" in the password field
        And I select LOGIN button

    Scenario: complete a task on the to-do list
        When I mark the task "Learn QA" as completed
        Then the task "Learn QA" should be marked as completed

    Scenario: Undo a task on the to-do list
        When I undo the task "Learn QA"
        Then the task "Learn QA" should be didn't have marked as completed
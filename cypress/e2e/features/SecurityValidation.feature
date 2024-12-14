Feature: Automation test for the Security Validation

    Scenario: Security validation for input fields
        Given I visit the to-do website
        When I enter malicious script "<script>alert('Hacked!')</script>" in the login form
        Then the validation error should be appear
        And the script should not execute
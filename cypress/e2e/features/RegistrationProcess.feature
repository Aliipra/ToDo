Feature: Automation test for the Registration Process

    Background: Registration Process
        Given I visit the to-do website
        And I select the Registration option

    Scenario: Registration on the To-Do page - Positive

        When I enter valid "<firstName>" in the firstName field
        And I enter valid "<lastName>" in the lastName field
        And I enter valid "<email>" in the email field
        And I enter valid "<password>" in the password fields
        And I click on the submit button
        Then the registration should be successful
        Examples:
            | firstName | lastName | email            | password      |
            | Ali       | Ibra     | test10@email.com | Pop@123456789 |

    Scenario: Registration on the To-Do page - Negative

        When I enter invalid "<firstName>" in the firstName field
        And I enter invalid "<lastName>" in the lastName field
        And I enter invalid "<email>" in the email field
        And I enter invalid "<password>" in the password field
        And I enter invalid "<confirmPassword>" in the confirm Password field
        And I click on the submit button

        Then the registration process should fail
        And a warning message should appear contain the error "<text>"

        Examples:
            | firstName | lastName | email          | password      | confirmPassword | text                                                                                                                                 |
            | fi        | Ibra     | test@email.com | Pop@123456789 | Pop@123456789   | First Name is required, and it should be more than 3 characters                                                                      |
            | Ali       | la       | test@email.com | Pop@123456789 | Pop@123456789   | Last Name is required, and it should be more than 3 characters                                                                       |
            | Ali       | Ibra     | inValidemail   | Pop@123456789 | Pop@123456789   | Please Insert a correct Email format                                                                                                 |
            | Ali       | Ibra     | test@email.com | 1234567       | 1234567         | Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character |
            | Ali       | Ibra     | test@email.com | Pop@123456789 | 1234567         | Second password does not match the first Password                                                                                    |

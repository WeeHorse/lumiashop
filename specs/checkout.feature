Feature: Fill in user details

    Scenario: Skip required fields
        Given the checkout is open
        When I skip the CCV code
        And I click the pay-button
        Then I get the message that the CCV code is required
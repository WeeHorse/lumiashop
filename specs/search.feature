# gherkin syntax

Feature: Lumia search for lamps

    Scenario: As a user I want to search for a lamp using its name
    Given that I am on the Lumia main page
    When I click on the search field
    And I type "golv"
    Then I see an article called "Golvlampa"

    Scenario: As a user I want to search lamps using their names
    Given that I am on the Lumia main page
    When I click on the search field
    And I type "lampa"
    Then I see articles with names containing "lampa"
    
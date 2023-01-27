// cucumber syntax

import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the Lumia main page', () => {
    cy.visit('/')
    cy.get('h1').should('have.text', "Lumia")
});

When('I click on the search field', () => {
    cy.get('#search').click()
});

When('I type {string}', (text) => {
    cy.get('#search').type(text)
});

Then('I see an article called {string}', (name) => {
    cy.get('.product h2:visible').first().should('have.text', name)
});

Then('I see articles with names containing {string}', (str) => {
    cy.get('.product h2:visible').each(($h2)=>{
        cy.wrap($h2).should('contain.text', str)
    })
});
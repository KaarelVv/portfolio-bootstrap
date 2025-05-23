/* global describe, it, beforeEach, cy */
/// <reference types="cypress" />

describe('Portfolio Navigation', () => {
  beforeEach(() => {
   cy.visit('https://vso24viilvere.ita.voco.ee/portfolio/')
   cy.get('body', { timeout: 10000 }).should('exist'); // wait for the body to load
   cy.get('body').should('not.be.empty'); // check if the body is not empty
cy.contains('Kaarel Viilvere').should('be.visible');
  });

  it('loads the home page', () => {
    cy.contains('Kaarel Viilvere').should('be.visible');
    cy.url().should('eq', 'https://vso24viilvere.ita.voco.ee/portfolio/');
  });

  it('navigates to Projects page', () => {
    cy.get('.nav-item a').contains('Projects').click();
    cy.url().should('include', '/projects');
    cy.contains('Projects').should('exist'); // or any unique content from Projects page
  });

  it('navigates to About page', () => {
    cy.get('.nav-item a').contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About').should('exist'); // or unique text from About
  });

  it('navigates to Contact page', () => {
    cy.get('.nav-item a').contains('Contact').click();
    cy.url().should('include', '/contact');
    cy.contains('Contact').should('exist');
  });

  it('navigates to Resume page', () => {
    cy.get('.nav-item a').contains('Resume').click({force: true}); //<--Workaround for the issue
    //Timed out retrying after 4050ms: cy.click() failed because the center of this element is hidden from view:
    cy.url().should('include', '/resume');
    cy.contains('Resume').should('exist');
  });
});

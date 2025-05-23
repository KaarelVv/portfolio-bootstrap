/* global describe, it, cy */

import { mount } from 'cypress/react';
import About from '../../../src/pages/About';

describe('<About />', () => {
  it('renders the heading', () => {
    mount(<About />);
    cy.contains('About Me').should('be.visible');
  });

  it('renders the lines progressively', () => {
    cy.clock(); // Control timers
    mount(<About />);

    // First line appears after 800ms
    cy.tick(800);
    cy.contains("I'm a hands-on web developer").should('exist');

    // Second line also starts with ➜ → 800ms more
    cy.tick(800);
    cy.contains('My focus is on building accessible').should('exist');

    // Fast-forward all the rest
    cy.tick(800 * 3 + 400 * 6); // 3 remaining ➜, 6 others

    cy.contains('JavaScript').should('exist');
    cy.contains('SQL').should('exist');
  });

  it('shows correct prompts per line', () => {
    cy.clock();
    mount(<About />);
    cy.tick(10000); // Let everything show

    // Test for specific prompts
    cy.get('.terminal-line .prompt').contains('➜').should('exist');
    cy.get('.terminal-line .prompt').contains('$').should('exist');
    cy.get('.terminal-line').contains('React').should('contain.text', 'React');
  });

  it('renders all expected lines', () => {
    const expectedLines = 12; // lines.length
    cy.clock();
    mount(<About />);
    cy.tick(20000); // Just enough

    cy.get('.terminal-line').should('have.length', expectedLines);
  });
});

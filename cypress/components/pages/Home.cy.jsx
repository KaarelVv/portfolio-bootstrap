/* global describe, it, beforeEach, cy */
/// <reference types="cypress" />
import Home from '../../../src/pages/Home';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { mount } from 'cypress/react';

describe('Home Component', () => {
  beforeEach(() => {
    mount(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/resume" element={<div>Resume Page</div>} />
        </Routes>
      </MemoryRouter>
    );
  });

  it('renders the hero heading', () => {
    cy.contains('helloWorld!').should('be.visible');
  });

  it('displays intro lines in sequence', () => {
    // Check that lines appear one after another with delay
    const lines = [
      "Initializing portfolio.exe...",
      "Loading modules...",
      "Establishing secure connection...",
      "Connected.",
      "Welcome, user."
    ];

    lines.forEach((line) => {
      cy.contains(line).should('exist');
    });
  });

  it('shows input field after intro lines', () => {
    cy.get('input.terminal-input').should('exist');
    cy.get('input.terminal-input').should('have.attr', 'placeholder', 'Type a command...');
  });

  it('navigates to /projects on "projects" command', () => {
    cy.get('input.terminal-input').type('projects{enter}');
    cy.contains('Projects Page').should('exist');
  });

  it('navigates to /contact on "contact" command', () => {
    cy.get('input.terminal-input').type('contact{enter}');
    cy.contains('Contact Page').should('exist');
  });

  it('navigates to /resume on "resume" command', () => {
    cy.get('input.terminal-input').type('resume{enter}');
    cy.contains('Resume Page').should('exist');
  });

  it('shows error for unknown command', () => {
    cy.get('input.terminal-input').type('invalidCommand{enter}');
    cy.contains('Command not found: invalidcommand').should('exist');
  });
});

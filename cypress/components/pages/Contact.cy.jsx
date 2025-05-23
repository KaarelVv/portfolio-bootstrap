/* global describe, it, cy */

import { mount } from 'cypress/react';
import Contact from '../../../src/pages/Contact';
import ContactForm from '../../../src/components/ContactForm';

describe('<Contact />', () => {
  it('renders the heading', () => {
    mount(<Contact />);
    cy.contains('Contact Me').should('be.visible');
  });

  it('renders the form', () => {
    mount(<Contact />);
    cy.get('form').should('exist');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('textarea[name="message"]').should('exist');
  });

  it('shows error message for empty fields', () => {
    mount(<Contact />);
    mount(<ContactForm />);
    cy.get('button[type="submit"]').click();
    cy.contains('Please fill out all fields').should('be.visible');
  });
})
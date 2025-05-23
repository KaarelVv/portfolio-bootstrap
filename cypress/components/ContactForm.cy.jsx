/* global describe, it, beforeEach, cy */
import { mount } from 'cypress/react';
import ContactForm from '../../src/components/ContactForm';


describe('<ContactForm />', () => {
    beforeEach(() => {

        mount(<ContactForm />);
    });

    it('renders all input fields', () => {
        cy.get('input[name="name"]').should('exist');
        cy.get('input[name="email"]').should('exist');
        cy.get('textarea[name="message"]').should('exist');
        cy.contains('CAPTCHA').should('exist');
    });

    it('allows typing into fields', () => {
        cy.get('input[name="name"]').type('Kaarel');
        cy.get('input[name="email"]').type('kaarel@example.com');
        cy.get('textarea[name="message"]').type('Hello!');

        cy.get('input[name="name"]').should('have.value', 'Kaarel');
        cy.get('input[name="email"]').should('have.value', 'kaarel@example.com');
        cy.get('textarea[name="message"]').should('have.value', 'Hello!');
    });

    it('shows alert if CAPTCHA is missing on submit', () => {
        cy.window().then((win) => cy.stub(win, 'alert').as('alert'));

        mount(<ContactForm />);

        // Fill required inputs
        cy.get('input[name="name"]').type('Kaarel');
        cy.get('input[name="email"]').type('kaarel@example.com');
        cy.get('textarea[name="message"]').type('Hey');

        // ❌ Don't let CAPTCHA auto-fill — override grecaptcha
        cy.window().then((win) => {
            win.grecaptcha = {
                ready: (cb) => cb(),
                execute: () => Promise.resolve(""), // simulate failure
            };
        });

        // Clear the token manually
        cy.get('form').then(() => {
            // Access and clear internal token
            cy.window().then((win) => {
                win.document.querySelector('form').captchaToken = "";
            });
        });

        cy.get('button[type="submit"]').click();

        cy.get('@alert').should('have.been.calledWith', 'Please complete the CAPTCHA.');
    });

it('submits the form successfully', () => {
  mount(<ContactForm />);
  cy.get('input[name="name"]').type('Kaarel');
  cy.get('input[name="email"]').type('kaarel@example.com');
  cy.get('textarea[name="message"]').type('Hey!');
  
  // Stub fetch before submitting
  cy.window().then((win) => {
    cy.stub(win, 'fetch').resolves({ ok: true, text: () => Promise.resolve('OK') });
  });

  cy.get('button[type="submit"]').click();
  cy.contains('Message sent successfully!').should('exist');
});
});

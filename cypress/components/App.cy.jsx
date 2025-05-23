/* global describe, it, cy */
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/App';


describe('<App />', () => {
    it('renders navbar with all route links', () => {
        mount(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );
        cy.contains('Home').should('exist');
        cy.contains('Projects').should('exist');
        cy.contains('About').should('exist');
        cy.contains('Contact').should('exist');
        cy.contains('Resume').should('exist');
    });
    it('navigates to /projects on link click', () => {
        mount(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        cy.contains('Projects').click();
        cy.contains('My Projects', { timeout: 3000 }).should('exist');
        cy.get('.nav-link.active').should('contain.text', 'Projects');
    });

    it('toggles the navbar menu', () => {
        mount(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        cy.get('.navbar-toggler').click();
        cy.get('#mainNavbar').should('have.class', 'show');

        cy.get('.navbar-toggler').click();
        cy.get('#mainNavbar').should('not.have.class', 'show');
    });
    it('renders the theme toggle', () => {
        mount(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        cy.get('button').contains(/dark|light/i).should('exist'); // adjust if icon-based
    });

    it('renders <Home /> by default route', () => {
        mount(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        cy.contains('helloWorld!').should('exist'); // Adjust to something rendered by <Home />
    });

    it('renders <About /> when navigating to /about', () => {
        mount(
            <MemoryRouter initialEntries={['/about']}>
                <App />
            </MemoryRouter>
        );

        cy.contains('About Me').should('exist');
    });
});

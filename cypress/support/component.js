
import { mount } from 'cypress/react'

// Register mount command globally
Cypress.Commands.add('mount', mount)

// Optional: Make TypeScript happy if you're using TS
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       mount: typeof mount
//     }
//   }
// }

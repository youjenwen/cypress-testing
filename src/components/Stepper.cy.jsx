import React from 'react'
import Stepper from './Stepper'

describe('<Stepper />', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Stepper initial={100} />)
    cy.get('[data-cy=counter]').should('have.text', '100')
  });
  it('clicking + fires a change event with the incremented value', () => {
    const onChangeSpyIn = cy.spy().as('onChangeSpy')
    cy.mount(<Stepper initial={100} onChange={onChangeSpyIn} />)
    cy.get('[data-cy=counter]').should('have.text', '100')
    cy.get('[data-cy=increment]').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', 101)
  });
  it('clicking + fires a change event with the decremented value', () => {
    const onChangeSpyDe = cy.spy().as('onChangeSpy')
    cy.mount(<Stepper initial={100} onChange={onChangeSpyDe} />)
    cy.get('[data-cy=counter]').should('have.text', '100')
    cy.get('[data-cy=decrement]').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', 99)
  });
})
import { FILTERS } from '../../support/element-selectors/homepage/filter'

var url = Cypress.env('europe_url');

describe('Filters tests', () => {
  it(
      'SF-0012: Filter by "Departure date" by specific date"',
      () => {
        cy.visit(url)
        cy.get(FILTERS.FILTER_DEPARTURE_TITLE).should('be.visible').contains('Departure date')
        cy.get(FILTERS.FILTER_DEPARTURE_SPECIFIC_DATE).should('be.visible')
        cy.get(FILTERS.FILTER_DEPARTURE_SPECIFIC_DATE).click()
        cy.get(FILTERS.DATE_NEXT_BUTTON).should('be.visible')
        cy.get(FILTERS.DATE_NEXT_BUTTON).click()
        cy.get(FILTERS.DATE_DAY_9).click()
        cy.get(FILTERS.FILTERS_CARD).should('be.visible')
        cy.get(FILTERS.FILTERS_CARD_FILTER).contains('Departs on 9 May 2023')
      },
  )
})
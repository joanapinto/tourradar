import { SORT } from '../../support/element-selectors/homepage/sort'
import { waitForPageFullLoad } from '../../support/utils/helpers'

var url = Cypress.env('europe_url');

describe('Sort and filter tests', () => {
  it(
    'SF-0006: Sort by "Biggest deals: Highest savings"',
    { tags: '@critical' },
    () => {
      cy.visit(url)
      cy.get(SORT.SORT_FILTER_TITLE).should('be.visible').contains('Sort & filter')
      cy.get(SORT.SORT_SELECT).should('be.visible')
      cy.get(SORT.SORT_SELECT).select('deals')
      waitForPageFullLoad()
    },
  )
})
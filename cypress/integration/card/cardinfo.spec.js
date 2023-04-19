import { CARD } from '../../support/element-selectors/homepage/card'
import { waitForPageFullLoad } from '../../support/utils/helpers'

var url = Cypress.env('europe_url');
var email = Cypress.env('email');
var password = Cypress.env('password');
describe('Card tests', () => {
    it(
        'CI-0002: See card info"',
        () => {
            cy.visit(url)
            waitForPageFullLoad()
            cy.get(CARD.CARD_EUROPE_JEWEL)
            cy.get(CARD.CARD_TITLE).contains('Europe Jewel - 14 Days')
            cy.get(CARD.CARD_VALUES).contains('dt', 'Destinations')
            cy.get(CARD.CARD_VALUES).contains('dt', 'Age Range')
            cy.get(CARD.CARD_VALUES).contains('dt', 'Travel Style')
            cy.get(CARD.CARD_VALUES).contains('dt', 'Operated in')
            cy.get(CARD.CARD_VALUES).contains('dt', 'Operator')
            cy.get(CARD.CARD_PRICE_WRAPPER).contains('dt', 'Tour length')
            cy.get(CARD.CARD_PRICE_WRAPPER).contains('dd', '14 days')
            cy.get(CARD.CARD_PRICE_WRAPPER).contains('dt', 'Price per day')
            cy.get(CARD.CARD_PRICE_WRAPPER).contains('dd', '€131')
            cy.get(CARD.CARD_SAVING).contains('div', '31%')
            cy.get(CARD.CARD_PRICE_CONTAINER).contains('div', '€2,665')
            cy.get(CARD.CARD_PRICE_CONTAINER).contains('span', '1,840')
        },
    )

    it(
        'CI-0005: Add tour to new wishlist as a logged in user"',
        () => {
            cy.get(CARD.CARD_FAVOURITE).click()
            waitForPageFullLoad()
            cy.get(CARD.CARD_LOGIN_MODAL).should('be.visible')
            cy.get(CARD.CARD_LOGIN_MODAL).contains('h2', 'Log in')
            waitForPageFullLoad()
            cy.get(CARD.CARD_LOGIN_EMAIL).type('tourradartech@yopmail.com')
            cy.get(CARD.CARD_LOGIN_PASSWORD).type(password)
            cy.get(CARD.CARD_LOGIN_BUTTON).click()
            waitForPageFullLoad()
            cy.get(CARD.CARD_ADD_WISHLIST_MODAL).should('be.visible')
            cy.get(CARD.CARD_WISHLIST_CREATE_NEW).click()
            cy.get(CARD.CARD_WISHLIST_INPUT).click().clear().type('Someday tours')
            cy.get(CARD.CARD_WISHLIST_BUTTON).click()
            cy.get(CARD.CARD_WISHLIST_DONE).click()
        },
    )

    it(
        'CI-0012: Download brochure as non logged in user"',
        () => {
            waitForPageFullLoad()
            cy.get(CARD.CARD_DOWNLOAD_BROCHURE).contains('Download Brochure').click()
            cy.get(CARD.CARD_DOWNLOAD_BROCHURE_MODAL).should('be.visible')
            cy.get(CARD.CARD_DOWNLOAD_BROCHURE_INPUT_EMAIL).clear()
            cy.get(CARD.CARD_DOWNLOAD_BROCHURE_INPUT_EMAIL).type(email)
            cy.get(CARD.CARD_DOWNLOAD_BROCHURE_BUTTON).should('be.visible')
            cy.get(CARD.CARD_DOWNLOAD_BROCHURE_BUTTON).click()
            waitForPageFullLoad()
            cy.get(CARD.CARD_DOWNLOAD_BROCHURE_SENT).contains('Brochure successfully sent!')
            cy.get(CARD.CARD_DOWNLOAD_BROCHURE_CLOSE).click()
        }, 
    )

    it(
        'CI-0010: View tour"',
        () => {
            cy.get(CARD.CARD_VIEW_BUTTON).contains('View tour').click()
        },
    )
})
'use strict'

import { CONSTANTS, ADDRESS } from '../../const'
import { ProductsPage, SingleProductView } from '../page/products.page'
import { CartCheckout, AuthenticateScreen, AddressScreen, ShippingOptionsScreen, PaymentScreen } from '../page/checkout.page'
import { TIMINGS } from '../../const/timings'

require('dotenv').config()

const productsPage = new ProductsPage()
const singleProductView = new SingleProductView()
const cartCheckout = new CartCheckout()
const authenticateScreen = new AuthenticateScreen()
const addressScreen = new AddressScreen()
const shippingOptionsScreen = new ShippingOptionsScreen()
const paymentScreen = new PaymentScreen()

const expect = require('chai').expect

describe('Add 2 items to the cart and place an order', () => {
  before('Navigation to the Online Store', () => {
    driver.url(CONSTANTS.STORE_LANDING)
  })

  it('it should be able to get a list of featured products', () => {
    productsPage.productListContainer.waitForDisplayed(TIMINGS.PAGE_LOAD)
    expect(productsPage.productEntries.length).to.not.equal(0)
  })

  it('it should initially have no products added to cart', () => {
    expect(productsPage.emptyCartPlaceholder.isDisplayed()).to.equal(true)
  })

  it('it should be able to add items on the cart', () => {
    let item = 1
    productsPage.productListContainer.scrollIntoView()
    while (item < 3) {
      productsPage.productEntries[item - 1].click()
      singleProductView.addToCartButton.click()
      singleProductView.addingToCartSpinner.waitForExist(TIMINGS.PAGE_LOAD, true)
      singleProductView.confirmationBanner.waitForDisplayed(TIMINGS.PAGE_LOAD)

      expect(singleProductView.productAddedMessage.getText()).to.equal('Product successfully added to your shopping cart')
      expect(productsPage.productsInCart.getText()).to.equal(item.toString())

      if (singleProductView.confirmationBanner.isDisplayed() && item === 1) {
        singleProductView.continueShopping.click()
        singleProductView.productAddedMessage.waitForDisplayed(TIMINGS.TRANSITION, true)
        driver.back()
      }

      item++
    }
  })

  it('it should be able to display 2 items in the cart summary', () => {
    cartCheckout.checkoutButton.click()
    cartCheckout.orderDetailsTable.waitForDisplayed(TIMINGS.PAGE_LOAD)
    expect(cartCheckout.orderList.length).to.equal(2)
  })

  it('it should be able to login to an existing account', () => {
    cartCheckout.proceedToCheckout.scrollIntoView()
    cartCheckout.proceedToCheckout.click()
    authenticateScreen.loginForm.waitForDisplayed(TIMINGS.PAGE_LOAD)
    driver.pause(TIMINGS.TRANSITION)
    authenticateScreen.emailField.setValue(process.env.USERNAME)
    authenticateScreen.passwordField.setValue(process.env.PASSWORD)
    authenticateScreen.submitButton.click()
    expect(authenticateScreen.signOutButton.isDisplayed()).to.equal(true)
  })

  it('it should be able to retrieve account\'s delivery address', () => {
    expect(addressScreen.deliveryAddressSection.isDisplayed()).to.equal(true)
    expect(addressScreen.deliveryAddressName.getText()).to.equal(ADDRESS.NAME)
    expect(addressScreen.deliveryAddress.getText()).to.equal(ADDRESS.STREET)
    expect(addressScreen.deliveryCity.getText()).to.equal(ADDRESS.CITY)
    expect(addressScreen.deliveryCountry.getText()).to.equal(ADDRESS.COUNTRY)
    expect(addressScreen.deliveryMobile.getText()).to.equal(ADDRESS.CONTACT)
  })

  it('it should be able to retrieve account\'s billing address', () => {
    expect(addressScreen.billingAddressSection.isDisplayed()).to.equal(true)
    expect(addressScreen.invoiceAddressName.getText()).to.equal(ADDRESS.NAME)
    expect(addressScreen.invoiceAddress.getText()).to.equal(ADDRESS.STREET)
    expect(addressScreen.invoiceCity.getText()).to.equal(ADDRESS.CITY)
    expect(addressScreen.invoiceCountry.getText()).to.equal(ADDRESS.COUNTRY)
    expect(addressScreen.invoiceMobile.getText()).to.equal(ADDRESS.CONTACT)
  })

  it('it should show shipping options for the address', () => {
    addressScreen.proceedToCheckoutButton.click()
    shippingOptionsScreen.deliveryOption.waitForDisplayed(TIMINGS.PAGE_LOAD)
    expect(shippingOptionsScreen.defaultDeliveryOption.isSelected()).to.equal(true)
  })

  it('it should show the order summary and payment options', () => {
    shippingOptionsScreen.termsCheckbox.click()
    shippingOptionsScreen.proceedToCheckoutButton.click()
    paymentScreen.cartPurchaseSummary.waitForDisplayed(TIMINGS.PAGE_LOAD)
    expect(paymentScreen.totalPricePayable.isDisplayed()).to.equal(true)
    expect(paymentScreen.bankWireOption.isDisplayed()).to.equal(true)
    expect(paymentScreen.chequeOption.isDisplayed()).to.equal(true)
  })

  it('should be able to choose a payment methods and complete checkout', () => {
    paymentScreen.bankWireOption.click()
    paymentScreen.confirmOrderButton.waitForDisplayed(TIMINGS.PAGE_LOAD)
    paymentScreen.confirmOrderButton.click()
    paymentScreen.bankWireOrderSummary.waitForDisplayed(TIMINGS.TRANSITION)
    expect(paymentScreen.orderConfirmationHeader.getText()).to.equal('ORDER CONFIRMATION')
    expect(paymentScreen.orderConfirmation.getText()).to.equal('Your order on My Store is complete.')
    expect(paymentScreen.bankWireOrderSummary.isDisplayed()).to.equal(true)
  })
})

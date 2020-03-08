'use strict'

export class CartCheckout {
  get checkoutButton () {
    return $('a.btn[title="Proceed to checkout"] span')
  }

  get orderDetailsTable () {
    return $('#order-detail-content')
  }

  get orderList () {
    return $$('#cart_summary tbody tr.cart_item')
  }

  get proceedToCheckout () {
    return $('.cart_navigation a.btn[title="Proceed to checkout"]')
  }
}

export class AuthenticateScreen {
  get loginForm () {
    return $('#login_form')
  }

  get emailField () {
    return $('#email')
  }

  get passwordField () {
    return $('#passwd')
  }

  get submitButton () {
    return $('#SubmitLogin')
  }

  get signOutButton () {
    return $('.logout')
  }
}

export class AddressScreen {
  get deliveryAddressSection () {
    return $('#address_delivery')
  }

  get billingAddressSection () {
    return $('#address_invoice')
  }

  get deliveryAddressName () {
    return $('#address_delivery .address_firstname')
  }

  get deliveryAddress () {
    return $('#address_delivery .address_address1')
  }

  get deliveryCity () {
    return $('#address_delivery .address_city')
  }

  get deliveryCountry () {
    return $('#address_delivery .address_country_name')
  }

  get deliveryMobile () {
    return $('#address_delivery .address_phone_mobile')
  }

  get invoiceAddressName () {
    return $('#address_invoice .address_firstname')
  }

  get invoiceAddress () {
    return $('#address_invoice .address_address1')
  }

  get invoiceCity () {
    return $('#address_invoice .address_city')
  }

  get invoiceCountry () {
    return $('#address_invoice .address_country_name')
  }

  get invoiceMobile () {
    return $('#address_invoice .address_phone_mobile')
  }

  get proceedToCheckoutButton () {
    return $('.cart_navigation button[name="processAddress"]')
  }
}

export class ShippingOptionsScreen {
  get deliveryOption () {
    return $('.delivery_options')
  }

  get defaultDeliveryOption () {
    return $('.delivery_options table.resume .radio input')
  }

  get termsCheckbox () {
    return $('.checkbox input')
  }

  get proceedToCheckoutButton () {
    return $('.cart_navigation button[name="processCarrier"]')
  }
}

export class PaymentScreen {
  get cartPurchaseSummary () {
    return $('#cart_summary')
  }

  get totalPricePayable () {
    return $('.cart_total_price #total_price')
  }

  get bankWireOption () {
    return $('a.bankwire')
  }

  get chequeOption () {
    return $('a.cheque')
  }

  get confirmOrderButton () {
    return $('#cart_navigation>button[type="submit"]')
  }

  get bankWireOrderSummary () {
    return $('.box .cheque-indent')
  }

  get orderConfirmation () {
    return $('.box .cheque-indent strong')
  }

  get orderConfirmationHeader () {
    return $('h1.page-heading')
  }
}

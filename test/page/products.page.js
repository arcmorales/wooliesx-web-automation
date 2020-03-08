'use strict'

export class ProductsPage {
  get productListContainer () {
    return $('#homefeatured li')
  }

  get productEntries () {
    return $$('#homefeatured li div.product-container')
  }

  get productsInCart () {
    return $('.shopping_cart span.ajax_cart_quantity')
  }

  get emptyCartPlaceholder () {
    return $('.ajax_cart_no_product')
  }
}

export class SingleProductView {
  get addToCartButton () {
    return $('.box-cart-bottom #add_to_cart')
  }

  get addingToCartSpinner () {
    return $('#add_to_cart .exclusive.added.disabled')
  }

  get productAddedMessage () {
    return $('#layer_cart .layer_cart_product h2')
  }

  get confirmationBanner () {
    return $('#layer_cart')
  }

  get continueShopping () {
    return $('.continue.btn')
  }
}

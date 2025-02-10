const shoppingCart = {
  items: [
    {ProductName: "Apples", price: 8.59, quantity: 40},
    {ProductName: "Oranges", price: 9.10, quantity: 40}
  ],

  addItemsToCart(item) {
    this.items.push(item)
  },
}

shoppingCart.addItemsToCart({ProductName: "Honey", price: 18.59, quantity: 400})
console.log(shoppingCart.items)
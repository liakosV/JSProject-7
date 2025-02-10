class productAlreadyExistsError extends Error {
  constructor(message) {
    super(message)
    this.code = "ProductExists"
  }
}

class ProductNotFoundError extends Error {
  constructor(message) {
    super(message)
    this.code = "Product Not Found"
  }
}

try {
  throw new ProductNotFoundError("Product not found")
} catch(error) {
  if(error instanceof ProductNotFoundError) {
    console.error("Product not exists \n" + error.message, error.code)
  } else if(error instanceof productAlreadyExistsError) {
    console.error ("Product already exists. \n" + error.message, error.code)
  }
}
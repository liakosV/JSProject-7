const store = `[
{"id": "pro4vog",
"fields": {
  "company": "ikea",
  "colors": ["#FF1234", "#222"],
  "featured": true,
  "price": 990,
  "genre": "white-black-chair"
  }
},
{"id": "pro4vpr",
"fields": {
  "company": "ikea",
  "colors": ["#AB1234", "#222"],
  "featured": true,
  "price": 890,
  "genre": "black-black-chair"
  }
}]`

// console.log(JSON.parse(store))

const jsObj1 = JSON.parse(store)

jsObj1.map(product => {
  let {fields} = product
  let {company, price} = fields
})

console.log(product)

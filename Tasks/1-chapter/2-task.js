const cities = ["Athens, London, Paris,"]

cities.push("Berlin")
console.log(...cities)


const user = {
  name: "Vasilis",
  age: 25,
  city: "Thessaloniki"
}

const hello = function() {
  return `Hello ${user.name}`
}
console.log(hello())


const p = 3.14

function E(r) {
  return p *  Math.pow(r, 2)
}
console.log(E(5))
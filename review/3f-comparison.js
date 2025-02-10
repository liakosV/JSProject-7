const vat = '123'
const num = 123

let comp1 = num == vat
let comp2 = num === vat
console.log(comp1, comp2)

let temp = 40
let isSunny = temp > 40
let isSunnyStr = (isSunny) ? "Big-Sun" : "Small sun"

if(isSunny) {
  console.log("Big sun")
} else {
  console.log ("Small sun")
}

console.log(isSunny, isSunnyStr)
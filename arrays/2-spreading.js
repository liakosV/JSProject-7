const initial = [1, 2, 3]
const copy = [...initial]

const extended = [0, ...initial, 4]
const chars = [..."Hello"]

copy.forEach(el => console.log(el))
console.log(extended)
console.log(chars)


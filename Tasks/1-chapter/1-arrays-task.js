const numbers = [1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 5] 

function getUniqueValues(arr) {
  return [...new Set(arr)]
}

console.log(getUniqueValues(numbers))


const nestedArr = [1, 2, 3, 4, [5, 6,[1, 2, 3, [4, 5]]], [1, 2, 3]]

console.log(nestedArr.flat(Infinity))

// Another method of the flat
// const arr = [
//   {id: 1, name: "Alice"}, [
//     {job: "Developer", skills: "Java, SQL"}, [{experience: 25}]
//   ],
//   [ {address: "Euosmos", city: "Thessaloniki"}]
// ]
// console.log(arr.flat(Infinity))


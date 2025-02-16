function chunkArray(array, size) {
  let result = []
  for(let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const chunkSize = 3
console.log(chunkArray(myArr, chunkSize))

function twoArrays(array1, array2) {
  return array1.filter(item => array2.includes(item))
}

const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [2, 5, 6, 7]
console.log(twoArrays(arr1, arr2))
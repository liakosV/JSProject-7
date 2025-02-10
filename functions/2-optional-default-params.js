// function greet(name) {
//   if (name === undefined) {
//     name = "Guest"
//   }
//   console.log(`hello, ${name}`)
// }

// greet()

// // Default params 
// function getUser(name = "Guest", age = 18) {
//   return { name: name, age: age}
//   // return {name, age} / other way.
// }
// const obj = getUser()
// console.log(obj)

function getFormatedDateTime(
  locale = "en-US",
  options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }
) {
  const now = new Date()
  return now.toLocaleDateString(locale, options)
}
console.log(getFormatedDateTime("el-GR"))

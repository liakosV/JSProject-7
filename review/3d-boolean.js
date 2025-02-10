let isDarkMode = false
let username = ''
let isUserLoggedin = false
let isDashboardOn = false
console.log(`Is dark mode enabled: ${isDarkMode}`)

isUserLoggedin = true
username = 'Anna'
isDashboardOn = isUserLoggedin && username
console.log(isDashboardOn)
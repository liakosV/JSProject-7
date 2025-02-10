function convertMeters(meters) {
  return {
    centimeters: meters * 100,
    millimeters: meters * 1000
  }
}

function convertCentimeters(cm) {
  return {
    meters: cm / 100,
    millimeters: cm * 10
  }
}

function convertMillimeters(mm) {
  return {
    meters: mm / 1000,
    millimeters: mm / 10
  }
}

const mm = convertMillimeters(1500)
console.log(Object.meters)
console.log(Object.centimeters)
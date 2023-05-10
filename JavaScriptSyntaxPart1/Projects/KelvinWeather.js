// forecast for today in kelvin
const kelvin = 0;

// convert the kelvin variable to celcius
const celcius = kelvin - 273;

// convert celcius to fahrenheit 
let fahrenheit = celcius * (9 / 5) + 32;

// round down the fahrenheit conversion
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

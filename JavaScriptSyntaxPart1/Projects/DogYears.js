// store my age
let myAge = 24;

// store the first two years of a dogs life
let earlyYears = 2;

// multiply 2 by 10.5 to account for dog years
earlyYears *= 10.5;

// remove the 2 years from myAge
let laterYears = myAge - 2;

// multiply by 4 now that the first 2 years have been accounted for
laterYears *= 4;

// use the conversions to get final age
const myAgeInDogYears = earlyYears + laterYears;

// store my name as lowercase
const myName = 'Ethan'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

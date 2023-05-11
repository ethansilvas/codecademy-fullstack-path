let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnersAge = 17;

if (runnersAge >= 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnersAge >= 18 && registeredEarly) {
  console.log(`You will race at 9:30am and your race number is ${raceNumber}`);
} else if (runnersAge >= 18 && !registeredEarly) {
  console.log(`You will race at 11:00am and your race number is ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`You will race at 12:30pm and your race number is ${raceNumber}`);
}


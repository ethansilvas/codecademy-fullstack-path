const getSleepHours = day => {
    day = day.toLowerCase();

    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 8;
            break;
        case 'friday':
            return 5;
            break;
        case 'saturday':
            return 10;
            break;
        case 'sunday':
            return 8;
            break;
    }
}

const getActualSleepHours = () => {
    return getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday');
}

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    console.log(`Sleep over/under: ${actualSleepHours - idealSleepHours}`);

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed!');
    } else {
        console.log('You should get more sleep.');
    }
}

calculateSleepDebt();


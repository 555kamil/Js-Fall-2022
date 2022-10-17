    let dayName = 'mon';
    if (dayName.localeCompare('mon') === 0 || dayName.localeCompare('wen') === 0 || dayName.localeCompare('fri') === 0) {
        console.log('attend the class');
    } else if (dayName.localeCompare('tue') === 0 || dayName.localeCompare('sat') === 0) {
        console.log('attend lab session');
    } else if (dayName.localeCompare('mon') === 0) {
        console.log('self study');
    } else {
        (dayName === 'sun')
        console.log('enjoy')
    }

    

    // if 'swimming' is not present in the array, add it.
    // if already present then print the index at which it is present

    const sports  = ['football', 'Soccer', 'swimming', 'Baseball', 'Rugby', 'Tennis'];
    let checkSport = 'swimming';
    if (sports.includes(checkSport)) {
        console.log(`index of ${checkSport} is ${sports.indexOf(checkSport)}`);
    } else console.log(`${sports.push(checkSport)}`);

   

    
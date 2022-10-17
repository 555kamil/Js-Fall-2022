
/**
 * Q1:
 * 
 * const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present but not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced value.
 * 
 */
 const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 let sportName = 'BASKETBALL';
 if (sports.includes(sportName) && sports.indexOf(sportName)!==2) {
    console.log(`${sportName} is mentioned in sports array`);
 } else if (sports.indexOf(sportName)===2) {
    console.log(`${sportName} is present at index-2`);
 } else  {
    console.log(`\n${sports.splice(2, 1, sportName)}`);
    console.log(`\n${sports}\n`)
 }

/**
 * Q2:
 * 
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */
 let planets = ['Earth', 'Pluto', 'Mercury', 'Jupiter', 'Earth','Saturn', 'Mars', "Venus", 'Pluto'];
 let planet_Name = 'Earth';
 if (planets.indexOf(planet_Name) === 0) {
    console.log(`${planet_Name} is mentioned in expected index`);
 } else {
    planets.unshift(planet_Name);
    console.log(`\n${planets}`)
 }

 

/**
 * 
 * Q3:
 * 
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * if student score and maxScore are valid, then print "Your percentage is XX.yy and your Grade is Z"
 * 
 * studentScore = 100
 * maxScore = 150
 * 
 * (studentScore/maxStore)*100
 * 
 */
 let studentScore = 120;
 let maxScore = 150;
 let x = (studentScore/maxScore)*100;
if (x>=91 && x<=100) {
    console.log(`\nYour percentage is ${x.toFixed(2)}% and your Grade is A\n`);
} else if (x>=81 && x<=90.99) {
    console.log(`\nYour percentage is ${x.toFixed(2)}% and your Grade is B\n`) 
} else if (x>=71 && x<=80.99) {
    console.log(`\nYour percentage is ${x.toFixed(2)}% and your Grade is C\n`)
} else if (x>=61 && x<=70.99) {
    console.log(`\nYour percentage is ${x.toFixed(2)}% and your Grade is D\n`)
} else if (x>=51 && x<=60.99) {
    console.log(`\nYour percentage is ${x.toFixed(2)}% and your Grade is E\n`)
} else if (x>=0 && x<51) {
    console.log(`\nYour percentage is ${x.toFixed(2)}% and your Grade is F\n`)
} else {
    console.log('\nInvalid student score\n');
}

        
/**
 * 
 * Q4:
 * 
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 
 * 
 * 10, 12, 15, 19
 * 
 * 
 */
let myVar = 15;
if (myVar%5===0 && myVar%3 !==0){
    console.log('divisible by 5\n');
} else if (myVar%3===0 && myVar%5 !==0) {
    console.log('divisible by 3\n')
} else if (myVar%5===0 && myVar%3===0) {
    console.log('divisible by 5 and 3\n')
} else {
    console.log(`${myVar}\n`)
}

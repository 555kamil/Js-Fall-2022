/**
 * Q2: Print the index for SECOND occurrence of 'baseBalL' (Ignoring cases)
 * 
 * if BaseBall is NOT present in Array: print, Baseball is not present in the given array
 * 
 * if BaseBall is present Only once in Array: print, Baseball is present only once in the given array
 * 
 * if BaseBall is present two or more times in Array: print, Baseball has second occurrence at index-X
 *  
 */
let favSports_1 = ['Football', 'Soccer', 'Fishing', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_2 = ['Football', 'Soccer', 'BaseBall', 'Ping pong', 'Rugby', 'sport_OccuBASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_3 = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let spt = 'baseBalL'
let count = 0
let newArray =[];
let ask_Ocurrence = 2
for (let i=0; i<favSports_1.length-1; i++) {
    if (favSports_1[i].toLowerCase().localeCompare(spt.toLowerCase()) ===0 ) {
        count++;
        newArray.push(i)
    } 
} if (count === 1) {
    console.log(`${spt.substring(0,1).toUpperCase() + spt.substring(1).toLowerCase()} is present only once in the given array`);
 }
    else if (count >1 ) {

        console.log(`${spt.substring(0,1).toUpperCase() + spt.substring(1).toLowerCase()} has ${ask_Ocurrence} occurrence at index-${newArray[ask_Ocurrence-1]}`);
    }
    else { 
        console.log(`${spt.substring(0,1).toUpperCase() + spt.substring(1).toLowerCase()} is not present in the given array`);
    }
    
/**
 * Q1. Print the object data as mentioned above.
 */
let student1_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}
/*
    name : John Doe
    state : NJ
    age : 20
    gender : M
    paymentMethod : finance
    anyExperience : true
    pastJobs : Yes (3)
        companyName : ABC
        numOfYears : 2
        title : 'DEF'

        companyName : EFG
        numOfYears : 3
        title : 'HIJ'
        
        companyName : KLM
        numOfYears : 4
        title : 'NOP'
    knownSkills : 5 (Java, Manual testing, Js basics, Programming, CS basics)
*/
for (attr in student1_1) {
    if (attr !== 'pastJobs' && attr !== 'knownSkills'){
    console.log(`${attr}: ${student1_1[attr]}`); 
}  else if (attr === 'pastJobs') {
    if (student1_1[attr].length > 0){
        console.log(`${attr} : Yes (${student1_1[attr].length})`);
    } else {
        console.log(`${attr} : No`);
    }
    student1_1[attr].forEach (function(past_J) {
    for (key in past_J) {
        console.log(`\t${key}: ${past_J[key]}`);
    } console.log(`\n`);
    })
} else if (attr ==='knownSkills'){
    console.log(`${attr} : ${student1_1[attr].length} (${student1_1[attr]})\n`);
}}

/**
 * 
 * 
 * 
 * 
 */

let student1_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}
/*
    name : Eli hen
    state : NY
    age : 22
    gender : F
    paymentMethod : Paid
    anyExperience : false
    pastJobs : No
    knownSkills : 3 (Java, Manual testing, CS basics)
*/
for (attr in student1_2) {
    if (attr !== 'pastJobs' && attr !== 'knownSkills'){
    console.log(`${attr}: ${student1_2[attr]}`); 
}  else if (attr === 'pastJobs') {
    if (student1_2[attr].length > 0){
        console.log(`${attr} : Yes (${student1_2[attr].length})`);
    } else {
        console.log(`${attr} : No`);
    }
    student1_2.pastJobs.forEach (function(past_J) {
    for (let key in past_J) {
        console.log(`\t${key}: ${past_J[key]}`);
    } console.log(`\n`);
})
} else if (attr ==='knownSkills'){
    console.log(`${attr} : ${student1_2[attr].length} (${student1_2[attr]})\n`);
}} 


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

let favSports_2 = ['Football', 'Soccer', 'BaseBall', 'Ping pong', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_3 = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let spt = 'baseBalL'
let count = 0
let newArray =[];
let ask_Ocur = 2
for (let i=0; i<favSports_1.length-1; i++) {
    if (favSports_1[i].toLowerCase().localeCompare(spt.toLowerCase()) ===0 ) {
        count++;
        newArray.push(i)
    } 
} if (count === 1) {
    console.log(`${spt.substring(0,1).toUpperCase() + spt.substring(1).toLowerCase()} is present only once in the given array`);
 }
    else if (count >1 ) {

        console.log(`${spt.substring(0,1).toUpperCase() + spt.substring(1).toLowerCase()} has ${ask_Ocur} occurrence at index-${newArray[ask_Ocur-1]}`);
    }
    else { 
        console.log(`${spt.substring(0,1).toUpperCase() + spt.substring(1).toLowerCase()} is not present in the given array`);
    }
    


/**
 * Q3. Print the total number of past experience for a student
 * 
 * Assumption:
 * In studentObject, anyExperience-attribute will be true, if has any past-experience, 
 * otherwise anyExperience-attribute will be false
 * 
 * If student has any past experience, print :
 *      studentName has total X-years of experience
 * 
  * If student has NO past experience, print :
 *      studentName has no past experience
 */
let student3_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}
 

if (student3_1.anyExperience){
    let totalExp = 0
    for (key of student3_1.pastJobs) {
        totalExp += key.numOfYears
    } console.log(`${student3_1.name} has ${totalExp} years of experience`);
    } else {
        console.log(`${student3_1.name} has no past experience `);
    }

/**
 * 
 */

let student3_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}

if (student3_2.anyExperience){
    let totalExp1 = 0
    for (key of student3_2.pastJobs) {
        totalExp1 += key.numOfYears
    } console.log(`${student3_2.name} has ${totalExp1} years of experience`);
    } else {
        console.log(`\n${student3_2.name} has no past experience\n`);
    }





































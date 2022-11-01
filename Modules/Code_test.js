// Question - 1 - 20
/**
 * Create a function to return an array 
 *  after removing given number from the given array
 */ 
/** 
 * Example:
 * input: [1, 2, 3, 4, 5] , 2  
 * output: [1, 3, 4, 5]
 * 
 * input: [21, 32, 12, 43, 45, 65, 12], 12
 * output: [21, 32, 43, 45, 65]
 * 
 * input: [-1, 2, 43, 65] , 11
 * output: [-1, 2, 43, 65]
 */
 /**function removeNumFromArray(num, numArray) {
    // code
}

const arr1_1 = [1, 2, 3, 4, 5];
const numArrayAfterRemoval1_1 = removeNumFromArray(2, arr1_1);
console.log(numArrayAfterRemoval1_1);
    // [1, 3, 4, 5]
    
const arr1_2 = [21, 32, 12, 43, 45, 65, 12];
const numArrayAfterRemoval1_2 = removeNumFromArray(12, arr1_2);
console.log(numArrayAfterRemoval1_2);  
    // [21, 32, 43, 45, 65]

const arr1_3 = [-1, 2, 43, 65];
const numArrayAfterRemoval1_3 = removeNumFromArray(11, arr1_3);
console.log(numArrayAfterRemoval1_3);  
    // [-1, 2, 43, 65]
    */

function removeNumFromArray (num, numArray) {
    let newArray = [];
    for (key of numArray) {
        if (key !== num) {
            newArray.push(key);
        }
    } return newArray;
}


// Question - 2 - 30
/**
 * Create a function to convert all student-names into Titlecase.
 * Return the updated allStudentsData
 * 
 * const updateStudentRecord = titleCaseAllStudentNames(allStudentData_3)
 * console.log(updateStudentRecord)
 * 
 */
/**
 * Example:
 * 
 * input:
 * let allStudentData_3 = [
 *      {
 *          id: 1,
 *          name: 'haRrY poTteR',
 *      },
 *      {
 *          id: 2,
 *          name: 'KiNG koNG',
 *      },
 *      {
 *          id: 3,
 *          name: 'laNa geRe',
 *      },
 *      {
 *          id: 4,
 *          name: 'cHaSe LAN',
 *      },
 *      {
 *          id: 5,
 *          name: 'mAYa paSha',
 *      }
 * ]
 * 
 * output/Return:
 * [
 *      {
 *          id: 1,
 *          name: 'Harry Potter',
 *      },
 *      {
 *          id: 2,
 *          name: 'King Kong',
 *      },
 *      {
 *          id: 3,
 *          name: 'Lana Gere',
 *      },
 *      {
 *          id: 4,
 *          name: 'Chase Lan',
 *      },
 *      {
 *          id: 5,
 *          name: 'Maya Pasha',
 *      }
 * ]
 */
 function toTitleCase (userInput) {
    let sent_Titlecase = '';
    let sentence = userInput.toLowerCase().split(' ');
    for (let i=0; i<=sentence.length-1; i++) {
     sent_Titlecase += sentence[i].charAt(0).toUpperCase() + sentence[i].substring(1) + ' ';
    }
    return sent_Titlecase.trim();
  }

const titleCaseAllStudentNames = (inputArray) => {
    let resultArray = inputArray.map(toTitleCase(inputArray.name));
    return resultArray; 
}

const updateStudentRecord = titleCaseAllStudentNames(allStudentData_3)


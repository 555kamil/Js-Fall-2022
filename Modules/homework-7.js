// Due date -> Oct 23 eod

/**
 * Q1. Create a function to generate abbreviation for a sentence
 * 
 * Return the final result
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe every day' -> YNWAED
 * 'good Morning' -> 'GM'
 * 'hello dear, how are you doing?' -> HDHAYD
 */
 function abbrForSent (userSent) {
    let mySent = userSent.toUpperCase().split(' ');
    let abbrString = '';
    for (let i=0; i<mySent.length; i++) {
         abbrString += mySent[i].substring(0,1);
    }
    return abbrString;   
}
console.log(abbrForSent('you Never waLK ALONe every day'));

/**
 * Q2. Create a function to reverse a given string (word by word)
 * 
 * 'have a great day' -> day great a have
 * 'good morning' -> morning good
 * 'Learn' -> Learn
 */
/**
 * 1. what is the purpose of the function?
 *      reverse string word by word (reverseWordString , reverseStringByWord)
 * 
 * 2. Do I need any input from user? -> Yes
 *      If Yes,
 *          a) How many inputs I need from user? 1 (string)
 * 
 * 3. Should I return any value back to user at the end of operation/function? -> Yes
 *      If Yes,
 *          what is the datatype of returned value -> string (reversedString)
 */
function reverseStringByWord (userInput) {
    let resultString = '';

    const arr2 = userInput.split(' ');
    for (let i=arr2.length-1 ; i >= 0 ; i--) { 
        resultString = resultString + arr2[i] + ' ';
    }
    return resultString.trim();
}

console.log(reverseStringByWord('have a great day'));


/**
 * Q3. Create a function to convert the string value in to Titlecase
 * 
 * Return the final result
 * 
 * 
 * 'you live Only once' -> You Live Only Once
 * 'you Never waLK ALONe' -> You Never Walk Alone
 * 'have a GrEAT daY' -> 'Have A Great Day'
 */
 
function toTitleCase (userInput) {
   let sent_Titlecase = '';
   const sentence = userInput.toLowerCase().split(' ');
   for (let i=0; i<sentence.length; i++) {
    sent_Titlecase += sentence[i].charAt(0).toUpperCase() + sentence[i].substring(1) + ' ';
   }
   return sent_Titlecase.trim();
 }

 console.log(toTitleCase('you Never waLK ALONe have a GrEAT daY'));
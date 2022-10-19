/**
 * Q1. Find the average of the given numbers-array
 * 
 * [1,2,3,4,5] -> 15/5 -> 3
 * [1, -1, 2, -3, 1] -> 0/5 -> 0
 * [1, 2, 1, 1, 3, 1, 2] -> 11/7 -> 1.xxx
 * 
 */
 let numbers = [290, 12, 43, 10, 5, -10];
 let sum = 0;
 for (let ind=0; ind < numbers.length; ind++) {
    sum += numbers[ind];
 }
    let averNumber = sum/numbers.length
    console.log(`\nThe average of the given numbers-array is ${averNumber.toFixed(2)}\n`);
 
 
 /**
  * Q2. Reverse a given string (word by word)
  * 
  * 'have a great day' -> day great a have
  * 'good morning' -> morning good
  * 'Learn' -> Learn
  * 
  * 
  */
 let str2 = 'have a great day my dear friend'   // day great a have
 let str = str2.split(' ')
 let reverseStr2 = '';
 for (let num = str.length-1; num >= 0; num--) {
    reverseStr2 += str[num] + ' '
 }
 console.log(`\nreverseStr2 -> ${reverseStr2}\n`);   // day great a have
 
 
 /**
  * Q3. Create abbreviation for a sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe every day' -> YNWAED
  * 'good Morning' -> 'GM'
  * 'hello dear, how are you doing?' -> HDHAYD
  */
 let str3 = 'you Never waLK ALONe every day';
 let st = str3.split(' ');
 let abbr = '';
 for (let i=0; i<st.length; i++) {
    abbr += st[i].substring(0,1)
 }
 console.log(`abbr -> ${abbr.toUpperCase()}\n`);
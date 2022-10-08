
 const sentence1 = 'Hello Dear, how are you doing?';
 let result1 = 0;
 let lengthOfSen = sentence1.length;
 result1 = lengthOfSen >= 10 ? 15 : 10;
 console.log(`\n\nresult1 -> ${result1}`);
 
 
 const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 let mySentenceAfter = sentence2.replace(/a/gi, 'Alpha');
 console.log(`\n\nmySentenceAfter -> ${mySentenceAfter}`);
 
 
 
 /**
  * print the result in console:
  * 1. the length of sentence-3
  * 2. does sentence-3 starts with 'HeaLTh' (ignore cases)
  * 3. does sentence-3 contains with 'Body' (ignore cases)
  * 4. index of 'BoDy' in sentence3  (ignore cases)
  * 5. the last-character in sentence-3
  * 6. word 'BoDy' is present only once. (true or false)
  */
 
 const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 let sentence_3 = sentence3.length;
 console.log(`\n the length of sentence-3 ${sentence_3}`);

 let sentence3_LowCase = sentence3.toLowerCase();
 let start = 'HeaLTh'.toLowerCase();
 let sentence3_Starts = sentence3_LowCase.startsWith(start);
 console.log(`\ndoes sentence-3 start with 'HeaLTh' (ignore cases) -> ${sentence3_Starts}`);

 let contains = 'Body'.toLowerCase();
 let sentence3_Cont = sentence3_LowCase.includes(contains)
 console.log(`\ndoes sentence-3 contain with 'Body' (ignore cases)-> ${sentence3_Cont}`);

 let t = 'BoDy'
 let w = t.toLowerCase()
 let index_Of = sentence3_LowCase.indexOf(w);
 console.log(`\nindex of 'BoDy' in sentence3  (ignore cases) => ${index_Of}`);

 let lastChar = sentence3.charAt(sentence_3 - 1)
 console.log(`\nthe last-character in sentence-3 => ${lastChar}`)

 let s = 'BoDy'
 let n = sentence3.indexOf(s)
 let m = sentence3.lastIndexOf(s)
 let present_body = m===n && m>0 || m!==n ? true:false
 console.log(`\nword ${s} is present only once => ${present_body}`)


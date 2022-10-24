/**
 * Q1: Print the length of the country name (without using string.length or length property from string-library)
 * 
 */
 // countryName.length;  <-- not allowed
 let countryName = 'Argentina'
 let countryName_Split = countryName.split('')
 console.log(`\nthe length of the country name => ${countryName_Split.length}\n`);
 
 /**
  * Q2: find the number of words in the given sentence2
  */
 const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 let number_Of_Words = sentence2.split(' ').length
 console.log(`\nthe number of words in the given sentence2 is ${number_Of_Words}\n`);

/**
  * Q3: Create abbreviation for a 4-word sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe' -> YNWA
  */
 const sentence3 = 'you Never waLK ALONe';
 let abc = sentence3.toUpperCase();
 let sentence3_Split = abc.split(' ');
 let a = sentence3_Split[0].substring(0,1);
 let b = sentence3_Split[1].substring(0,1);
 let c = sentence3_Split[2].substring(0,1);
 let d = sentence3_Split[3].substring(0,1)
 let abbr = a.concat(b,c,d);
 console.log(`abbr -> ${abbr}\n`);     // abbr -> YNWA
 
 /**
  * Q4: Convert the string value in to Titlecase
  * 
  * 'you live Only once' -> You Live Only Once
  * 'you Never waLK ALONe' -> You Never Walk Alone
  * 'have a GrEAT daY' -> 'Have A Great Day'
  */
 const sentence4 = 'have a GrEAT daY';
 let xyz = sentence4.toLowerCase();
 let sen1 = xyz.split(' ');
 let e = sen1[0].substring(0,1).toUpperCase() + sen1[0].substring(1);
 let g = sen1[1].substring(0,1).toUpperCase() + sen1[1].substring(1);
 let h = sen1[2].substring(0,1).toUpperCase() + sen1[2].substring(1);
 let i = sen1[3].substring(0,1).toUpperCase() + sen1[3].substring(1)
 let sentence4_Titlecase = e + ' ' + g + ' ' + h + ' ' + i;
 console.log(`sentence4_Titlecase -> ${sentence4_Titlecase}\n`);   // sentence4_Titlecase -> Have A Great Day
 
 
 
 
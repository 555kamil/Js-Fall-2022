// F -> C
// T(°C) = (T(°F) - 32) / 1.8
let fTemp1 = 100;
let cTemp1 = (fTemp1 - 32) / 1.8;
let cTemp = cTemp1.toFixed(2)
console.log(`\n${fTemp1}°F is equal to ${cTemp}°C`);

// F -> K
// T(K) = (T(°F) + 459.67) × 5/9
let fTemp2 = 80;
let kTemp1 = (fTemp2 + 459.67) * 5/9;
let kTemp = kTemp1.toFixed(2)
console.log(`\n${fTemp2}°F is equal to ${kTemp}°K`);

// C -> F
// T(°F) = T(°C) × 1.8 + 32
let cTemp3 = 75
let fTemp3 = cTemp3*1.8 + 32
let fTemp = fTemp3.toFixed(2)
console.log(`\n${cTemp3}°C is equal to ${fTemp}°F`);

// C -> K
// T(K) = T(°C) + 273.15
let cTemp4 = 500
let kTemp4 = cTemp4 + 273.15
let kTemp2 = kTemp4.toFixed(2)
console.log(`\n${cTemp4}°C is equal to ${kTemp2}°K`);

// K -> F
// T(°F) = T(K) × 9/5 - 459.67
let tempK = 1000
let tempF = tempK * 9/5 - 459.67
let tempF1 = tempF.toFixed(2)
console.log(`\n${tempK}°K is equal to ${tempF1}°F`);

// K -> C
// T(°C) = T(K) - 273.15
let temK = 880
let temC = temK - 273.15
let tC = temC.toFixed(2)
console.log(`\n${temK}°K is equal to ${tC}°C`);
module.exports = function toReadable (number) {
  let onesNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teensNumbers = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tensNumbers = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let hundredsNumbers = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']; 

if (number <10) {    
      return `${onesNumbers[number]}`; 
  
  //ЧИСЛА 20,30,40,50,60,70,80,90)//  
} else if (number >=10 && number <=90 && number % 10 ==0) {  
  return `${tensNumbers[(number / 10)-1]}`;  
  //ЧИСЛА 11,12,13,14,15,16,17,18,19//
} else if (number <20 && number >10) {
  let a = (number % 10)
  return `${teensNumbers[a-1]}`;
  //ЧИСЛА ОТ 10 ДО 90//
  } else if (number >20 && number <100) {
  let a = Math.floor(number / 10);
  let b = number % 10;
  return `${tensNumbers[a-1]} ${onesNumbers[b]}`;
  //ЧИСЛА 100,200,300,400,500,600,700,800,900//
  } else if (number % 100 ===0) {
  return `${hundredsNumbers[(number / 100)-1]}`;
  //ЧИСЛА 111,112,113,114,115,116,117,118,119//
  } else if (number % 100 <20 && number % 100 > 10 ) {
  return String(`${hundredsNumbers[Math.floor((number / 100))-1]} ${teensNumbers[((number % 100) - 10)-1]}`);
  //ЧИСЛА C ВТОРЫМ ЧИСЛОМ 0 (104, 508...)//
  } else if (number > 100 && number < 1000 && number % 100 > 0 && number % 100 < 10) {
  return String(`${hundredsNumbers[Math.floor((number / 100))-1]} ${onesNumbers[number % 100]}`);
  //ЧИСЛА C вторым ЧИСЛОМ 0 (110, 240...)//
  } else if (number > 100 && number < 1000 && number % 10 === 0) {
  return String(`${hundredsNumbers[Math.floor((number / 100))-1]} ${tensNumbers[((number % 100) / 10)-1]}`);
  //ЧИСЛА ОТ 100 до 1000//    
  } else if (number >100 && number <1000) {
  let a = Math.floor(number / 100);
  let b = Math.floor((number - (100 * (Math.floor(number/100)))) / 10)
  let c = number % 10;    
  return String(`${hundredsNumbers[a-1]} ${tensNumbers[b-1]} ${onesNumbers[c]}`);    
  } 
};
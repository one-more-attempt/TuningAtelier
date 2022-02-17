'use strict'
// Дана строка, например, '123456'. Переверните эту строку
//  (сделайте из нее '654321') не используя цикл
const inputString = "123456";
console.log(inputString);

const ReverseString = (input) => input.split("").reverse().join("");
console.log(ReverseString(inputString));

//Проверьте, что строка начинается на http:// и заканчивается на .html.
const inputURL = "http://onliner.by/index.html";
const checkURL = (input) => input.startsWith("http://") && input.endsWith(".html")
console.log(checkURL(inputURL));

//Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.
function RusWeekDayFromNumber(inputNumber) {
  switch (inputNumber) {
    case 1: {return "Понедельник"};
	 case 2:{return "Вторник"};
	 case 3:{return "Среда"};
	 case 4:{return "Четверг"};
	 case 5:{return "Пятница"};
	 case 6:{return "Суббота"};
	 case 7:{return "Воскресенье"};
	 default: {
		 console.log ('invalid number');
		 return;
	}
  }
}
console.log(RusWeekDayFromNumber(6));


//CODEWARS
// It should look like this: Sam Harris => S.H; patrick feeney => P.F
function abbreviateFullName (fullName){
const splittedName = fullName.split(' ');
return(`${splittedName[0].slice(0,1)}.${splittedName[1].slice(0,1)}`.toUpperCase());
}
console.log(abbreviateFullName('Sam Harris'));

//CODEWARS
// Return an array, where the first element is the count of positives numbers and the second
//  element is sum of negative numbers
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
//  you should return [10, -65].
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function countSum(input) {
  let positiveCount = 0;
  let negativeSumm = 0;
  let outputArray = [];
  if (input == null || input.length === 0) {
    //console.log(outputArray);
    return outputArray;
  }

  input.forEach((item) => {
    if (item > 0) ++positiveCount;
    else {
      negativeSumm += item;
    }
  });
  outputArray.push(positiveCount, negativeSumm);
  console.log (outputArray)
  return outputArray;
}
countSum(testArray);


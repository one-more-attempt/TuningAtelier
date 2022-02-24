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



//javascript.ru
//return length of string array
console.clear();
let arr= ["Есть", "жизнь", "на", "Марсе"];
console.log (arr.map((item,indx, arr)=>item.length))



//CODEWARS 1 (string/array methods)
// It should look like this: Sam Harris => S.H; patrick feeney => P.F
function abbreviateFullName (fullName){
const splittedName = fullName.split(' ');
return(`${splittedName[0].slice(0,1)}.${splittedName[1].slice(0,1)}`.toUpperCase());
}
console.log(abbreviateFullName('Sam Harris'));



//CODEWARS 2 (array methods)
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
    else  negativeSumm += item
  });
  outputArray.push(positiveCount, negativeSumm);
  console.log (outputArray)
  return outputArray;
}
countSum(testArray);



//codewars 3 (reduce)
//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function arrayReduceMultiply (inputArray){
   return  inputArray.reduce ((prev, curr)=> {return (prev*curr)},1)
 }
console.log (arrayReduceMultiply([1,2,3,4]))



//codewars 4 (array methods)
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
function DNAComplemets (inputDNA){
  const complements = {
    A: "T",
    T: 'A',
    C : "G",
    G: 'C',
  };
  return inputDNA.toUpperCase().
  split('').map ((item, index, array)=> complements[item]).join('')
}
console.log (DNAComplemets ('ATTGC'))



//using replace
function DNAComplemetsUsingReplace (inputDNA){
  return inputDNA.toLowerCase().replace(/a/g, "T").replace(/t/g, "A")
    .replace(/c/g, "G").replace(/g/g, "C")
}
console.log (DNAComplemetsUsingReplace ('ATTGC'))



//codewars 5
//усреднить значения в каждом элементе 
let matrix =[
  [ [123, 231, 12], [56, 43, 124] ],
  [ [78, 152, 76], [64, 132, 200] ]
 ]
 function RGB (matrix){
  return matrix.map (row => row.map(itemInRow=>
      Array (3).fill(Math.round (itemInRow.reduce((prev,next)=>prev+next,0)/3))   ))
    }
console.log (RGB(matrix))



//codewars
//sum of elements using map method
function Summ (array){
  return array.reduce ((prev,next)=>prev+next,0)
}
console.log(Summ([1,2,3,4,5]))



//Coding in function isolateIt. function accept 1 parameters arr, it's a string array.
//  Your task is to put a character "|" into the middle of each element.
const inputStringArray  =["1234","12345"];
function AddSlashInString (input){
return input.map ((item, index, array)=>{
  //return item.slice(0, item.length/2)+'|'+ item.slice(-item.length/2)
  if (item.length%2 == 1) {
    return item.slice(0, item.length/2-0.5)+'|'+ item.slice(item.length/2+0.5)
  }
  else {return item.slice(0, item.length/2)+'|'+ item.slice(item.length/2)}
})
}
console.log (AddSlashInString(inputStringArray))
console.log (inputStringArray)



//codewars
//group by 3 items
const testGroup = [1,2,3,4,5,6,7,8,9];
console.log (testGroup)
function groupArray(inputArray){
  let resArray=[]
  for (let index = 0; index < inputArray.length; index+=3) {
    resArray.push(inputArray.slice(index,index+3).reduce ((prev, curr)=> prev+curr,0)) 
    //resArray.push (inputArray[index]+inputArray[index+1]+inputArray[index+2]
  }
  return resArray
}
console.log (groupArray(testGroup))



// На входе массив чисел, например: arr = [1,2,3,4,5].
// Иначе говоря, вызов getSums(arr) должен возвращать
//  новый массив из такого же числа элементов, в котором на каждой позиции
//   должна быть сумма элементов arr до этой позиции включительно.
let NumArray = [ 1, 2, 3, 4, 5, ,6,7,8 ];
function getSums (inputArray){
  let resultArray =[];
  inputArray.reduce((prev, curr)=> {resultArray.push(prev+curr); return (prev+curr)},0)
  return resultArray;
}
console.log (getSums(NumArray))



// Напишите функцию camelize(str), 
// которая преобразует строки вида «my-short-string» в «myShortString».
let inp = 'my-short-string';
function camelizeMe(text){
  return text.split ('-').map((item)=>{return item[0].toUpperCase()+item.slice(1)}).join('')
}
console.log (camelizeMe(inp))



// filterRange(arr, a, b), которая принимает массив arr,.
//  ищет в нём элементы между a и b и отдаёт массив этих элементов.
function findBetween (inputArray, a,b){
  return inputArray.filter ((item,index,array)=>(item>=a)&&(item<=b))
}
console.log (findBetween([1,2,3,4,5,6,7,8],3,5))



//Напишите функцию filterRangeInPlace(arr, a, b), 
// которая принимает массив arr и удаляет из него
//  все значения кроме тех, которые находятся между a и b
console.clear()
const inputNumArr = [1,2,3,4,5,6,7,8];
function findBetweenOnPlace (inputArray, a,b){
let tmpArr = inputArray.filter ((item,index,array)=>(item>=a)&&(item<=b))
inputArray.splice (0,inputArray.length,...tmpArr)
}
console.log (findBetweenOnPlace(inputNumArr,3,5))
console.log (inputNumArr)



//----Сортировать в порядке по убыванию------------------/
let arrsort = [ 12,6,7,15];
function compareNumeric(a, b) {
  if ((a > b)) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
console.log (arrsort.sort(compareNumeric))



//----Скопировать и отсортировать массив--------
const tstArr = ["HTML", "JavaScript", "CSS"]
function copySortedArray (inputArray){
  let outputArray  = inputArray.slice();
  outputArray.sort();
  return outputArray
}
console.log (tstArr)
console.log (copySortedArray(tstArr))



//---преобразовать в массив имен------------------------------------
let vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 25 };
let petya = { name: "Петя", surname: "Иванов", id: 2, age: 18};
let masha = { name: "Маша", surname: "Петрова", id: 3, age: 39 };
let users = [ vasya, petya, masha ];

let namesArray = users.map ((item)=>item.name);
console.log (namesArray)



//-------переобразовать в объект---------------
//Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
// где fullName – состоит из name и surname.
let usersArray = users.map((item)=>{ 
  return {id: item.id, fullName: item.name+' '+item.surname , age: item.age}
})
console.log(usersArray);



///Напишите функцию sortByAge(users), которая принимает массив объектов со
//свойством age и сортирует их по нему.
 function ObjectsSortByNum(inputObjectArray){
    const compareObjectNames = (a, b) => {
    if (a.age > b.age) return 1;
    if (a.age == b.age) return 0;
    if (a.age < b.age) return -1;
  }
  return inputObjectArray.sort (compareObjectNames)
 }
 console.log (ObjectsSortByNum(usersArray))



 //получить средний возрасть из массива оббъектов
function midddleAge (inputObjectArray){
 return (inputObjectArray.reduce ((prev,curr)=>(prev+curr.age), 0)
 /inputObjectArray.length).toFixed(1)
};
console.log (midddleAge(usersArray))



//вернуть массив содержащий только неповторяющиеся эллементы
let stringsArray = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function getUniqueOnly (inputArray){
      //1st var
      // let tmpArr = [];
      // inputArray.forEach ((item)=>{
      //   if (!tmpArr.includes(item,0)) {tmpArr.push(item)}})
      //   return tmpArr

    //2nd var
    return inputArray.filter ((item,index)=>{return index === inputArray.indexOf(item)})
  }
//4th var
// let outArrayFromSet = [...new Set (stringsArray)]
// console.log (outArrayFromSet) 
console.log (getUniqueOnly(stringsArray))



///----дуструктуризация массивов
let dArr = ["SRG", "ECHO", , "1more_attempt", "chasing_youth"]
let [name, surname, typeofuser = 'guest', ...rest] = dArr
console.log (name, surname, typeofuser, rest)



//Функции, аргументы функции, передача параметров, функции-обёртки


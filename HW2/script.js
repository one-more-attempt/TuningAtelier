// найти количество байт в size.
const inputBlock = document.querySelector(".input-block");
let postfix = document.querySelector(".select-postfix");
let resultBlock = document.querySelector(".result-block");
//обновляем если не в фокусе
inputBlock.addEventListener("mouseleave", updateBlock);

//обновляем результат при изменении в input
function updateBlock() {
  inputBlockValue = inputBlock.value;
  let resultInBytes;
  postfixValue = postfix.value;

  if (postfixValue == 1) {
    resultInBytes = inputBlockValue * 1024;
  }
  if (postfixValue == 2) {
    resultInBytes = inputBlockValue * 1048576;
  }
  if (postfixValue == 3) {
    resultInBytes = inputBlockValue * 1073741824;
  }
  resultInBytesString = `${resultInBytes} bytes`;
  if (resultInBytes > 0) {
    resultBlock.innerHTML = resultInBytesString;
  } else {
    resultBlock.innerHTML = "";
  }
}

// Отсортируйте массив методом пузырьков. Sort() не использовать
const inputArrayBlock = document.querySelector(".input-array");
const outputArrayBlock = document.querySelector(".output-array");
const sortButton = document.querySelector(".bubble-sort-button");

function arrayBubbleSort(inputArray) {
  let outputArray = inputArray;
  //количество проходов равно количеству элементов массива
  for (let j = 0; j < outputArray.length; j++) {
    // проверяем до предпоследнего элемента (основной цикл перестановки)
    //каждый раз проверяем меньше пар (за вычетом уже отсортированных)
    for (let i = 0; i < outputArray.length - 1 - j; i++) {
      //если элемент больше другого меняем местами
      if (outputArray[i] > outputArray[i + 1]) {
        const tmp = outputArray[i + 1];
        outputArray[i + 1] = outputArray[i];
        outputArray[i] = tmp;
      }
    }
  }
  return (outputArrayBlock.innerHTML = outputArray);
}

sortButton.onclick = () => {
  const testArr = Array(65)
    .fill(null)
    .map(() => Math.floor(Math.random() * 2000));
  inputArrayBlock.innerHTML = testArr;
  arrayBubbleSort(testArr);
};

//Написать функцию, которая считает факториал числа.
//Т.е. факториал от 3 = 3*2*1 = 6. Факториал от 4 будет 4*3*2*1 = 24.
const getFactorialButton = document.querySelector(".get-factorial");
const factorialInput = document.querySelector(".factorial-input");
const factorialOutputBlock = document.querySelector(".factorial-output");

function getFactorial(inputValue) {
  if (inputValue <= 0) return 0;
  let outputValue = inputValue;
  for (i = inputValue - 1; i > 1; i--) {
    outputValue = outputValue * i;
  }
  factorialOutputBlock.innerHTML = outputValue;
}
getFactorialButton.onclick = () => {
  let factorialInputValue = factorialInput.value;
  getFactorial(factorialInputValue);
};

//шахматная доска
const inputDeskSize = document.querySelector(".desk-size");
const getDeskSize = document.querySelector(".get-desk");
const outputDeskBlock = document.querySelector(".desk-output");

function drowChessDesk(size) {
  if (size % 2 == 0 && size > 0 && size >= 4) {
    let symbol = "#_";
    let tmp = symbol.repeat(size / 2);
    fullLine = `${tmp.split("").join("")}<br>${tmp
      .split("")
      .reverse()
      .join("")}<br>`;
    let output = fullLine.repeat(size / 2);
    return (outputDeskBlock.innerHTML = output);
  } else {
    return;
  }
}

getDeskSize.onclick = () => {
  let inputDeskSizeValue = inputDeskSize.value;
  console.log();
  console.log(drowChessDesk(inputDeskSizeValue));
};

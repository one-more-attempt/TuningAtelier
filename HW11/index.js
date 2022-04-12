const getButton = document.querySelector(".get-button");
const selectTag = document.querySelector(".select-operation");
const firstNumber = document.querySelector(".number-1");
const secondNumber = document.querySelector(".number-2");
const resultString = document.querySelector(".result-string");

const calc = (operation, x, y) => {
  const calcMap = new Map([
    ["plus", (x, y) => x + y],
    ["minus", (x, y) => x - y],
    ["multiply", (x, y) => x * y],
    ["divide", (x, y) => x / y],
  ]);
  return calcMap.get(operation)(+x, +y);
};

getButton.onclick = () => {
  resultString.innerText = "";
  const optionValue = selectTag.value;
  const firstNumberValue = firstNumber.value;
  const secondNumberValue = secondNumber.value;
  resultString.innerText = calc(
    optionValue,
    firstNumberValue,
    secondNumberValue
  );
};

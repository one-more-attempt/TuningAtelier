let a = "";
let b = "";
let mathSign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/"];

const allButtons = document.querySelector(".buttons");
const acButton = document.querySelector(".ac");
const cButton = document.querySelector(".c");
const backspaceButton = document.querySelector(".backspace");
const out = document.querySelector(".result");
let tmp;
const tempOut = document.querySelector ('.temp')
//начальное значение
out.textContent = 0;

const clearAll = () => {
  a = "";
  b = "";
  mathSign = "";
  finish = false;
  out.textContent = 0;
  tempOut.textContent = 0;
};

acButton.onclick = clearAll;
cButton.onclick = clearAll;
backspaceButton.onclick = clearAll;

allButtons.onclick = (event) => {
  //попадание в бордер
  if (!event.target.classList.contains("button")) return;
  //отсеивание кнопок очистки
  if (
    event.target.classList.contains("ac") ||
    event.target.classList.contains("c") ||
    event.target.classList.contains("backspace")
  )
    return;

  //очищаем и ловим символ из тега
  out.textContent = "";
  const key = event.target.textContent;

  //нажали 0-9
  if (digit.includes(key)) {
    if (mathSign === "" && b === "") {
      a = a + key;
      out.textContent = a;
		tempOut.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent += b;
		tempOut.textContent = a + ' '+ " " + mathSign + ' '+ b;
    } else {
      b = b + key;
      out.textContent = b;
		tempOut.textContent = a+" "+ mathSign + " " + b;
    }
    console.log(a, b, mathSign);
    return;
  }

  //нажали +-*/
  if (action.includes(key)) {
    mathSign = key;
    out.textContent = mathSign;
	 tempOut.textContent += ' '+mathSign;
    console.log(a, b, mathSign);
    return;
  }

  //нажата =
  if (key === "=") {
    //если нажато число и +
    if (b === "") b = a;

    switch (mathSign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = +a - +b;
        break;
      case "x":
        a = +a * +b;
        break;
      case "/":
			if (b === '0'){
				out.textContent = "Error!"
				a = '';
				b = '';
				mathSign = '';
				return;
			}
        a = +a / +b;
        break;
    }
    finish = true;
    out.textContent = a;
	 tmp = a;
    console.log(a, b, mathSign);
  }
};

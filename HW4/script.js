// Берём jsonplaceholder. На странице есть инпут и кнопка. В инпут вводим число (номер тудушки), жмём на кнопку.
//  Отправляется запрос за нужной тудушкой. Получаем и отрисовываем на странице
// На страницу выводим тайтл, состояние (там будет булеан), айдишку
const todoInput = document.querySelector(".todo-input");
const resultDiv = document.querySelector(".result");
const submitButton = document.querySelector(".submit");
let todoInputValue;
let tmpResult;

renderCurrentToDo = (todoNumber) => {
  let outputObject = {};

  outputObject.HTTPStatus =
    outputObject.title =
    outputObject.id =
    outputObject.toDoStatus =
      null;
  console.log(outputObject);

  fetch(`https://jsonplaceholder.typicode.com/todos/${todoNumber}`)
    .then((answer) => {
      console.log(answer.status);
      outputObject.HTTPStatus = answer.status;
      console.log(outputObject);
      return answer.json();
    })
    .then((result) => {
      console.log(result);
      outputObject.id = result.id;
      outputObject.title = result.title;
      if (result.completed === true) {
        outputObject.toDoStatus = "Completed";
      } else {
        outputObject.toDoStatus = "In progress";
      }
      console.log(outputObject);
      if (outputObject.HTTPStatus == 200) {
        resultDiv.innerText = `
      Task ID: ${outputObject.id}
			Task description: ${outputObject.title}
			Current Status: ${outputObject.toDoStatus}
			`;
      } else {
        resultDiv.innerText = `HTTP error!`;
      }
    });
};

submitButton.onclick = () => {
  todoInputValue = todoInput.value;
  console.log(todoInputValue);
  if (todoInputValue > 200 || todoInputValue < 1) {
    resultDiv.innerText = `ID ${todoInputValue} is not found`;
    return;
  }
  renderCurrentToDo(todoInputValue);
};

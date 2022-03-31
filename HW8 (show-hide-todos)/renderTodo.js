const todoInput = document.querySelector(".todo-input");
const resultDiv = document.querySelector(".result");
const submitButton = document.querySelector(".submit");
const btn = document.createElement("button");

const renderCurrentTodo = (arrayElement, outputBlock) => {
  const currentTodoDivContainer = document.createElement("div");
  const currentTodoID = document.createElement("p");
  const currentTodoTitle = document.createElement("p");
  const currentTodoStatusBlock = document.createElement("p");
  const currentTodoButton = document.createElement("button");
  const currentTodoStatus = document.createElement("span");

  currentTodoButton.innerText = "DELETE";
  currentTodoID.innerText = `ID: ${arrayElement.id}`;
  currentTodoTitle.innerText = `Title: ${arrayElement.title}`;
  currentTodoStatus.innerText = `${
    arrayElement.completed ? "Completed" : "In Progress"
  }`;
  currentTodoStatus.classList.add(
    `${arrayElement.completed ? "completed" : "in-progress"}`
  );
  currentTodoStatusBlock.innerText = "Status: ";
  currentTodoStatusBlock.append(currentTodoStatus);
  currentTodoButton.classList.add("remove-it");

  currentTodoButton.onclick = () => {
    currentTodoButton.parentElement.remove();
  };

  currentTodoDivContainer.classList.add("current-todo-container");
  currentTodoDivContainer.append(
    currentTodoID,
    currentTodoTitle,
    currentTodoStatusBlock,
    currentTodoButton
  );
  outputBlock.append(currentTodoDivContainer);
};

const RenderToDoList = async (todoAmount) => {
  resultDiv.innerHTML = ``;
  fetch(`https://jsonplaceholder.typicode.com/todos/`)
    .then((result) => result.json())
    .then((responce) => {
      for (let i = 0; i < todoAmount; i++) {
        renderCurrentTodo(responce[i], resultDiv);
      }
    });
};

submitButton.onclick = () => {
  let todoInputValue = todoInput.value;
  RenderToDoList(todoInputValue);
};


const todoList = [{
  name : 'make dinner',
  dueDate : '2023-09-26'

},{
  name : 'wash dishes',
  dueDate : '2023-09-26'

}];


renderTodoList();
function renderTodoList(){

  let todoListHTML = '';
  
  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = `
    <div>  ${name} </div>
    <div>  ${dueDate} </div> 
    <button onclick = " 
      todoList.splice(${i}, 1);
      renderTodoList();
    " class = "delete-todo-button">DELETE</button> 
     `;
    todoListHTML += html;
  }
  
  const a = document.querySelector('.js-todo-list');
  a.innerHTML = todoListHTML;


  
}

document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
  AddTodo();
});

function AddTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate =  dateInputElement.value;
  
  todoList.push({name : name, dueDate : dueDate});

  inputElement.value = '';
  renderTodoList();

}








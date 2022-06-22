import { renderTodoForm, renderTodos } from "./render.js";

function createTodo(name) {
  return {
    name: name,
    done: false
  }
}

function createTodoFromInput() {
  let name = todoInput.value;
  return createTodo(name);
}

var todoList = [];

const app = document.querySelector('#app');
const todos = document.querySelector('#todos');
const todoForm = document.querySelector('#todo-form');

todos.innerHTML = renderTodos(todoList);
todoForm.innerHTML = renderTodoForm();

const todoInput = document.querySelector('#todo-input');

const todoSubmit = document.querySelector('#todo-submit');
todoSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  addTodo();
});

function addTodo() {
  let todo = createTodoFromInput(todoInput);
  todoList.push(todo);
  todos.innerHTML = renderTodos(todoList);
  todoInput.value = '';
}
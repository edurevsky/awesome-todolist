import { renderError, renderTodoForm, renderTodos } from "./render.js";

function createTodo(name) {
  return {
    name: name,
    done: false
  }
}

function createTodoFromInput() {
  let name = todoInput.value;
  if (name.length === 0 || name == null) {
    return null;
  }
  return createTodo(name);
}

var todoList = [];

const app = document.querySelector('#app');
const todos = document.querySelector('#todos');
const todoForm = document.querySelector('#todo-form');

todos.innerHTML = renderTodos(todoList);
todoForm.innerHTML = renderTodoForm();

const todoInput = document.querySelector('#todo-input');

const error = document.querySelector('#error');

const todoSubmit = document.querySelector('#todo-submit');
todoSubmit.addEventListener('click', event => {
  event.preventDefault();
  addTodo();
});

function addTodo() {
  let todo = createTodoFromInput(todoInput);
  if (!todo) {
    error.innerHTML = renderError('Please, type a valid name.');
    return;
  }
  todoList.push(todo);
  update();
}

const update = () => {
  todos.innerHTML = renderTodos(todoList);
  error.innerHTML = '';
  todoInput.value = '';
}
import { Todo } from "../models/todo.js";
import { ErrorView } from "../views/error.js";
import { TodoForm } from "../views/todo-form.js";
import { Todos } from "../views/todos.js";

export class AppController {

  todoList = [];
  todosView = new Todos();
  todoForm = new TodoForm();
  errorView = new ErrorView();

  constructor() {
    document.querySelector('#todo-form').innerHTML = this.todoForm.template();
    this.todos = document.querySelector('#todos');
    this.error = document.querySelector('#error');
    this.todoInput = document.querySelector('#todo-input');
    this.todoSubmit = document.querySelector('#todo-submit');
    this.initFormSubmit();
    this.update();
  }

  initFormSubmit() {
    this.todoSubmit.addEventListener('click', event => {
      event.preventDefault();
      this.addTodo();
    });
  }

  createTodo() {
    let name = this.todoInput.value;
    if (name.length === 0) {
      return null;
    }
    return new Todo(name);
  }

  addTodo() {
    let todo = this.createTodo();
    if (todo == null) {
      this.error.innerHTML = this.errorView.template('Please, type a valid name.');
      return;
    }
    this.todoList.push(todo);
    this.update();
  }

  update() {
    this.todos.innerHTML = this.todosView.template(this.todoList);
    this.error.innerHTML = '';
    this.todoInput.value  = '';
    const swapDone = id => {
      let todo = this.todoList.find(t => t.id == id);
      todo.done = !todo.done;
    }
    const li = document.querySelectorAll('ul li');
    li.forEach(item => {
      item.addEventListener('click', () => {
          swapDone(item.id);
          this.update();
        }
      );
    });
  }
}
import { Todo } from "../models/todo.js";
import { ErrorView } from "../views/error.js";
import { TodoForm } from "../views/todo-form.js";
import { Todos } from "../views/todos.js";

export class AppController {

  todosView = new Todos();
  todoForm = new TodoForm();
  errorView = new ErrorView();

  constructor(todoService) {
    this.todoService = todoService;
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
    this.todoService.addTodo(todo);
    this.update();
  }

  update() {
    this.todos.innerHTML = this.todosView.template(this.todoService.getAll());
    this.error.innerHTML = '';
    this.todoInput.value  = '';

    const todos = document.querySelectorAll('.todo-item');
    if (!todos) {
      return;
    }
    todos.forEach(item => {
      let todo = this.todoService.findById(item.id);
      if (todo && !todo.done) {
        item.addEventListener('click', () => {
            todo.swapDone();
            this.update();
        });
      } else {
        item.addEventListener('click', () => {
          let del = confirm('Delete this todo?');
          if (!del) {
            return;
          }
          this.todoService.deleteById(item.id);
          this.update();
        })
      }
    });
  }
}
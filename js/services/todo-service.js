export class TodoService {

  todoList = [];

  constructor() { }

  getAll() {
    return this.todoList;
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  findById(id) {
    return this.todoList.find(t => t.id == id);
  }

  deleteById(id) {
    this.todoList = this.todoList.filter(element => {
      element.id != id
    });
  }
}
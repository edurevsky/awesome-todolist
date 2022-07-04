export class Todos {

  constructor() { }

  template(list) {
    if (list.length === 0) {
      return `
        <ul id="list">
          <li class="warning empty">Start by adding a todo.</li>
        </ul>
      `;
    }
    return `
      <ul>
        ${list.map(todo => this.todoToHtml(todo)).join('')}
      </ul>
    `;
  }

  /**
   * @private
   */
  todoToHtml(todo) {
    let done = todo.done ? 'done' : 'undone';
    let name = todo.done ? todo.name : todo.name + ' &#10003;';
    return `<li class="todo-item ${done}" id="${todo.id}">${name}</li>`;
  }
}

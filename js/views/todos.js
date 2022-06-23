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
    return `<li class="todo-item ${done}" id="${todo.id}">${todo.name}</li>`;
  }
}


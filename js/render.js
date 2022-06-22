function todoToHtml(todo) {
  let done = todo.done ? 'done' : 'undone';
  return `<li class="${done}">${todo.name} <button class="todo-button">x</button></li>`;
}

export function renderTodos(todos) {
  return `
    <ul>
      ${todos.map(todo => todoToHtml(todo)).join('')}
    </ul>
  `
}

export function renderTodoForm() {
  return `
    <input id="todo-input" type="text"/>
    <button id="todo-submit" type="submit">Save</button>
  `
}
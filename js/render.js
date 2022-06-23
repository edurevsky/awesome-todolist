function todoToHtml(todo) {
  let done = todo.done ? 'done' : 'undone';
  return `<li class="todo-item ${done}" id="${todo.id}">${todo.name}</li>`;
}

export function renderTodos(todos) {
  if (todos.length === 0) {
    return `
      <ul id="list">
        <li class="warning empty">Start by adding a todo.</li>
      </ul>
    `
  }
  return `
    <ul>
      ${todos.map(todo => todoToHtml(todo)).join('')}
    </ul>
  `
}

export function renderTodoForm() {
  let random = 'Warm up the coffee...';
  return `
    <div class="wow">
      <input id="todo-input" type="text" placeholder="${random}"/>
      <button id="todo-submit" type="submit">Add</button>
      <div id="error"></div>
    </div>
  `
}

export function renderError(message) {
  return `<small class="error">${message}</small>`
}
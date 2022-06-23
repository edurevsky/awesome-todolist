
export class TodoForm {

  constructor() { }

  template() {
    let random = 'Warm up the coffee...';
    return `
      <div class="wow">
        <input id="todo-input" type="text" placeholder="${random}"/>
        <button id="todo-submit" type="submit">Add</button>
        <div id="error"></div>
      </div>
    `;
  }
}
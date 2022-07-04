
export class TodoForm {

  constructor() { }

  template() {
    let placeholder = this.getRandomPlaceholder();
    return `
      <div class="wow">
        <input id="todo-input" type="text" placeholder="${placeholder}"/>
        <button id="todo-submit" type="submit">Add</button>
        <div id="error"></div>
      </div>
    `;
  }

  /**
   * @private
   * @returns string
   */
  getRandomPlaceholder() {
    let placeholders = [
      'Warm up the coffee...',
      'Read my e-mails...'
    ];
    return placeholders[Math.floor(Math.random()*placeholders.length)];
  }
}

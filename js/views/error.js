
export class ErrorView {

  constructor() { }

  template(message) {
    return `<small class="error">${message}</small>`;
  }
}
export class Todo {

  constructor(name) {
    this.name = name;
    this.done = false;
    this.id = new Date();
  }

  swapDone() {
    this.done = !this.done;
  }
}
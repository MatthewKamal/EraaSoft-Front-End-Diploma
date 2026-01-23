import { inc } from "./counter.js";
export class todoTasks {
  constructor(content) {
    this.id = inc();
    this.content = content;
    this.isCompleted = false;
    this.createdAt = new Date();
  }
  updateContent(newContent) {
    this.content = newContent;
  }
  markAsCompleted() {
    this.isCompleted = true;
  }
  markAsTodo() {
    this.isCompleted = false;
  }
}

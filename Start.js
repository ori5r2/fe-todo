const TodoList = require("./todoList");
const readline = require("readline");

class Start {
  // Start 생성자
  constructor() {
    this.todoList = new TodoList(); // todolist 생성
    this.rl = readline.createInterface({
      // 콘솔 입출력
      input: process.stdin,
      output: process.stdout,
    });
  }
}

const program = new Start();
program.displayMenu();

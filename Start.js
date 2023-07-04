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

  // 콘솔에서 입력 받는 함수
  displayMenu() {
    this.rl.question("명령하세요: ", (input) => {
      this.handleInput(input.trim());
    });
  }
}

const program = new Start();
program.displayMenu();

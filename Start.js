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

  // 입력받은 명령어 처리하는 함수
  handleInput(input) {
    const args = input.split("$");
    const command = args[0];

    switch (command) {
      case "show":
        this.todoList.show(args[1]);
        break;
      case "add":
        this.todoList.add(args[1], args[2]);
        this.todoList.show("all");
        break;
      case "delete":
        this.todoList.delete(args[1]);
        this.todoList.show("all");
        break;
      case "update":
        this.todoList.update(Number(args[1]), args[2], args[3]);
        this.todoList.show("all");
        break;
      case "close":
        this.rl.close();
        console.log(`프로그램을 종료합니다.`);
        process.exit(1);
      default:
        console.log(`show, add, delete, update, close 의 명령어를 입력하시오.`);
        break;
    }

    console.log();
    this.displayMenu();
  }
}

(function () {
  // run main program
  const program = new Start();
  program.displayMenu();
})();

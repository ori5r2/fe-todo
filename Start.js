const TodoList = require("./todoList");
const readline = require("readline");

class Start {
  constructor() {
    this.todoList = new TodoList();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  displayMenu() {
    this.rl.question("명령하세요: ", (input) => {
      this.handleInput(input.trim());
    });
  }

  handleInput(input) {
    const command = input.slice(0, input.indexOf("$"));
    const args = input.slice(input.indexOf("$") + 1, input.length);

    switch (command) {
      case "show":
        this.todoList.show(args);
        break;
      case "add":
        const name = args.slice(0, args.indexOf("$"));
        const tags = args.slice(args.indexOf("$") + 1, args.length);
        this.todoList.add(name, tags);
        break;
      case "delete":
        const id = Number(args);
        this.todoList.delete(id);
        break;
      case "update":
        const id2 = Number(args.slice(0, args.indexOf("$")));
        const status = args.slice(args.indexOf("$") + 1, args.length);
        this.todoList.update(id2, status);
        break;
      default:
    }

    console.log();
    this.displayMenu();
  }
}

const program = new Start();
program.displayMenu();

const readline = require("readline");

class TodoList {
  constructor() {
    this.todo_list = [];
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  displayConsole() {
    this.rl.question("명령하세요: ", (answer) => {
      this.add("study-javascript", ["favorite"]);
      this.show("all");

      this.displayConsole();
    });
  }

  show(status) {
    if (status == "all") {
      const cnt = { todo: 0, doing: 0, done: 0 };
      this.todo_list.map((x) => {
        if (x.status == "todo") cnt.todo += 1;
        else if (x.status == "doing") cnt.doing += 1;
        else if (x.status == "done") cnt.done += 1;
      });

      console.log(
        `현재상태: todo: ${cnt.todo}, doing: ${cnt.doing}, done: ${cnt.done}`
      );
    } else {
    }
  }

  add(name, tags) {
    const id = this.todo_list.length + 1;

    this.todo_list = [
      ...this.todo_list,
      {
        name: name,
        tags: tags,
        status: "todo",
        id: id,
      },
    ];
  }

  delete(id) {
    this.todo_list;
  }
}

const myTodoList = new TodoList();

myTodoList.displayConsole();

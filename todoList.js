class TodoList {
  constructor() {
    this.todo_list = [
      {
        name: "자바스크립트 공부하기",
        tags: ["programming", "javascript"],
        status: "todo",
        id: 12123123,
      },
      {
        name: " 그림 그리기",
        tags: ["picture", "favorite"],
        status: "doing",
        id: 312323,
      },
    ];
  }

  show(status) {
    if (status == "all") {
      const cnt = { todo: 0, doing: 0, done: 0 };
      this.todo_list.map((todo) => {
        if (todo.status === "todo") cnt.todo += 1;
        else if (todo.status === "doing") cnt.doing += 1;
        else if (todo.status === "done") cnt.done += 1;
      });

      console.log(
        `현재상태: todo: ${cnt.todo}, doing: ${cnt.doing}, done: ${cnt.done}`
      );
    } else {
      let arr = [];
      this.todo_list.map((todo) => {
        if (todo.status === status) {
          arr.push({ name: todo.name, id: todo.id });
        }
      });

      console.log(`${status}리스트 :  총${arr.length}건 : `);
      arr.forEach((x) => {
        console.log(`${x.name}, ${x.id}`);
      });
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
    console.log(`${name} 1개가 추가됐습니다.(id : ${id})`);
    this.show("all");
  }

  delete(id) {
    this.todo_list = this.todo_list.filter((x) => {
      if (x.id === id) {
        console.log(`${x.name} ${x.status}가 목록에서 삭제됐습니다`);
      }
      return x.id !== id;
    });
    this.show("all");
  }

  update(id, status) {
    this.todo_list = this.todo_list.map((x) => {
      if (x.id === id) {
        x.status = status;
        console.log(`${x.name} ${status}으로 상태가 변경됐습니다`);
      }
      return x;
    });
    this.show("all");
  }
}

module.exports = TodoList;

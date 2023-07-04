class TodoList {
  // TodoList 생성자
  constructor() {
    this.todo_list = [
      // todo_list 초기값
      // future work : json으로 불러오기
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

  // TodoList 보여주는 함수
  show(status) {
    if (status == "all") {
      // 전체 todo의 상태 보여주기
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
      // status에 해당하는 todo 보여주기
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
}

module.exports = TodoList;

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
}

module.exports = TodoList;

const { checkList, splitTag, status_list } = require("./util");

class TodoList {
  // TodoList 생성자
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
    this.status_list = status_list;
  }

  // TodoList 보여주는 함수
  show(status) {
    if (status == "all") {
      // 전체 todo의 상태 보여주기
      const cnt = {};
      for (let idx of this.status_list) {
        cnt[idx] = 0;
      }

      this.todo_list.forEach((todo) => {
        cnt[todo.status] += 1;
      });

      console.log(
        `현재상태: todo: ${cnt.todo}, doing: ${cnt.doing}, done: ${cnt.done}`
      );
    } else {
      // 상태 체크하기
      if (!checkList("status", status)) return;

      // status에 해당하는 todo 보여주기
      let arr = this.todo_list.filter((todo) => {
        if (todo.status === status) return todo;
      });

      let list = [];
      arr.forEach((x) => {
        list.push(`'${x.name}, ${x.id}'`);
      });
      list.join(", ");
      console.log(`${status}리스트 :  총${arr.length}건 : ${list}`);
    }
  }

  // TodoList에 todo 추가
  add(name, tags) {
    const id = this.todo_list.length + 1;

    // tag 체크
    if (!checkList("tags", tags)) return;
    const tag_arr = splitTag(tags);

    this.todo_list = [
      ...this.todo_list,
      {
        name: name,
        tags: tag_arr,
        status: "todo",
        id: id,
      },
    ];
    console.log(`${name} 1개가 추가됐습니다.(id : ${id})`);
  }

  delete(id) {
    if (id == "all") {
      this.todo_list = [];
    } else {
      // TodoList에 존재하는 id값에 해당하는 todo 삭제
      id = Number(id);
      if (!checkList("id", id, this.todo_list)) return;

      this.todo_list = this.todo_list.filter((x) => {
        if (x.id === id)
          console.log(`${x.name} ${x.status}가 목록에서 삭제됐습니다`);

        return x.id !== id;
      });
    }
  }

  // TodoList에 존재하는 id값에 해당하는 todo 삭제
  update(id, key, value) {
    if (!checkList("id", id, this.todo_list) || !checkList(key, value)) return;

    this.todo_list = this.todo_list.map((x) => {
      if (x.id === id) {
        let old_value = x[key];

        if (key == "tags") {
          if (!checkList(key, value)) return;
          const tag_arr = this.splitTag(value);
          x[key] = tag_arr;
          value = tag_arr;
        } else {
          x[key] = value;
        }

        console.log(`${old_value}(이)가 ${value}으로 변경됐습니다`);
      }
      return x;
    });
  }
}

module.exports = TodoList;

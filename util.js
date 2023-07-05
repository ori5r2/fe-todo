const status_list = ["todo", "doing", "done"];
const key_list = ["name", "tags", "status"];
const regexp = /\[|\]|\'/g;

// tags를 string에서 배열로 분리하는 함수
function splitTag(tags) {
  return tags.replace(regexp, "").split(",");
}

// todo_list에 해당하는 id가 있는지 확인하는 함수
function checkId(id, todo_list) {
  let isId = false;
  todo_list.forEach((x) => {
    if (x.id === id) {
      isId = true;
    }
  });
  if (!isId) console.log(`${id}에 해당하는 todo가 없습니다.`);
  return isId;
}

// tags가 규칙에 맞는지 확인하는 함수
function checkTags(tags) {
  if (tags[0] !== "[" || tags[tags.length - 1] !== "]") return false;
  return true;
}

// status가 'todo', 'doing', 'done'인지 확인하는 함수
function checkStatus(cur_status) {
  if (!status_list.includes(cur_status)) {
    console.log(`잘못된 상태 입력입니다.`);
    return false;
  }
  return true;
}

// 예외사항 처리하는 함수
// id, key, tags, status
function checkList(key, value, todo_list) {
  if (key === "id") return checkId(value, todo_list);

  if (!key_list.includes(key)) {
    console.log(`잘못된 키 입력입니다.`);
    return false;
  }

  switch (key) {
    case "status":
      return checkStatus(value);
    case "tags":
      return checkTags(value);
    default:
      return true;
  }
}

module.exports = {
  checkList,
  splitTag,
  status_list,
};

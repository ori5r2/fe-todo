# 콘솔 TODO

### 🗓 2023.07.03 ~ 2022.07.06

### 💻 [ori5r2]() & [startartart]()

---

## 기능 요구사항

1. todoList.js : todoList 출력 및 커맨드 실행
2. start.js : todoList 입력 및 커맨드 분리
3. listData.js : todoList 읽기/쓰기

- `show${status}`

  - `all` : 현재상태 보여주기
    > `현재상태 : todo: n개, doing: n개, done: n개`
  - `todo` : `status`가 todo인 리스트 보여주기
  - `doing` : `status`가 doing인 리스트 보여주기
  - `done` : `status`가 done인 리스트 보여주기
    > `{status}리스트 : 총 n건 : '[name], [id]'`

- `add${name}$[...tag]` : todoList에 todo 추가

  - `tag` - none : 빈 리스트 반환
  - `status` - default : todo
  - `id` - 일단은 순차적으로 인덱스 상향하여 저장
    > `study-javascript 1개가 추가됐습니다.(id : 7788)`

- `delete${id}|{cmd}` : todoList에 todo 삭제

  - `id` - todoList에서 id에 해당하는 todo 삭제
  - `cmd == all` - todoList 전체 삭제
    > `study-javascript todo가 목록에서 삭제됐습니다`

- `update${id}${status}` : id값에 해당하는 todo의 status 변경

  > `iOS공부하기 doing으로 상태가 변경됐습니다`

- `exception`
  > `올바르지 않은 명령입니다.`

## 추가 기능

    1. 데이터 저장 (`fs`모듈)

## 개선 사항

    1. id값 -> uuid
    2. delete 명령어에 전체 삭제 옵션 제공 (clear)
    3. update 명령어 옵션 세부화
    4. 익셉션 추가

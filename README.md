# 콘솔 TODO

🗓 2023.07.03 ~ 2022.07.05

💻 노민주, 박병권

---

1. todoList.js : todoList 출력 및 커맨드 실행
2. start.js : todoList 입력 및 커맨드 분리
3. util.js : 정규표현식 및 exception 처리

## 기능 요구사항

1. `show${status}`

- `all` : 현재상태 보여주기

  > `현재상태 : todo: n개, doing: n개, done: n개`

- `todo` : `status`가 todo인 리스트 보여주기
- `doing` : `status`가 doing인 리스트 보여주기
- `done` : `status`가 done인 리스트 보여주기

  > `{status}리스트 : 총 n건 : '[name], [id]'`

2. `add${name}$[...tag]` : todoList에 todo 추가

- `tag` - none : 빈 리스트 반환
- `status` - default : todo
- `id` - 일단은 순차적으로 인덱스 상향하여 저장

  > `study-javascript 1개가 추가됐습니다.(id : 7788)`

3. `delete${id}|{cmd}` : todoList에 todo 삭제

- `id` - todoList에서 id에 해당하는 todo 삭제
- `cmd == all` - todoList 전체 삭제

  > `study-javascript todo가 목록에서 삭제됐습니다`

4. `update${id}${key}${value}` : id에 해당하는 todoList의 key에 있는 value를 변경

- key : status, name, tags
  > `done(이)가 doing으로 변경됐습니다`

5. `close` : 프로그램 종료

6. `exception`

- command : 올바른 명령을 입력하지 않은 경우

  > `show, add, delete, update, close 의 명령어를 입력하시오.`

- id : todoList에 존재하지 않는 id인 경우

  > `id에 해당하는 todo가 없습니다.`

- status: "todo", "done", "doing"외 상태인 경우

  > `잘못된 상태 입력입니다.`

- tags: tags의 양식에 어긋나는 경우
  > `잘못된 태그 입력입니다.`

## 개선 사항

- [x] 프로그램 종료
- [x] delete 명령어에 전체 삭제 옵션 제공 (clear)
- [x] update 명령어 옵션 세부화
- [x] 익셉션 추가

# 콘솔 TODO

### 🗓 2023.07.03 ~ 2022.07.06
### 💻 [ori5r2]() & [startartart]()
<br>

-----------
## 기능 요구사항
1. todoList.js : todo 리스트를 보관
2. start.js : todo 리스트 실행
3. todo.js : todo 읽기, 쓰기

- `show${status}` 
    - all : 현재상태 보여주기 
        - `현재상태 : todo: n개, doing: n개, done: n개`
    - todo : `status`가 todo인 리스트 보여주기
        - `todo리스트 : 총 n건 : '[name], [id]'`
    - doing : `status`가 doing인 리스트 보여주기
    - done : `status`가 done인 리스트 보여주기
    - 그 외 (예외 사항): "다른 명령어를 입력하시오" 
    å
- `add${name}$[...tag]` : todoList에 todo 추가
    - `tag` - none : 빈 리스트 반환
    - `status` - default : todo
    - `id` - 일단은 순차적으로 인덱스 상향하여 저장

- `delete${id}|{cmd}` : 
    - `cmd == all` - todoList 전체 삭제
    - `id` - todoList에서 id에 해당하는 todo 삭제
    - 그 외 (예외 사항): 해당되지 않는 id가 없을 경우 올바르지 않은 id 입니다.

- `update${id}${status}` : id값에 해당하는 todo의 status 변경

# Todo App

1. 프로젝트 설계

1) 상태 데이터 (할일)
   [
   {
   uid : string(날짜),
   title :string(제목),
   body:string(내용),
   done:boolean(수행여부),
   stiker: string(스티커 이미지),
   date : string(날짜),
   }
   ]
2) 기능 정의 
-추가 기능 
addTodo(title:string, body:string, date:string, stiker:string, done:boolean=false) void(return 값 없어도 됨. 돌려받을 일 없어서.)
-수정 기능 updateTodo(todo:TodoType) void 
-삭제 기능 deleteTodo(todo:TodoType) void 
-필터 기능 sortTodo(sortType:string) Array<TodoType> 
-목록(보기) 기능 없음.

3. 컴포넌트 종류
   **데이터의 상태를 전담해서 관리해줄 컴포넌트
   (1) 상태 업데이트 역할(제어/컨트롤 컴포넌트) src/AppContainer.tsx(상태관리(CRUD)전담)

   (2) 상태 보여주기 역할(비제어/프레젠트 컴포넌트)
   src/App.tsx (페이지 컴포넌트)
   components/Input.tsx(할일 입력 컴포넌트)
   components/List.tsx(할일 목록 출력 컴포넌트) > components/ListItem.tsx(할일 목록 컴포넌트)

(3) src > style 폴더
style.ts

import { useState } from "react";
//  상태관리를 위한 객체복사 라이브러리
import produce from "immer";
import App from "./App";

export type TodoType = {
    uid: string;
    title: string;
    body: string;
    done: boolean;
    stiker: string;
    date: string;
};

const AppContainer = () => {
    // 상태 데이터
    const initData: Array<TodoType> = [
        {
            uid: "1",
            title: "할일1",
            body: "할일 내용1",
            done: false,
            stiker: "1",
            date: "2023-02-27",
        },
        {
            uid: "2",
            title: "할일2",
            body: "할일 내용2",
            done: false,
            stiker: "2",
            date: "2023-02-27",
        },
        {
            uid: "3",
            title: "할일3",
            body: "할일 내용3",
            done: false,
            stiker: "3",
            date: "2023-02-27",
        },
        {
            uid: "4",
            title: "할일4",
            body: "할일 내용4",
            done: false,
            stiker: "4",
            date: "2023-02-27",
        },
    ];
    // 화면의 내용을 갱신해 주기 위해서 state Hook 사용
    const [todoList, setTodoList] = useState<Array<TodoType>>(initData);
    // 추가 기능
    const addTodo = (
        uid: string,
        title: string,
        body: string,
        done: boolean,
        stiker: string,
        date: string
    ) => {
        // 새로운 todoType 생성
        // 기존 todoList state 를 복사하고,
        // 추가 todoList 를 합쳐주고
        // todoList state 를 업데이트 한다.
        // 이 때, immutable 을 유지한다.
        // 필수 라이브러리로 Immer 가 있다.
        // Immer 는 객체의 불변성을 유지하는 것으로
        // 업무에서 필수로 활용한다.
        // 즉, {...todoList,newTodo}를 대신한다.
        let newTodoList = produce(todoList, (draft) => {
            draft.push({
                uid: uid,
                title: title,
                body: body,
                date: date,
                stiker: stiker,
                done: false,
            });
        });
        // state 업데이트 : 화면 갱신
        setTodoList(newTodoList);
    };
    // 수정 기능
    const updateTodo = (todo: TodoType) => {};
    // 삭제 기능
    const deleteTodo = (todo: TodoType) => {};
    // 정렬 기능
    const sortTodo = (sortType: string) => {};
    return (
        <div>
            <App
                todoList={todoList}
                addTodo={addTodo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                sortTodo={sortTodo}
            />
        </div>
    );
};

export default AppContainer;

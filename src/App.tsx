import { TodoType } from "./AppContainer";

type propsType = {
    todoList: Array<TodoType>;
    addTodo: (
        uid:string,
        title: string,
        body: string,
        done: boolean,
        stiker: string,
        date: string,
    ) => void;
    updateTodo: (todo: TodoType) => void;
    deleteTodo: (todo: TodoType) => void;
    sortTodo: (sortType: string) => void;
};

function App(props: propsType) {
    return <div className="App">App</div>;
}

export default App;

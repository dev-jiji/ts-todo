import { TodoType } from "./AppContainer";
import Input from "./components/Input";
import List from "./components/List";
type propsType = {
    todoList: Array<TodoType>;
    addTodo: (
        uid: string,
        title: string,
        body: string,
        done: boolean,
        sticker: string,
        date: string
    ) => void;
    updateTodo: (todo: TodoType) => void;
    deleteTodo: (todo: TodoType) => void;
    sortTodo: (sortType: string) => void;
};
function App(props: propsType) {
    return (
        <div className="App">
            <div className="inner">
                <h1>TodoList App</h1>
            </div>
            <Input
                addTodo={props.addTodo}
                updateTodo={props.updateTodo}
                deleteTodo={props.deleteTodo}
            />
            <List todoList={props.todoList} />
        </div>
    );
}

export default App;

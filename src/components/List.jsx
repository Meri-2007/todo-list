import { ToDoItem } from "./ToDoItem";

export const List = ({ todos, todoDelete, completeTask }) => {
    return (
        <div>
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <ToDoItem key={index} 
                        index={index}
                        todo={todo}
                        todoDelete={todoDelete}
                        completeTask={completeTask} />
                ))}
            </div>        
        </div>
    );
};

import { useState } from "react";
import { AddToDo } from "./AddToDo";
import { List } from "./List";

export const ToDoList = () => {
    const [todos, setTodo] = useState([]);
    const [error, setError] = useState("");

    const addToDo = (newToDo) => {
        if (newToDo.trim() !== "") {
            const newTask = {
                text: newToDo,
                id: Date.now(),
                completed: false 
            };
            setTodo([...todos, newTask]);
            setError("");
        } else {
            setError("Please fill the field");
        }
    };

    const deleteTask = id => {
        const todo = todos.filter(item => item.id !== id);
        setTodo(todo);
    };

    const completeTask = id => {
        setTodo(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="todo-container">
            <AddToDo addTodo={addToDo} />
            <List todos={todos}
                todoDelete={deleteTask}
                completeTask={completeTask} />
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

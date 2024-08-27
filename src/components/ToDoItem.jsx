export const ToDoItem = ({ todo, todoDelete, completeTask }) => {
    let textDecoration = 'none';
    if (todo.completed) { 
        textDecoration = 'line-through';
    }

    return (
        <li style={{ textDecoration }}>
            <span>
                {todo.text}
            </span>
            <button className="complete" onClick={() => completeTask(todo.id)}>
                {todo.completed ? 'Cancel' : 'Complete'}
            </button>
            <button className="delete" onClick={() => todoDelete(todo.id)}>Delete</button>
        </li>
    );
};

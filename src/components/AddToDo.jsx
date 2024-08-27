import { useState } from "react"

export const AddToDo=({ addTodo})=>{
    const [task,setTask]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask("");
      };
    return <>
         <form onSubmit={handleSubmit}>
            <div>
                <input type="text"
                placeholder="add new task"
                value={task}
                onChange={(e) => setTask(  e.target.value )}
                />
            </div>
            <div>
                 <button type="submit" className="todo-button"> Add</button>
            </div>
        </form>
    </>
}

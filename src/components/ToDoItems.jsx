import React from 'react'

export default function ToDoItems({ToDo, ToggleToDo}) {
    const {id, task, completed}= ToDo;
    const HandleToDoClic = () =>{
        ToggleToDo(id);
    }
    return <li> 
        <input type="checkbox" checked={completed} onChange={HandleToDoClic}/>
         {task} 
        </li>
    
}

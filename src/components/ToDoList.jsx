import React from 'react'
import ToDoItems from './ToDoItems'

export default function ToDoList({ToDoes, ToggleToDo}) {
    return (
        <ul>
            {ToDoes.map((ToDo)=> (
                <ToDoItems key={ToDo.id} ToDo={ToDo} ToggleToDo={ToggleToDo} />
            ))}
        </ul>
    )
}

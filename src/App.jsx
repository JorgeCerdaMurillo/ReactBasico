import React,{Fragment, useState, useRef, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ToDoList from "./components/ToDoList"

const KEY='ToDoApp.ToDoes'

export default function App() {
    const [ToDoes, SetToDoes] = useState([
        {id: 1, task: "Tarea 1", completed: false},
    ])
    const ToDoTaskRef = useRef();

    useEffect(() => {
        const StoredToDoes = JSON.parse(localStorage.getItem(KEY));
        if (StoredToDoes){
            SetToDoes(StoredToDoes);
        }
    }, [])
    useEffect(() => {
        localStorage.setItem(KEY,JSON.stringify(ToDoes))

    }, [ToDoes]);

    const ToggleToDo=(id)=>{
        const NewToDoes=[...ToDoes];
        const ToDo=NewToDoes.find((ToDo)=>ToDo.id==id);
        ToDo.completed = !ToDo.completleted;
        SetToDoes(NewToDoes);
    }
    const handleToDoAdd = () => {
        const task=ToDoTaskRef.current.value;
        if(task=='') return;
        SetToDoes((PrevToDoes) => {
            return [...PrevToDoes,{id: uuidv4(), task, complete: false}]
        });
        ToDoTaskRef.current.value = null;
    }
    
    const HandleClearAll = () => {
        const NewToDoes=ToDoes.filter((ToDo)=>!ToDo.completed)
        SetToDoes(NewToDoes);
    }

    return (
        <Fragment>  
            <ToDoList ToDoes={ToDoes} ToggleToDo={ToggleToDo}/ >
            <input ref= {ToDoTaskRef} type="text" placeholder="Nueva Tarea" />
            <button onClick={handleToDoAdd}>➕</button>
            <button onClick={HandleClearAll}>🗑️</button>
            <div>Te quedan {ToDoes.filter((ToDo)=>!ToDo.completed).length} tareas por terminar</div>
        </Fragment>


    )
}

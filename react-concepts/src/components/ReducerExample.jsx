import { useState, useReducer } from "react";


const reducer = (todos, action) => {
    switch (action.type) {
        case "ADD": {
            return [...todos, createNewToDo(action.payload.name)];
        }
        case "REMOVE": {
            return todos.filter(todo=>todo.id!==action.payload.id);
        }
        default:
            return todos;
    }
}

const createNewToDo = (name) => {
    return { id: Date.now(), name: name, complete: false };
}


export const ReducerExample = () => {

    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        dispatch({ type: "ADD", payload: { name: name } });
        setName('');
    }

    return (
        <div>
            <h2>Reducer hook tutorial</h2>
            <p>Used in place of useState to manage complex state scenario</p>
            <form onSubmit={submitHandler}>
                <input type="text" value={name} onChange={e => { setName(e.target.value) }} name="name" />
            </form>
            <div>
                <h4>List of todos</h4>
            </div>
            <ul>
                {todos.map(todo => {
                    return <li key={todo.id}  onClick={()=>dispatch({type:"REMOVE",payload:{id:todo.id}})}>{todo.name}</li>
                })}
            </ul>
        </div>
    )
}
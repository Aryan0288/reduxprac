import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo,removeTodo,updateTodo } from '../Reducers/todo/todoSlice';

function AddTodo() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const todo=useSelector(state=>state.todos);
    const summitForm = (event) => {
        event.preventDefault();
        if (task.length > 0) {
            dispatch(addTodo(task));
            setTask('');
        }
    }
    // console.log(task)
    return (
        <div>
            <form onSubmit={summitForm} >
                {/* <label >Task </label>  */}
                <input type='text' value={task} onChange={(event) => setTask(event.target.value)} />
                <button>Add</button>
            </form>


            <ul style={{ listStyle: "none" }}>
                {
                    todo.map((ele) => {
                        return (
                            <div style={{ display: "flex", gap: "15px" }}>
                                <li key={ele.id}>{ele.text}</li>
                                <button onClick={() => dispatch(removeTodo(ele.id))} style={{ padding: "2px 4px", margin: "4px" }}>delete</button>
                                <button onClick={() => dispatch(updateTodo({id:ele.id,newText:task}))} style={{ padding: "2px 4px", margin: "4px" }}>update</button>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AddTodo
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeTodo,updateTodo } from "../Reducers/todo/todoSlice";
export const TodoList = () => {
    const todo = useSelector(state => state.todos)
    const dispatch=useDispatch();

    return (
        <div>
            {/* <h2>todoList</h2> */}

            

        </div>
    )
}
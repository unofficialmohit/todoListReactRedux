import React from 'react'
import {useDispatch} from "react-redux";
import { addTodo } from '../features/todo/todoSlice';
function AddTodo({input,setInput}) {
const dispatch=useDispatch();

function handleSubmit(e){
e.preventDefault();
if(input=="")
{
    alert("INVALID INPUT");
    return;
}
dispatch(addTodo(input))
setInput('');
}
  return (
    <div>
        <form onSubmit={handleSubmit} className='user-form'>
        <div style={{width:"100%",textAlign:"center"}}><h1>Add Todo</h1></div>
            <input type="text"
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            />
        <button type='submit'>ADD NOTE</button>
        </form>
   </div>
  )
}

export default AddTodo;
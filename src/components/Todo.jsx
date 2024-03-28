import {useDispatch,useSelector} from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import {updateTodo} from "../features/todo/todoSlice";
function Todo({input}){
    const todos=useSelector(state=>state.todos);
    const dispatch=useDispatch(); 
    return(<div>
        <ul>
            {todos.map((data)=>{
                return(<li key={data.id}>
                    <div>{data.text}</div>
                    <div>
                        <button onClick={(e)=>{input==""?alert("Invalid Input"):dispatch(updateTodo({id:data.id,text:input}))}} className="update"> Update </button>
                        <button onClick={(e)=>{dispatch(removeTodo(data.id))}}> Delete </button>
                    </div>
                </li>)
            })}
        </ul>
    </div>)    
}
export default Todo;
import { useContext } from "react";
import { TodoItemcontext } from "../store/todo-items-store";
const Todoitem=({todoDate , todoName})=>{
  const {deleteItem}= useContext(TodoItemcontext)
    return(
        <div className="container text-center" style={{width:"700px"}}>
        <div className="row gy-2 m-4" >
        <div className="col-6 text-start"  >
           {todoName}
        </div>
        <div className="col-4 text-start" >
            {todoDate}
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-danger" style={{width:"100px"}} onClick={()=>deleteItem(todoName)}>Delete</button>
        </div>
      </div>
      </div>
    );
}
export default Todoitem;
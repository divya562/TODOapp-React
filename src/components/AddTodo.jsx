import { useContext } from "react";
import { TodoItemcontext } from "../store/todo-items-store";
import { useRef } from "react";

const Addtodo = () =>{
  const {addNewItem}= useContext(TodoItemcontext)

  const todoNameElement=useRef();
  const dueDateElement=useRef();


  const handleAddbtnClick=(event)=>{
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value=""
    dueDateElement.current.value=""
    addNewItem(todoName,todoDate);

  }

    return(
   <div className="container text-center" style={{width:"700px"}}>
        <form className="row gy-2 m-4" onSubmit={handleAddbtnClick}>
        <div className="col-6">
          <input type="text" ref={todoNameElement} className="form-control" id="autoSizingInput"  placeholder="Enter Todo Here" />
        </div>
        <div className="col-4" >
          <input type="date" ref={dueDateElement} className="form-control"   />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success" style={{width:"100px"}} onClick={handleAddbtnClick}>Add</button>
        </div>
      </form>
      </div>
   
    );
}
export default Addtodo;
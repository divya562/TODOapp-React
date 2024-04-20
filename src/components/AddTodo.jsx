import { useState } from "react";

const Addtodo = ({addNewItem}) =>{
  const[todoName, setTodoName]=useState("");
  const[todoDate, setTodoDate]=useState("");

  const handleName=(event)=>{
    setTodoName(event.target.value)

  }
  const handleDate=(event)=>{
    setTodoDate(event.target.value);

  }

  const handleAddbtnClick=(event)=>{
    event.preventDefault();
    addNewItem(todoName,todoDate);
    setTodoName("");
    setTodoDate("");
  }

    return(
   <div className="container text-center" style={{width:"700px"}}>
        <form className="row gy-2 m-4" onSubmit={handleAddbtnClick}>
        <div className="col-6">
          <input type="text" className="form-control" id="autoSizingInput" value={todoName} placeholder="Enter Todo Here" onChange={handleName}/>
        </div>
        <div className="col-4" >
          <input type="date"className="form-control" value={todoDate}  onChange={handleDate}/>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success" style={{width:"100px"}} onClick={handleAddbtnClick}>Add</button>
        </div>
      </form>
      </div>
   
    );
}
export default Addtodo;
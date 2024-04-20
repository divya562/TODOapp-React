import { useContext } from "react";
import { TodoItemcontext } from "../store/todo-items-store";
import Todoitem from "./Todoitem";

const Todoitems=()=>{
        const {deleteItem}= useContext(TodoItemcontext)
        const {todoItem}= useContext(TodoItemcontext)
        // console.log(todoItems);
    
    return(
        <div className="container text-start">
            
           {todoItem.map(item=> (
            <Todoitem key={item.name} todoDate={item.dueDate} todoName={item.name} onDeleteClick={deleteItem}/>
           ))}
       </div>
    );
}

export default Todoitems;
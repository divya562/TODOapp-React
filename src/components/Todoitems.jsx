import Todoitem from "./Todoitem";

const Todoitems=({todoItems, onDeleteClick})=>{
    return(
        <div className="container text-start">
            
           {todoItems.map(item=> (
            <Todoitem key={item.name} todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}/>
           ))}
       </div>
    );
}

export default Todoitems;
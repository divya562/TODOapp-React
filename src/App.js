import { useState } from "react";
import Addtodo from "./components/AddTodo";
import Heading from "./components/Heading";
// import Todoitem from "./components/Todoitem";
import Todoitems from "./components/Todoitems";
import Welcomemsg from "./components/Welcomemsg";

function App(){
  const initialtodoItems=[
    {
      name: "Buy Milk",
      dueDate: "17-04-2024",
    },
    {
      name: "Go to college",
      dueDate: "17-04-2024",
    },
  ];

  const[todoItem, setTodoItem]=useState(initialtodoItems);
  const handleOnchange=(itemName, itemDuedate)=>{
    // console.log(`item name ${itemName} Date: ${itemDuedate}` )
    let newTodo =[...todoItem, {name: itemName, dueDate: itemDuedate}];
    setTodoItem(newTodo)
  }

  const handleDeleteClick=(todoItemName)=>{
    const newTodoItem = todoItem.filter(item=>item.name !== todoItemName)
    setTodoItem(newTodoItem)
    // console.log(`delete: ${todoItemName}`)
  }
  return(
    <center>
        <Heading/>
       <Addtodo addNewItem={handleOnchange}/>
       {todoItem.length === 0 && <Welcomemsg  todoItems={todoItem}/>}
       
       <Todoitems todoItems={todoItem} onDeleteClick={handleDeleteClick}/>
     
    </center>
  );
}

export default App;
import { useContext } from 'react';
import { TodoItemcontext } from "../store/todo-items-store";
import style from './Welcomemsg.module.css'

const Welcomemsg =()=>

{
    const {todoItem}= useContext(TodoItemcontext)
    return(
        todoItem.length === 0 && <p className={style.welcome}>Enjoy your Day</p>
    );
}
export default Welcomemsg;
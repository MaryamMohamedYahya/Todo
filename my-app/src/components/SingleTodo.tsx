import React from 'react';
import {Todo} from "../model";
import {RxCross2, RxCheckCircled, RxPencil2} from'react-icons/rx';
import "./styles.css";

type Props = {
     todo: Todo;
     todos: Todo[];
     setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}
const SingleTodo = ( {todo, todos, setTodos}:Props) =>{
     return <form className="todos_single">
               <span className="todos_single--text">{todo.todo}</span>
               <div>
                    <span className="icon">
                         < RxPencil2/>
                    </span>
                    <span className="icon">
                         <RxCross2 />
                    </span>
                    <span className="icon">
                         <RxCheckCircled/>
                    </span>
               </div>
               </form>;

};
export default SingleTodo
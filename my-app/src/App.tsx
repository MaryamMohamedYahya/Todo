import React, {useState} from 'react';


import './App.css';
import Input from './components/Input';
import {Todo} from"./model";
import TodoList from './components/Todolist';

const App: React.FC = () =>{

  const[todo, setTodo] = useState<string>("");
  const[todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo){
      setTodos([...todos, {id:Date.now(), todo, isDone:false}]);
      setTodo("");
    }
  };
    
  

  console.log(todo);

return  (<div className="App">
  <span className="heading">TODO</span>

<Input  todo={todo} setTodo={setTodo}  handleAdd={handleAdd}/>
 <TodoList />



</div>

);
};
export default App;

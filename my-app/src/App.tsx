import React from 'react';

import './App.css';
import Input from './components/Input';

const App: React.FC = () =>{
  const[todo, setTodo] = useState<string>("");

return  <div className="App">
  <span className="heading">TODO</span>

<Input  todo={todo} setTodo={setTodo} />

</div>

};
export default App;

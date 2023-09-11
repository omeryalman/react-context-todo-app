import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

function TodoForm() {
    const [inputValue, setInputValue] = useState("");
    const {addTodo}= useTodoContext();

    const changeEvent=(e)=>{
        setInputValue(e.target.value);
     }
     const clickHandle=(e)=>{
        setInputValue("")
      e.preventDefault();
      inputValue =="" ? alert("empty value") :
     addTodo({id:Date.now(),text:inputValue})


     }
  return (
    <div>
      <form>
<input className='inputWrapper' value={inputValue} onChange={changeEvent}/>
<button onClick={clickHandle}>Add</button>
</form>
    </div>
  )
}

export default TodoForm
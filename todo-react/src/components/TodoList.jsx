import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

function TodoList() {
  const { todoList, handleDelete, handleUpdate } = useTodoContext();
  const [updateMode, setUpdateMode] = useState({ id: null, text: "" });

  const handleUpdateClick = (id) => {
    const todoToUpdate = todoList.find((todo) => todo.id === id)
    const capitalizedText = todoToUpdate.text.charAt(0).toUpperCase() + todoToUpdate.text.slice(1);

    setUpdateMode({ id, text:capitalizedText });
  };

  const handleUpdateSubmit = (id) => {
    const updatedText = updateMode.text.charAt(0).toUpperCase() + updateMode.text.slice(1);

    handleUpdate(id, updatedText);
    setUpdateMode({ id: null, text: "" });
  };

  return (
    <div>
      {todoList.map((todo) => (
        <div  className='newTodos' key={todo.id}>
          {updateMode.id === todo.id ? (
            <div >
              <input
              className='editInput'
                type="text"
                value={updateMode.text}
                onChange={(e) => setUpdateMode({ id: todo.id, text: e.target.value })}
              />
              <button onClick={() => handleUpdateSubmit(todo.id)}>Complete</button>
            </div >
          ) : (
            <span className='todosText'>{todo.text.charAt(0).toUpperCase()+todo.text.slice(1)}</span>
          )}
          <div className='buttonarea'>
           
          <button className='deleteButton'  onClick={() => handleDelete(todo.id)}>Delete</button>
          
          {updateMode.id !== todo.id && (
            <button onClick={() => handleUpdateClick(todo.id)}>Edit</button>
            
          )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

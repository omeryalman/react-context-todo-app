import React, { useEffect, useState } from 'react'
import { createContext,useContext } from 'react'


const TodoContext=createContext();

 export function useTodoContext(){
    
    return useContext(TodoContext);
}

export function TodoProvider({children}){
    const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const storedTodoList =localStorage.getItem('todoList');
    if(storedTodoList){
        setTodoList(JSON.parse(storedTodoList));
    }    
  }, [])
  
  useEffect(() => {
    localStorage.setItem('todoList',JSON.stringify(todoList));
  
  
  }, [todoList])
  
  

const handleDelete=(id)=>{
const deletedList=todoList.filter((todo)=>todo.id !==id);
setTodoList(deletedList)
}


const handleUpdate=(id,updatedTodo)=>{
    const updatedList= todoList.map((todo)=> 
   todo.id===id?{...todo,text:updatedTodo}:todo);
    setTodoList(updatedList);

}
const addTodo=(todo)=>{
    setTodoList([...todoList,todo]);

}
return(
<TodoContext.Provider value={{addTodo,todoList,handleDelete,handleUpdate}}>
    {children}
</TodoContext.Provider>
);
}


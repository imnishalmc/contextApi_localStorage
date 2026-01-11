import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

//here the 
const Todoitem = ({todo}) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg,setTodoMsg] = useState(todo.title)
 const {updateTodo,deleteTodo,toggleTodo} =useTodo()
 const editTodo =()=>{
    updateTodo(todo.id, {...todo, title:todoMsg})
    setIsTodoEditable(false)
 }
const toggleComplete =()=>{
    toggleTodo(todo.id)
}

  return (
    <div className={`flex border h-15 border-black/10 rounded px-3 py-2 gap-x-3 text-black ${todo.completed ? "bg-green-100" : "bg-red-300"}`} >
        <input type="checkbox" className='cursor-pointer px-7 h-9 w-9' checked={todo.completed} onChange={toggleComplete} />
 <input type="text" className={` text-2xl border outline-none w-full bg-transparent rounded ${isTodoEditable ? "border-black/8 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""}`}  value={todoMsg} onChange={(e)=> setTodoMsg(e.target.value)} readOnly ={!isTodoEditable}/>

 <button className='inline-flex w-10 h-10 rounded text-sm border border-black justify-center items-center hover:bg-gray-100 shrink-0 disabled:opacity-40  ' onClick={()=>{
   
    if(isTodoEditable){
        editTodo();
    } 
    else setIsTodoEditable((prev)=>!prev);
 }} disabled={todo.completed}>
{isTodoEditable ? "📁" : "✏️"}
 </button>
 <button className='inline-flex w-10 h-10 rounded text-sm border border-black justify-center items-center hover:bg-gray-100 shrink-0 disabled:opacity-40 ' onClick={()=> deleteTodo(todo.id)}>
 ❌
 </button>
    </div>
  )
}

export default Todoitem
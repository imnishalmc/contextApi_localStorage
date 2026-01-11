import { useEffect, useState } from 'react'

import { TodoProvider } from './context/TodoContext'

import './App.css'
import TodoForm from './components/TodoForm'
import Todoitem from './components/Todoitem'

function App() {
const [todo, setTodo]= useState([])
//the todo  in this usestate holds the overall todo(i.e id,title,completed ) but thesingleNewTodo that is mentioned here in the addTodo is the one that user will write through the form , single todo
const addTodo =(singleNewTodo)=>{
setTodo((puranoarray)=>[...puranoarray,{id:Date.now(), ...singleNewTodo}])

}
 const updateTodo =(id,todo)=>{
 setTodo((puraanoValue)=>puraanoValue.map((prevTodo) => (
  prevTodo.id ===id ? todo: prevTodo
 )))
 }

 const deleteTodo = (id) =>{
  setTodo((puraanoarray)=> puraanoarray.filter((iterate) => iterate.id !==id)

)
 }
//this delete functionality define the concept of the mutability, that react an not be mutable . here it forms a new array without including the todo that user select to delete


 const toggleTodo =(id )=>{
 setTodo((prevTodo)=>
prevTodo.map((iterate)=>iterate.id === id ?{...iterate,completed: !iterate.completed } :iterate)
 )
 }

 useEffect(()=>{
const itemsGet= JSON.parse(localStorage.getItem("todos"))
if(itemsGet && itemsGet.length >0){
  setTodo(itemsGet)
}
 },[])

 useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todo))
 },[todo])

  return (
    <TodoProvider value={{todo,addTodo,deleteTodo,updateTodo,toggleTodo}}>
    <div className='bg-slate-400 min-h-screen py-20'>
 <div className='w-full max-w-2xl mx-auto rounded-3xl px-4 text-white '>
  <h1 className='text-4xl font-bold text-center mb-3 mt-3'>
    Manage your TODOS
  </h1>
  <div className='mb-4'>
<TodoForm/>
  </div>
  <div className='flex flex-wrap gap-y-2'>
{todo.map((todo)=>{
return <div key={todo.id} className='w-full'>
<Todoitem todo={todo}/>
</div>
})}
  </div>

 </div>



    </div>
    </TodoProvider>
  )
}

export default App

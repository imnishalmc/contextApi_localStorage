import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { TodoProvider } from './context/TodoContext'

import './App.css'

function App() {
const [todo, setTodo]= useState([])

const addTodo =(id)=>{

}


  return (
    <TodoProvider value={{todo,addTodo,deleteTodo,updateTodo,toggleTodo}}>
    <div className='bg-slate-400 min-h-screen py-20'>
 <div className='w-full max-w-2xl mx-auto rounded-3xl px-4 text-white '>
  <h1 className='text-2xl font-bold text-center mb-3 mt-3'>
    Manage your TODOS
  </h1>
  <div className='mb-4'>

  </div>
  <div className='flex flex-wrap gap-y-2'>

  </div>

 </div>



    </div>
    </TodoProvider>
  )
}

export default App

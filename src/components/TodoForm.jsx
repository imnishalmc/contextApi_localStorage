import { useState } from "react"
import { useTodo } from "../context/TodoContext"

const  TodoForm =()=>{
    const [singleTodo,setSingleTodo] =useState("")
    const {addTodo} = useTodo()

    const add = (e)=>{
        e.preventDefault ()
        if(!singleTodo) return
        addTodo({title:singleTodo,completed:false})
        setSingleTodo("")
    }
    return (
        <form onSubmit={add} className="flex ">

<input type="text" placeholder="Enter your todos here.." className="w-full border border-black/9 rounded-l-lg px-4 outline-none bg-white/30 py-10 text-2xl text-black" value={singleTodo} onChange={(e)=> setSingleTodo(e.target.value)} />
<button type="submit" className="rounded-r-lg px-3 py-2 bg-green-200 shrink-0 text-2xl text-black" >Add</button>
        </form>
    )
}
export default TodoForm



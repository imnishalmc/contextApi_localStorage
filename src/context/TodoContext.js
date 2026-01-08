import { createContext,useContext } from "react";
//now make a context using the create context

 export const TodoContext =createContext({
todo:[
    { 
        id:1,
        title: "read books",
        completed:false,
    }
]
})
//you can directly export it and such type 
//of export is called the named export . to import this you have to use 
//{} this  while importing 


export const useTodo = ()=>{
    return  useContext(TodoContext)
}
export const TodoProvider =TodoContext.Provider

//this is done because while wrapping the componenets , we dont have to
//write TodoContext.Provider 

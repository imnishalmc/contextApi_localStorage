import { createContext,useContext } from "react";
//now make a context using the create context

 export const TodoContext =createContext({
todo:[
    { 
        id:1,
        title: "read books",
        completed:false,
    }
],
addTodo: (title)=>{},
updateTodo :(id,title)=>{},
deleteTodo : (id)=>{},
toggleTodo:(id)=>{}
})

//this structure basically define , create context's initial value is in 
//object format and inside that object , the value of first key is array
//also the arrau contain the object that define the property of the data

// in a very simple way of understanding , it mainly holds the things that are 
//used in the project,like the actual todo or lets say data is used , the operation of the todo 
//like delete,update,add,toogle and all


// so this context define that these data and action exists but here the actual functional logoc is not mention /written , it is done in the app.jsx

//you can directly export TodoContextand such type 
//of export is called the named export . to import this you have to use 
//{} this  while importing 

export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider =TodoContext.Provider

//this is done because while wrapping the componenets , we dont have to
//write TodoContext.Provider 

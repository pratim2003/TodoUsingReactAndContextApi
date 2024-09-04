 import { createContext,useContext } from "react";

 export const Todo = createContext({
    todos : [
        {
            id : 1,
            todo : "mssg",
            checked : false
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id,todo)=>{},
    toggleTodo : (id,todo)=>{}
 })

 export const TodosProvider = Todo.Provider

export const TodoContext = ()=>{
    return useContext(Todo)
}
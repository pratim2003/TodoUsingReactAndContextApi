import React,{useState} from 'react'
import {TodoContext} from "../Context/Cotext"
function Input() {
    const [todoMssg,setTodoMssg]=useState("")
    const {addTodo} = TodoContext()
    const add =()=>{
        if(todoMssg==="") return
        addTodo({todo:todoMssg,checked : false})
        setTodoMssg("")
    }
  return (
    <>
      <div className='mx-auto max-w-xl mt-8 flex'>
        <input type="text"  
        className='rounded-md bg-blue-500 w-[500px] mx-2 p-2 text-white shadow-lg'
        value={todoMssg}
        onChange={(e)=>setTodoMssg(e.target.value)}
        />
        <button className='bg-blue-800 p-3 rounded-lg text-white' onClick={add}>Submit</button>
      </div>
    </>
  )
}

export default Input

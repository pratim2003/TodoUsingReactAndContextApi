import { useState,useEffect } from 'react'
import './App.css'
import { TodosProvider } from './Context/Cotext'
import Input from './Components/Input';
import Inputfile from './Components/Inputfile';

function App() {
  const [todos , setTodos] = useState([]);

  const addTodo =(todo)=>{
    setTodos((prev)=>[{id : Date.now(),...todo},...prev])
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))
  } 
  const updateTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id? todo : prevTodo)))
  }
  const toggleTodo = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id? {...prevTodo,checked : !prevTodo.checked }: prevTodo)))
  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodosProvider value={{todos,addTodo,deleteTodo,toggleTodo,updateTodo}}>
      <div className='h-screen w-full bg-blue-950'>
        <div className='text-center text-3xl pt-28'><h1 className='text-white'>Manage your Todos</h1></div>
        {/* Input form is here */}
        <div><Input/></div>
        {/* Inputfile is here */}
        {todos.map((todo)=>(
          <div key={todo.id}>
            <Inputfile todo={todo}/>
          </div>
        ))}
      </div>
    </TodosProvider>
  )
}

export default App

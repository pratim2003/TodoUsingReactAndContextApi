import React,{useState} from 'react'
import { TodoContext } from '../Context/Cotext'
import { useEffect } from 'react'
function Inputfile({todo}) {
  const {deleteTodo,updateTodo,toggleTodo}=TodoContext()
  const [todoMssg,setTodoMssg]=useState("")
  const [isEditable,setIsEditable]=useState(true)
  const [hid1,setHid1]=useState("")
  const [hid2,setHid2]=useState("hidden")
  const [edit,setEdit]=useState(false)
  const [lineThrough,setLineThrough]=useState("")
  const [chec,setCheck]=useState(false)
  useEffect(()=>{
    let mssg = todo.todo
    setTodoMssg(mssg)
  },[])
  const hide =()=>{
    if(todo.checked==false){
      if(!edit){
        setHid1("hidden")
        setHid2("")
        setEdit(true)
        setIsEditable(false)
        updateTodo(todo.id,{...todo,todo:todoMssg})
      }else{
        setEdit(false)
        setHid1("")
        setHid2("hidden")
        setIsEditable(true)
        document.querySelector("#text1").value(todoMssg)
      }
    }
  }
  const delTodo =()=>{
    deleteTodo(todo.id)
  }
  const check =()=>{
    toggleTodo(todo.id)
  }
  useEffect(()=>{
    if(todo.checked==true){
      setLineThrough("line-through")
      setCheck(true)
    }else{
      setLineThrough("")
      setCheck(false)
    }
  },[todo.checked])
  return (
    <>
      <div className='pt-5'>
      <div className='grid grid-cols-12 gap-1 max-w-xl mx-auto bg-yellow-200 rounded-md '>
        <div className='col-span-1  p-2 flex justify-center'>
          <input type="checkbox" name="" id="" className='ml-3' onClick={check} checked={chec}/>
        </div>
        <div className='col-span-7  p-2'>
          <input type="text" name="" id="text1" className={`w-full bg-yellow-200 rounded-md p-1 text-black ${lineThrough}`} value={todoMssg}  onChange={(e)=>setTodoMssg(e.target.value)} readOnly={isEditable}/>
          
        </div>
        <div className='col-span-2  p-2 flex justify-center'>
        <button onClick={hide}><img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/edit-9602018-8212849.png?f=webp&w=256" alt="" className={`h-9 w-9 ${hid1}`}/></button>
        <button onClick={hide}><img src="https://cdn.iconscout.com/icon/free/png-512/free-save-icon-download-in-svg-png-gif-file-formats--windows-logo-floppy-as-storage-10-pack-interface-icons-1174906.png?f=webp&w=256" alt="" className={`h-9 w-9 ${hid2}`}/></button>
        </div>
        <div className='col-span-2  p-2 flex'>
        <button onClick={delTodo}><img src="https://cdn.iconscout.com/icon/free/png-512/free-ecology-icon-download-in-svg-png-gif-file-formats--environment-recycle-trash-delete-and-pack-nature-icons-28046.png?f=webp&w=256" alt="" className='h-9 w-9' /></button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Inputfile

import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
const [userData,setUserData] = useContext(AuthContext)
  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
   const newTask={taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false}
   
   const data = userData;
   data.forEach(function(elem){
     if(asignTo == elem.firstName){
       elem.tasks.push(newTask)
       elem.taskCount.newTask = elem.taskCount.newTask+1;
      } 
    })
    setUserData(data)
    console.log(data)
    // localStorage.setItem('employees', JSON.stringify(data))  
    // setUserData(dataa)
    setTaskTitle('')
    settaskDescription('')
    setTaskDate('')
    setCategory('')
    setAsignTo('')
    
  };
   

  return (
    <div className='rounded-[30px] border border-slate-800/80 bg-slate-900/80 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6'>
      <div className='mb-5 flex flex-wrap items-start justify-between gap-3'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300'>Create Task</p>
          <h2 className='mt-1 text-xl font-semibold text-white'>Assign a new task</h2>
        </div>
        <div className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300'>Fast workflow</div>
      </div>

      <form onSubmit={(e) => { submitHandler(e) }} className='grid gap-5 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='space-y-4'>
          <div>
            <h3 className='mb-2 text-sm font-medium text-slate-300'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              className='w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20' type="text" placeholder='Make A UI Design' />
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            <div>
              <h3 className='mb-2 text-sm font-medium text-slate-300'>Date</h3>
              <input 
                value={taskDate}
                onChange={(e)=>{
                  setTaskDate(e.target.value)
                }}
                className='w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20' type="date" />
            </div>

            <div>
              <h3 className='mb-2 text-sm font-medium text-slate-300'>Category</h3>
              <input 
                value={category}
                onChange={(e)=>{
                  setCategory(e.target.value)
                }}
                className='w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20' type="text" placeholder='design, dev, etc' />
            </div>
          </div>

          <div>
            <h3 className='mb-2 text-sm font-medium text-slate-300'>Assign To</h3>
            <input 
              value={asignTo}
              onChange={(e)=>{
                setAsignTo(e.target.value)
              }}
              className='w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20' type="text" placeholder='Employee name' />
          </div>
        </div>

        <div className='flex flex-col'>
          <h3 className='mb-2 text-sm font-medium text-slate-300'>Description</h3>
          <textarea 
            value={taskDescription}
            onChange={(e)=>{
              settaskDescription(e.target.value)
            }}
            className='h-44 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20' name="" id="" cols={20} rows={10} placeholder='Add task details, notes, or requirements...'></textarea>

          <button className='mt-4 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:from-emerald-400 hover:to-cyan-400'>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
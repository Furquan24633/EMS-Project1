import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='w-[40%] py-5 px-8 rounded-xl bg-blue-400'>
        <h2 className='text-2xl font-bold'>{data.taskCount.newTask}</h2>
        <h3 className='text-2xl font-semibold'>New Task</h3>
      </div>
      <div className='w-[40%] py-5 px-8 rounded-xl bg-green-400'>
        <h2 className='text-2xl font-bold'>{data.taskCount.completed}</h2>
        <h3 className='text-2xl font-semibold'>Complete Task</h3>
      </div>
      <div className='w-[40%] py-5 px-8 rounded-xl bg-yellow-400'>
        <h2 className='text-2xl font-bold text-black'>{data.taskCount.active}</h2>
        <h3 className='text-2xl text-black font-semibold'>Accepted Task</h3>
      </div>
      <div className='w-[40%] py-5 px-8 rounded-xl bg-red-400'>
        <h2 className='text-2xl font-bold'>{data.taskCount.failed}</h2>
        <h3 className='text-2xl font-semibold'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
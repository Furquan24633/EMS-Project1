import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className='rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/20'>
      <div className='flex items-center justify-between gap-4'>
        <span className='rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-sky-200'>New</span>
        <span className='text-sm text-slate-400'>{data.taskDate}</span>
      </div>

      <div className='mt-5 flex items-center justify-between gap-3'>
        <span className='rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200'>{data.category}</span>
      </div>

      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
      <p className='mt-3 text-sm leading-6 text-slate-300'>{data.taskDescription}</p>

      <div className='mt-6'>
        <button className='w-full rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400'>Accept Task</button>
      </div>
    </div>
  )
}

export default NewTask
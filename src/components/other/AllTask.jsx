import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <div className='space-y-3'>
      {userData.map((elem, idx) => {
        const newTasks = elem.taskCount?.newTask || 0
        const activeTasks = elem.taskCount?.active || 0
        const completedTasks = elem.taskCount?.completed || 0
        const failedTasks = elem.taskCount?.failed || 0

        return (
          <div key={idx} className='rounded-[24px] border border-slate-800 bg-slate-950/70 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400/30'>
            <div className='flex flex-wrap items-start justify-between gap-3'>
              <div className='flex items-center gap-3'>
                <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-sm font-semibold text-emerald-300'>
                  {elem.firstName?.slice(0, 1).toUpperCase()}
                </div>
                <div>
                  <h3 className='text-base font-semibold text-white'>{elem.firstName}</h3>
                  <p className='text-sm text-slate-400'>Task overview</p>
                </div>
              </div>
            </div>

            <div className='mt-4 grid gap-2 sm:grid-cols-2'>
              <div className='rounded-2xl border border-sky-400/20 bg-sky-500/10 p-3'>
                <div className='flex items-center justify-between text-sm text-sky-200'>
                  <span>New Tasks</span>
                  <span>📝</span>
                </div>
                <p className='mt-2 text-xl font-semibold text-white'>{newTasks}</p>
              </div>

              <div className='rounded-2xl border border-amber-400/20 bg-amber-500/10 p-3'>
                <div className='flex items-center justify-between text-sm text-amber-200'>
                  <span>Active Tasks</span>
                  <span>⚡</span>
                </div>
                <p className='mt-2 text-xl font-semibold text-white'>{activeTasks}</p>
              </div>

              <div className='rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-3'>
                <div className='flex items-center justify-between text-sm text-emerald-200'>
                  <span>Completed Tasks</span>
                  <span>✅</span>
                </div>
                <p className='mt-2 text-xl font-semibold text-white'>{completedTasks}</p>
              </div>

              <div className='rounded-2xl border border-rose-400/20 bg-rose-500/10 p-3'>
                <div className='flex items-center justify-between text-sm text-rose-200'>
                  <span>Failed Tasks</span>
                  <span>⚠️</span>
                </div>
                <p className='mt-2 text-xl font-semibold text-white'>{failedTasks}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AllTask
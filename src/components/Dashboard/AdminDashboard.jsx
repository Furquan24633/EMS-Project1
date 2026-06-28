import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='min-h-screen w-full bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_28%),linear-gradient(135deg,_#030712_0%,_#0f172a_45%,_#111827_100%)] p-4 sm:p-6 lg:p-8'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6'>
        <Header changeUser={props.changeUser} />

        <div className='grid gap-6 xl:grid-cols-[1.15fr_0.85fr]'>
          <CreateTask />

          <div className='rounded-[30px] border border-slate-800/80 bg-slate-900/80 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-5'>
            <div className='mb-4 flex items-start justify-between gap-3'>
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300'>Employee Overview</p>
                <h2 className='mt-1 text-xl font-semibold text-white'>Team task summary</h2>
              </div>
              <div className='rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300'>Live</div>
            </div>
            <AllTask />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
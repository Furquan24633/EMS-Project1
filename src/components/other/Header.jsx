import React from 'react'

const Header = (props) => {
  const username = props.data?.firstName || 'Admin'
  const role = props.data ? 'Employee' : 'Admin'
  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='rounded-[32px] border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl'>
      <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        <div className='flex items-start gap-4'>
          <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-xl text-emerald-300'>📊</div>
          <div>
            <p className='text-sm uppercase tracking-[0.35em] text-emerald-400'>Dashboard</p>
            <h1 className='mt-2 text-3xl font-semibold text-white'>Hello, {username}</h1>
            <p className='mt-1 text-sm text-slate-400'>You are signed in as <span className='font-medium text-emerald-300'>{role}</span>.</p>
          </div>
        </div>
        <button onClick={logOutUser} className='inline-flex items-center justify-center rounded-full border border-red-500/20 bg-red-600/90 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/30'>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Header
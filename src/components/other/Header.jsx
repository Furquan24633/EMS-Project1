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
    <div className='mb-7 rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl'>
      <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        <div>
          <p className='text-sm uppercase tracking-[0.35em] text-emerald-400'>Dashboard</p>
          <h1 className='mt-2 text-3xl font-semibold text-white'>Hello, {username}</h1>
          <p className='mt-1 text-sm text-slate-400'>You are signed in as <span className='font-medium text-emerald-300'>{role}</span>.</p>
        </div>
        <button onClick={logOutUser} className='inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500'>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Header
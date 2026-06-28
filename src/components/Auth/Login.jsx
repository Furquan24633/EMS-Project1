import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault()
    // console.log("email is",email);
    // console.log("password is",password);
    handleLogin(email,password)
    setEmail("");
    setPassword("");

    
  }
  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.20),_transparent_35%),linear-gradient(135deg,#020617,#0f172a)] flex items-center justify-center px-4'>
      <div className='w-full max-w-md rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl'>
        <div className='mb-8 text-center'>
          <p className='text-sm uppercase tracking-[0.35em] text-emerald-400'>EMS Portal</p>
          <h1 className='mt-3 text-4xl font-semibold text-white'>Welcome back</h1>
          <p className='mt-3 text-sm leading-6 text-slate-300'>Login with your admin or employee credentials to continue.</p>
        </div>

        <form onSubmit={submitHandler} className='space-y-5'>
          <label className='block text-sm font-medium text-slate-200'>
            Email address
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20'
              type='email'
              placeholder='admin@me.com'
            />
          </label>

          <label className='block text-sm font-medium text-slate-200'>
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20'
              type='password'
              placeholder='123'
            />
          </label>

          <button className='w-full rounded-full bg-gradient-to-r from-emerald-500 to-slate-700 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:scale-[1.01]'>
            Sign In
          </button>
        </form>

        <div className='mt-8 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300'>
          <p className='font-medium text-slate-100'>Quick login</p>
          <p className='mt-2 text-xs'>Admin: admin@me.com / 123</p>
          <p className='text-xs'>Employee: a@a.com / 123</p>
        </div>
      </div>
    </div>
  )
}

export default Login
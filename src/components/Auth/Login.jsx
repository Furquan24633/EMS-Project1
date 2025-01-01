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
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 p-20 border-emerald-600 rounded-xl'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                 setEmail(e.target.value)
                  
                  
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 placeholder:text-gray-500 py-2 px-4 rounded-full' type="email" placeholder='Enter your email' 
                />
                
                <input
                value={password} 
                onChange={(e)=>{
                  setPassword(e.target.value);
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 placeholder:text-gray-500 py-2 px-4 rounded-full mt-3' type="password" placeholder='Enter password'/>
                <button className='mt-3 bg-emerald-900 rounded-full px-4 py-1'>Log in</button>
            </form>
        </div>

    </div>
  )
}

export default Login
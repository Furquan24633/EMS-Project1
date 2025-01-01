import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  //For Clean Local Storage
  localStorage.clear()
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
     if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
     setUser(userData.role)
      setloggedInUserData(userData.data)
     }
  
  },[])
  

 
 const handleLogin = (email,password)=>{
   if(email == 'admin@me.com' && password == '123'){
     setUser('admin')
     localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(userData){
      const employees = userData.find((e)=>email == e.email && e.password == password);
      if(employees){
        setUser('employees')
        setloggedInUserData(employees)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employees', data:employees}))
      }
    }
    else{
      alert('Invalid Credentials')
    }
  } 

  
  return (
    <>
  
   {!user ? <Login handleLogin={handleLogin}/>: ''}
   {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employees' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/> : null) }

  </>
  )
}

export default App
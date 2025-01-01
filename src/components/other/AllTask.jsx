import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
    // console.log(authData.employees);
    return (
        
        <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48'>
            <div className='bg-red-400 mb-2 py-2 px-2 flex justify-between rounded'>
                    <h2 className='font-bold w-1/5 '>Employee Name</h2>
                    <h3 className='font-bold w-1/5 '>New Task</h3>
                    <h3 className='font-bold w-1/5 '>Active Task</h3>
                    <h5 className='font-bold w-1/5 '>Completed</h5>
                    <h5 className='font-bold w-1/5 '>Failed</h5>
                </div>

           <div className='h-[80%] overflow-auto' >
           {userData.map(function (elem,idx) {
               return <div key={idx} className='border-emerald-500 border-2 mb-2 py-2 px-2 flex justify-between rounded'>
                    <h2 className='text-lg font-medium px-8 w-1/5 text-emerald-400 '>{elem.firstName}</h2>
                    <h3 className='text-lg font-medium px-8 w-1/5 text-blue-500 '>{elem.taskCount.newTask}</h3>
                    <h5 className='text-lg font-medium px-8 w-1/5 text-yellow-400 '>{elem.taskCount.newTask}</h5>
                    <h5 className='text-lg font-medium px-8 w-1/5 text-white-700'>{elem.taskCount.completed}</h5>
                    <h5 className='text-lg font-medium px-8 w-1/5 text-red-700'>{elem.taskCount.failed}</h5>
                </div>
            })} 
           </div>


        </div>
    )
}

export default AllTask
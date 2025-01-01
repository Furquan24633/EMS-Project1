import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {  
  return (
    <div id='tasklist' className=' flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-5 rounded-xl h-42 overflow-y-scroll no-scrollbar'>
    {data.tasks.map((elem, idx)=>{
      if(elem.active){
        return <AcceptTask key={idx} data={elem}/>
      }
      if(elem.newTask){0
        return <NewTask key={idx} data={elem}/>
      }
      if(elem.completed){
        return <CompleteTask key={idx} data={elem}/>
      }
      if(elem.failed){
        return <FailedTask key={idx} data={elem}/>
      }
    })}  
    </div>
  )
}

export default TaskList

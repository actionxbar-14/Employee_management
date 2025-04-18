import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header/>
        <TaskListNumber/>
        <Tasklist/>
      
    </div>
  )
}

export default EmployeeDashboard

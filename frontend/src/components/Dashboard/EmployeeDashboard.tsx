import React from 'react'
import Header from '../others/Header'
import TaskGrid from '../others/TaskGrid'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header />
        <TaskGrid />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard
import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className='h-[55%]  overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10'>
        <div className='h-[65%] flex-shrink-0 w-[400px] p-5 bg-red-400 rounded-xl '>
            <div className='flex items-center justify-between'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
              <h4 className='text-sm'>21 Oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Go to the gym</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident minus cumque nobis optio expedita voluptatum!</p>
        </div>

        <div className='h-[65%] flex-shrink-0 w-[400px] p-5 bg-yellow-400 rounded-xl '>
            <div className='flex items-center justify-between'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
              <h4 className='text-sm'>21 Oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Go to the gym</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident minus cumque nobis optio expedita voluptatum!</p>
        </div>

        <div className='h-[65%] flex-shrink-0 w-[400px] p-5 bg-blue-400 rounded-xl '>
            <div className='flex items-center justify-between'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
              <h4 className='text-sm'>21 Oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Go to the gym</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident minus cumque nobis optio expedita voluptatum!</p>
        </div>

        <div className='h-[65%] flex-shrink-0 w-[400px] p-5 bg-green-400 rounded-xl '>
            <div className='flex items-center justify-between'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
              <h4 className='text-sm'>21 Oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Go to the gym</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident minus cumque nobis optio expedita voluptatum!</p>
        </div>
        
    </div>
  )
}

export default TaskList
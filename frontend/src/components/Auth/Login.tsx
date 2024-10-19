import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-teal-600 p-20'>
            <form className='flex flex-col items-center justify-center'>
                <input required className='text-white outline-none bg-transparent border-2 border-teal-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input required className='text-white outline-none bg-transparent border-2 border-teal-600 text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter Password' />
                <button className='text-white outline-none bg-teal-600 text-xl py-3 px-10 rounded-full mt-7 '>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
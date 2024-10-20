import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("Email is",email);
    console.log("Password is",password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-teal-600 p-20'>
            <form onSubmit={(e) => {submitHandler(e)}} className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} required className='text-white outline-none bg-transparent border-2 border-teal-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input value={password} onChange={(e) => {setPassword(e.target.value)}} required className='text-white outline-none bg-transparent border-2 border-teal-600 text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter Password' />
                <button className='text-white outline-none bg-teal-600 text-xl py-3 px-10 rounded-full mt-7 '>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
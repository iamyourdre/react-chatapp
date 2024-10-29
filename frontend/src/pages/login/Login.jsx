import React from 'react'
import { HiOutlineLockClosed, HiUser } from "react-icons/hi";

const Login = () => {
  return (
    <div className='bg-white min-h-screen flex justify-center items-center'>
      <div className="h-full content-center px-8">
        <form className="rounded-xl w-full md:w-80 py-6 grid gap-3 mx-auto">
          <p className="text-2xl text-center mb-4 font-semibold">Login</p>
          <label className="input input-bordered flex items-center gap-2">
            <HiUser />
            <input
              type="text"
              className="grow"
              placeholder="Username"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <HiOutlineLockClosed />
            <input
              type="password"
              className="grow"
              placeholder="Password"
            />
          </label>
          <button className="btn btn-neutral" type="submit">Login</button>
          <p>Don't have an account? <a href="/register" className="link">Sign Up!</a></p>
        </form>
      </div>
    </div>
  )
}

export default Login
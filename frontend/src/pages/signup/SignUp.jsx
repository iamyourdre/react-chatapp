import React from 'react'
import { HiOutlineLockClosed, HiUser } from "react-icons/hi";
import { RiUserSmileLine } from "react-icons/ri";

const SignUp = () => {
  return (
    <div className='bg-white min-h-screen flex justify-center items-center'>
      <div className="h-full content-center px-8">
        <form className="rounded-xl w-full md:w-80 py-6 grid gap-3 mx-auto">
          <p className="text-2xl text-center mb-4 font-semibold">Sign Up</p>
          <label className="input input-bordered flex items-center gap-2">
            <RiUserSmileLine />
            <input
              type="text"
              className="grow"
              placeholder="Full Name"
            />
          </label>
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
          <label className="input input-bordered flex items-center gap-2">
            <span class="label-text mr-3">Gender</span>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="gender" value="male" className="radio radio-xs radio-primary" />
                <span className="ml-2">Male</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="female" className="radio radio-xs radio-primary" />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </label>
          <button className="btn btn-neutral" type="submit">Sign Up</button>
          <p>Already have an account? <a href="/login" className="link">Login!</a></p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
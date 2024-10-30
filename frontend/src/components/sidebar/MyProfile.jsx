import React from 'react'
import Logout from './Logout'

const MyProfile = () => {
  return (
    <details className="dropdown dropdown-right dropdown-end">
      <summary tabIndex="0" role="button" className='btn p-0 m-0 btn-circle'><div className='w-10 h-10 rounded-full bg-neutral-100 bg-contain bg-center border' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}></div></summary>
      <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 ml-2 p-2 shadow">
        <li>
          <Logout />
        </li>
      </ul>
    </details >
  )
}

export default MyProfile
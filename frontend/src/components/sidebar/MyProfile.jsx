import React from 'react'
import Logout from './Logout'
import { useAuthContext } from '../../context/AuthContext';

const MyProfile = () => {
  const {user} = useAuthContext();
  return (
    <details className="dropdown dropdown-right dropdown-end">
      <summary tabIndex="0" role="button" className='btn p-0 m-0 btn-circle'>
        <img className='w-10 h-10 rounded-full' src={user.profilePic}/>
        </summary>
      <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 ml-2 p-2 shadow">
        <li>
          <Logout />
        </li>
      </ul>
    </details >
  )
}

export default MyProfile
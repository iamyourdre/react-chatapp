import React from 'react'
import { TbLogout } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';

const Logout = () => {
  const {loading, logout} = useLogout();

  return (
    <a className='text-red-500 font-semibold' onClick={logout}>
      {!loading ? (
        <><TbLogout className='text-lg'/> Logout</>
      ):(
        <><span className="loading loading-spinner loading-sm"></span> Logging Out</>
      )}
    </a>
  )
}

export default Logout
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='bg-white min-h-screen flex justify-center items-center'>
      <div className="drawer lg:drawer-open border-r">
        <input id="main-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-neutral-100 h-screen">
          <div>
            <MessageContainer />
            {/* <Outlet/> */}
          </div>
        </div>
        <Sidebar/>
      </div>
    </div>
  )
}

export default Home
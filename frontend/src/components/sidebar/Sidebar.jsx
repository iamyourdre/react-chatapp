import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsChatLeftQuoteFill } from "react-icons/bs";
import { HiMiniChatBubbleBottomCenterText, HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import MyProfile from './MyProfile';


const Sidebar = () => {
  
  const navItems = [
    { to: "/", activeIcon: <HiMiniChatBubbleBottomCenterText className='text-xl text-emerald-800' />, inactiveIcon: <HiOutlineChatBubbleBottomCenterText className='text-2xl' /> },
  ];

  return (
    <div className="drawer-side z-20">
      <label htmlFor="main-sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
      <div className='bg-white text-base-content min-h-screen w-96 border-r flex flex-row'>
        <div className='border-r p-4 flex flex-col m-0'>
          <div>
            <button className="w-10 h-10 flex justify-center items-center">
              <BsChatLeftQuoteFill className='p-0 m-0 text-3xl inline text-center' />
            </button>
          </div>
          <div className="grow flex flex-col gap-2 justify-center items-center">
            {navItems.map((item, index) => (
              <NavLink key={index} to={item.to}>
                {({ isActive }) =>
                  isActive ? (
                    <button className="w-10 h-10 flex rounded-2xl justify-center items-center bg-emerald-200">
                      {item.activeIcon}
                    </button>
                  ) : (
                    <button className="w-10 h-10 flex justify-center items-center">
                      {item.inactiveIcon}
                    </button>
                  )
                }
              </NavLink>
            ))}
          </div>
          <div>
            <MyProfile />
          </div>
        </div>

        <div className="grow flex flex-col gap-1">
          <div className='navbar px-3 text-xl border-b'>
            Chat
          </div>
          <SearchInput />
          <Conversations />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
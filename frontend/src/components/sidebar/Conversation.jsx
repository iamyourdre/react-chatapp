import React from 'react'
import { NavLink } from 'react-router-dom';
import useConversations from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation}) => {

  const {selectedConversation, setSelectedConversation} = useConversations();
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = (onlineUsers ?? []).includes(conversation._id);
  
  return (
    <div className={`
        focus:text-slate-700 focus:bg-transparent p-3 flex items-center active:bg-emerald-100 cursor-pointer gap-3 border-b
        ${isSelected ? 'hover:bg-emerald-200 bg-emerald-100' : 'hover:bg-emerald-50 bg-transparent'}
      `}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className='my-auto'>
        <div className={
          `w-10 h-10 avatar ${isOnline ? 'online' : ''}`
        }>
          <img className='rounded-full' src={conversation.profilePic}></img>
        </div>
      </div>
      <span className='font-semibold'>{conversation.fullName}</span>
      {/* <div className='flex-1'>
        <p className='flex justify-between'>
          <span className='font-semibold'>{person.name}</span>
          <span className='text-xs'>{shortTime(person.time)}</span>
        </p>
        <p className='text-slate-500 truncate max-w-56 text-sm'>
          {person.chat[0].text}
        </p>
      </div> */}
    </div>
  )
}

export default Conversation;
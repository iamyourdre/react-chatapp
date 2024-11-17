import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversations from '../../zustand/useConversation';

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversations();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    }
  }, [setSelectedConversation]);

  return (
    <>
      {!selectedConversation ? (
          <div className='flex justify-center items-center h-screen'>
            <div className='text-2xl text-gray-400'>Select a chat to start messaging</div>
          </div>
        ) :
        (
          <div className='relative'>
            <div className='navbar px-3 text-xl border-b bg-white w-full absolute z-10'>
              <div className='my-auto'>
                <img className='w-10 h-10 rounded-full' src={selectedConversation.profilePic}></img>
              </div>
              <span className='ml-2 text-base font-semibold'>{selectedConversation.fullName}</span>
            </div>
            <div className='px-6 flex-1 h-screen overflow-auto pt-20 pb-28'>
              <Messages />
            </div>
            <MessageInput />
          </div>
        )
      }
    </>
  )
}

export default MessageContainer
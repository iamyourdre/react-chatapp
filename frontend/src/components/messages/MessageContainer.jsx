import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <>
      {noChatSelected ? (
          <div className='flex justify-center items-center h-screen'>
            <div className='text-2xl text-gray-400'>Select a chat to start messaging</div>
          </div>
        ) :
        (
          <div className='relative'>
            <div className='px-6 flex-1 h-screen overflow-auto pt-6 pb-28'>
              <Messages />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
              <Messages />
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
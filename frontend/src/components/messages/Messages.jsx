import React, { useRef, useEffect } from 'react'
import useGetMessages from '../../hooks/useGetMessages';
import Message from './Message';
import { set } from 'mongoose';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const {messages, loading} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  
  useEffect (() => {
    setTimeout(() => {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  },[messages]);

  return (
    <>
      {loading && 
        <div className='h-full'>
          <div className="flex justify-center items-center h-full">
            <span class="loading loading-dots loading-lg text-emerald-400"></span>
          </div>
        </div>
      }
      {!loading && !messages.length && 
        <div className='h-full'>
          <div className="flex justify-center items-center h-full">
          <div className='text-2xl text-gray-400'>Let's start a conversation</div>
          </div>
        </div>
      }
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message.id} ref={lastMessageRef}>
          <Message key={message._id} message={message} />
        </div>
      ))}
    </>
  )
}

export default Messages
import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage('');
  }
  return (
    <form className="w-full absolute bottom-0 left-0 bg-white border-t p-4" onSubmit={handleSubmit}>
      <div className="flex items-center border-b border-teal-500 py-2">
        <input 
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Send a message..." aria-label="Full name"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
          Send
        </button>
      </div>
    </form>
  )
}

export default MessageInput
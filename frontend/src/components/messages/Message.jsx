import React from 'react'
import useConversation from '../../zustand/useConversation';
import {useAuthContext} from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const {user} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === user._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? user.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-emerald-400 text-white' : 'bg-gray-200 text-gray-800';
  const formattedTime = extractTime(message.createdAt);
  return (
    <div class={`chat ${chatClassName}`}>
      <div class="chat-image avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic} />
        </div>
      </div>
      <div class="chat-header">
        <time class="text-xs opacity-50">{formattedTime}</time>
      </div>
      <div class={`chat-bubble ${bubbleBgColor}`}>{message.message}</div>
    </div>
  )
}

export default Message
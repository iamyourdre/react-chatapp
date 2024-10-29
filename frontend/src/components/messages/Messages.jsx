import React from 'react'

const Messages = () => {
  return (
    <div class="chat chat-end">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div class="chat-header">
        Anakin&nbsp;
        <time class="text-xs opacity-50">12:46</time>
      </div>
      <div class="chat-bubble">I hate you!</div>
    </div>
  )
}

export default Messages
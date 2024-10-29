import React from 'react'
import { dummyChat } from './chats';
import Conversation from './Conversation';


const Conversations = () => {
  return (
    <div>
      {dummyChat.map((person) => (
        <Conversation person={person}/>
      ))}
    </div>
  )
}

export default Conversations
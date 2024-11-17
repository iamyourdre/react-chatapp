import React from 'react'
import { dummyChat } from './chats';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  return (
    <div>
      {conversations.map((conversation) => (
        <div key={conversation._id}>
          <Conversation 
            conversation={conversation}
          />
        </div>
      ))}
    </div>
  )
}

export default Conversations
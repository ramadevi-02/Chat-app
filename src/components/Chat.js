import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import ChatRoom from './ChatRoom';

const Chat = () => {
  const [activeChat, setActiveChat] = useState('Chat 1');
  const [messages, setMessages] = useState({
    'radhika': [],
    'yolo': [],
    'abhee': [],
  });
  const [message, setMessage] = useState('');

  const chats = ['radhika', 'yolo', 'abhee'];

  const sendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [activeChat]: [...prevMessages[activeChat], message.trim()],
      }));
      setMessage('');
    }
  };

  return (
    <Flex className="chat-container">
      <Sidebar chats={chats} selectChat={setActiveChat} activeChat={activeChat} /> 
      <ChatRoom
        messages={messages[activeChat] || []}
        sendMessage={sendMessage}
        message={message}
        setMessage={setMessage}
      />
    </Flex>
  );
};

export default Chat;

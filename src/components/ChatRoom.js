import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import Message from './Message';
import ChatInput from './ChatInput';

const ChatRoom = ({ messages, sendMessage, message, setMessage }) => {
  return (
    <Box 
      flex="1" 
      p={4} 
      borderWidth={1} 
      borderRadius="md" 
      bg="white" 
      boxShadow="lg" 
      overflowY="auto"
    >
      <VStack spacing={2} align="stretch">
        {messages.map((msg, index) => (
          <Message key={index} text={msg} />
        ))}
      </VStack>
      <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </Box>
  );
};

export default ChatRoom;

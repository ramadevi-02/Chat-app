import React from 'react';
import { Input, Button, HStack } from '@chakra-ui/react';

const ChatInput = ({ message, setMessage, sendMessage }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <HStack mt={4}>
      <Input
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        borderColor="gray.400"
        focusBorderColor="blue.400"
        size="lg"
        variant="outline"
        _placeholder={{ color: 'gray.500' }}
      />
      <Button 
        onClick={sendMessage} 
        colorScheme="blue" 
        size="lg"
        _hover={{ bg: 'blue.300' }}
      >
        Send
      </Button>
    </HStack>
  );
};

export default ChatInput;

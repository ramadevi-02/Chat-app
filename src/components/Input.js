import React from 'react';
import { Input, Button, HStack } from '@chakra-ui/react';

const ChatInput = ({ message, setMessage, sendMessage }) => {
  return (
    <HStack mt={4}>
      <Input
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={sendMessage} colorScheme="blue">
        Send
      </Button>
    </HStack>
  );
};

export default ChatInput;

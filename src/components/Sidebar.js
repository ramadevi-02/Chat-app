import React from 'react';
import { Box, VStack, Button } from '@chakra-ui/react';

const Sidebar = ({ chats, selectChat, activeChat }) => {
  return (
    <Box width="250px" borderRightWidth={1} p={4} bg="gray.50">
      <VStack spacing={4} align="stretch">
        {chats.map((chat) => (
          <Button 
            key={chat} 
            onClick={() => selectChat(chat)} 
            variant="outline" 
            colorScheme={activeChat === chat ? "blue" : "gray"} 
            fontSize="lg"
            borderWidth={activeChat === chat ? '2px' : '1px'}
            borderColor={activeChat === chat ? 'blue.500' : 'gray.300'}
            _hover={{ bg: activeChat === chat ? 'blue.100' : 'gray.100' }}
          >
            {chat}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;

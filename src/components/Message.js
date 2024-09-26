import React from 'react';
import { Text, Box } from '@chakra-ui/react';

const Message = ({ text }) => {
  return (
    <Box
      bg="blue.100"
      p={3}
      borderRadius="md"
      mb={2}
      boxShadow="md"
      transition="0.2s"
      _hover={{ bg: 'blue.200' }}
    >
      <Text fontSize="lg">{text}</Text>
    </Box>
  );
};

export default Message;

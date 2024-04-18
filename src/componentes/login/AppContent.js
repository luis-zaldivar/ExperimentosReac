// AppContent.js
import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const AppContent = () => {
  return (
    <Box>
      <Box mb={4}>
        <Button colorScheme="red">Cerrar sesión</Button>
      </Box>
      <Box p={5} bg="gray.100" borderRadius="md">
        {/* Contenido de la aplicación */}
        <Box fontSize="xl">¡Bienvenido a la aplicación!</Box>
      </Box>
    </Box>
  );
};

export default AppContent;

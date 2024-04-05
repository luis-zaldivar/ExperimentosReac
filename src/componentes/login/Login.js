import React from "react";
import { ChakraProvider, Box, Flex, Avatar, Wrap, WrapItem } from "@chakra-ui/react";

const Login = () => {
  return (
    <ChakraProvider>
      <Box className="tarjeta-contenedor"> {/* Usa la clase para el contenedor */}
        <Box
          width="500px"
          border="1px solid #ccc"
          borderRadius="10px"
          margin="0 auto"
          backgroundColor="#2f3b63"
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
          p="4"
        >
          <Flex justifyContent="space-between">
            <Box
              width="calc(50% - 0.5rem)" // Calcula el ancho de cada tarjeta
              height="300px"
              border="1px solid #ccc"
              borderRadius="10px"
              backgroundColor="#ffffff" // Cambiar el color de fondo según necesites
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
              p="4"
            >
              {/* Contenido de la primera tarjeta */}
            </Box>
            <Box
              width="calc(50% - 0.5rem)" // Calcula el ancho de cada tarjeta
              height="300px"
              border="1px solid #ccc"
              borderRadius="10px"
              backgroundColor="#ffffff" // Cambiar el color de fondo según necesites
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
              p="4"
              position="relative" // Posición relativa para el avatar
            >
              {/* Contenido de la segunda tarjeta */}
              <Wrap justify="center" position="absolute" top="0" left="0" right="0" bottom="0">
                <WrapItem>
                  <Avatar size="xl" src="url_del_avatar" /> {/* Reemplaza 'url_del_avatar' con la URL de tu imagen de avatar */}
                </WrapItem>
              </Wrap>
            </Box>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Login;
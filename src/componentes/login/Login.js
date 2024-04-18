import React from "react";
import { ChakraProvider, Box, Flex, Avatar, Wrap, WrapItem, Input, Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <ChakraProvider>
      <Box className="tarjeta-contenedor">
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
              width="calc(50% - 0.5rem)"
              height="300px"
              border="1px solid #ccc"
              borderRadius="10px"
              backgroundColor="#ffffff"
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
              p="4"
            >
              {/* Contenido de la primera tarjeta */}
            </Box>
            <Box
              width="calc(50% - 0.5rem)"
              height="300px"
              border="1px solid #ccc"
              borderRadius="10px"
              backgroundColor="#ffffff"
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
              p="4"
              position="relative"
            >
              {/* Contenido de la segunda tarjeta */}
              <Wrap justify="center" position="absolute" top="0" left="0" right="0" bottom="0" mb="20">
                <WrapItem>
                  <Avatar size="xl" src="url_del_avatar" />
                </WrapItem>
              </Wrap>
              <Box mt="100">
                <Input placeholder="Username" mb="4" />
                <Input type="password" placeholder="Password" mb="4" />
                <Button width="100%" mb="4" backgroundColor="#2f3b63" color="#ffffff">
                  Log in
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Login;
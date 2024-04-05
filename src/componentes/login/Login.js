import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";

const Login = () => {
  return (
    <ChakraProvider>
      <div className="tarjeta-contenedor">
        <Box
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          className="tarjeta"
        >
          {/* Contenido de la tarjeta */}
        </Box>
      </div>
    </ChakraProvider>
  );
};

export default Login;

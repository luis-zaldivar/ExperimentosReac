import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './componentes/login/Login.js';
import './CSS/StiloLog.css'; // Importar los estilos aquí

const App = () => {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
};

export default App;

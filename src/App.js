import logo from './logo.svg';
import './App.css';
import { Box, Img } from '@chakra-ui/react';
import Headers from './components/headers.jsx';

function App() {
  return (
    <Box maxW={'1531px'} m={'auto'} >
      {/* header section  */}
      <Headers/>

    </Box>
  );
}

export default App;

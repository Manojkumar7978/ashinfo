import logo from './logo.svg';
import './App.css';
import { Box, Img } from '@chakra-ui/react';
import Headers from './components/headers.jsx';
import Content from './components/content.jsx';

function App() {
  return (
    <Box maxW={'1531px'} m={'auto'} >
      {/* header section  */}
      <Headers/>
      <Content/>
    </Box>
  );
}

export default App;

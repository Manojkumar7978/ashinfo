import logo from './logo.svg';
import './App.css';
import { Box, Img } from '@chakra-ui/react';
import Headers from './components/headers.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <Box maxW={'1531px'} m={'auto'} p={[2,0,0]} >
      {/* header section  */}
      <Headers/>
      <Content/>
      <Footer/>
    </Box>
  );
}

export default App;

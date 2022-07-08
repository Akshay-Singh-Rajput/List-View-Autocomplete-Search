import { Text } from '@chakra-ui/react';
import './App.css';
import { BasicUserCards } from './components/BasicUserCards';
import { DisplayModal } from './components/Modal';

function App() {

  return (
    <div className="App">
      <Text fontSize='6xl' m='5'>Rick and Morty Search</Text>
      <BasicUserCards />
      

    </div>
  );
}

export default App;

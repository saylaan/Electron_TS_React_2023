import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import chakraTheme from '@chakra-ui/theme';
/* Components Import */
import { BasicLayout } from './layouts/BasicLayout';
import { Alarm } from './components/Alarm';

const { Button } = chakraTheme.components;

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendBaseTheme({
  components: {
    Button,
  },
  colors,
});

const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <BasicLayout>
                <Alarm />
              </BasicLayout>
            }
          />
        </Routes>
      </Router>
    </ChakraBaseProvider>
  );
};

export default App;

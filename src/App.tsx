import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
/* Components Import */
import { AppRoutes as Routes } from './components/Routes';
import { BasicLayout } from './layouts/BasicLayout';

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
      <BasicLayout>
        <Routes />
      </BasicLayout>
    </ChakraBaseProvider>
  );
};

export default App;

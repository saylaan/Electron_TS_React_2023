import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
/* Components Import */
import { BasicLayout } from './layouts/BasicLayout';
import { Clock } from './components/Clock';

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
  // function App({ Component, pageProps }: any) {
  // const onGetAlarms = useCallback(async () => {
  //   try {
  //     const res: UserModel[] | undefined = await getUsersRequest();
  //     if (res) setData(res);
  //   } catch (error) {
  //     const typedError = error as Error;
  //     setErrorMessage(typedError.message);
  //   }
  // }, []);

  // useEffect(() => {
  //   onGetAlarms();
  // }, [onGetAlarms]);

  return (
    <ChakraBaseProvider theme={theme}>
      <BasicLayout>
        <Clock />
      </BasicLayout>
    </ChakraBaseProvider>
  );
};

export default App;

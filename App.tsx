import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text } from 'native-base';
import { THEME } from './src/theme';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Splash } from './src/screens/Splash';

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
  <NativeBaseProvider theme={THEME}>
    <StatusBar 
      style='light' 
      backgroundColor='transparent' 
      translucent
    />
    {fontsLoaded ? <Splash/> : <Text>Carregando</Text> }
  </NativeBaseProvider>
  );
}
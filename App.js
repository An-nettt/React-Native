import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require('./assets/fonts/RobotoRegular.ttf'),
    RobotoMedium: require('./assets/fonts/RobotoMedium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <RegistrationScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// {/* <View style={styles.container}>
//   <Text>Open up App.js to start working on your app!</Text>

//   {/* <StatusBar style="auto" /> */}
// </View> */}

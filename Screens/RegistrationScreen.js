import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={import('../images/backGroudImage.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Реєстрація</Text>
        <TextInput placeholder="Логін" />
        <TextInput placeholder="Адреса електронної пошти" />
        <TextInput placeholder="Пароль" />
        <Button title="Зареєстуватися" />
        <Text>Вже є акаунт? Увійти</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    // flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default RegistrationScreen;

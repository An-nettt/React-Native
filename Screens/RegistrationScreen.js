import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from 'react-native';

const imageBG = require('../images/backGroudImage.png');

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBG} resizeMode="cover" style={styles.image}>
        <ImageBackground style={styles.bg}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput placeholder="Логін" />
          <TextInput placeholder="Адреса електронної пошти" />
          <TextInput placeholder="Пароль" />
          <Button title="Зареєстуватися" style={styles.button} />
          <Text style={styles.text}>Вже є акаунт? Увійти</Text>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: '100%',
    height: '100%',
    top: '32.4%',
    // flex: 3,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#212121',
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF6C00',
    width: 343,
    height: 51,
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: 'center',
  },
  text: {
    color: '#1B4371',
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: 'center',
  },
});

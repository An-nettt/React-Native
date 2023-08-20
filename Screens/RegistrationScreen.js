import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  TouchableHighlight,
  Image,
} from 'react-native';

const imageBG = require('../images/backGroudImage.png');
const add = require('../images/add.png');

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBG} resizeMode="cover" style={styles.image}>
        <View style={styles.bg}>
          <View style={styles.photo}>
            <Image source={add} style={styles.addPhoto} />
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput placeholder="Логін" style={styles.input} />
          <TextInput
            placeholder="Адреса електронної пошти"
            style={styles.input}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Пароль"
              style={styles.input}
              secureTextEntry={true}
            />
            <Text style={styles.passwordText}>Показати</Text>
          </View>

          <TouchableHighlight
            style={{
              width: '91%',
              height: 50,
              marginTop: 27,
              paddingTop: 16,
              paddingBottom: 16,
              fontFamily: 'Roboto',
              fontSize: 16,
              lineHeight: 18.75,
              alignSelf: 'center',
              borderRadius: 100,
              backgroundColor: '#FF6C00',
            }}
          >
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </TouchableHighlight>

          <Text style={styles.text}>Вже є акаунт? Увійти</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    position: 'absolute',
    top: -60,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  addPhoto: {
    top: 81,
    left: 107,
  },
  bg: {
    width: '100%',
    height: '100%',
    top: '30%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginTop: 92,
    marginBottom: 32,

    color: '#212121',
    fontFamily: 'RobotoMedium',
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: 'center',
  },
  input: {
    padding: 16,
    marginBottom: 16,
    alignSelf: 'center',

    height: 50,
    width: '91%',
    fontFamily: 'Roboto',
    fontSize: 16,

    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    // placeholderTextColor: '#BDBDBD',
  },
  passwordText: {
    position: 'absolute',
    right: 36,
    bottom: 16,
    transform: [{ translateY: -14 }],

    fontSize: 16,
    color: '#1B4371',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  text: {
    marginTop: 16,
    color: '#1B4371',
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: 'center',
  },
});

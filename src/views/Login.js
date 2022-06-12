import React, {Component, useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
  Dimensions,
  Image,
  ToastAndroid,
} from 'react-native';
import Navigation from '../../Navigation';
import Inputs from '../components/Inputs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from '../api';
import PushNotification from 'react-native-push-notification';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: '1',
      channelName: 'Get sensor data',
    });
  };

  useEffect(() => {
    createChannel();
  });

  const login = async () => {
    try {
      const {data} = await axios.post('/auth/login', {
        username,
        password,
      });
      if (data.success) {
        ToastAndroid.showWithGravity(
          'Login Successfully!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
        navigation.navigate('UnconnectedDevice');
      }
    } catch (e) {
      console.error(e);
      ToastAndroid.showWithGravity(
        'Login Failed!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  };
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: 'https://i.pinimg.com/736x/01/53/e9/0153e9c15f300a4929f2ae617be68b85.jpg',
      }}
      resizeMode="stretch">
      <View style={styles.container}>
        <Text style={styles.title}>đăng nhập</Text>
        <View style={styles.square}>
          <Inputs
            name="Tên người dùng"
            icon="user"
            value={username}
            text={text => setUsername(text)}
          />
          <Inputs
            name="Mật khẩu"
            icon="key"
            value={password}
            pass={true}
            text={text => setPassword(text)}
          />
        </View>
        <View style={styles.questionView}>
          <Text style={styles.questionText}>Quên mật khẩu? Nhấn vào</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.onClickText}> đây</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonName}>đăng nhập</Text>
        </TouchableOpacity>

        <View style={styles.questionView}>
          <Text style={styles.questionText}>Chưa có tài khoản?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.onClickText}> Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'relative',
    width: windowWidth,
    height: windowHeight,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    //height: '80%',
  },
  title: {
    //position: 'absolute',
    // width: 0.5 * windowWidth,
    // height: 0.07 * windowHeight,
    marginTop: '30%',
    fontSize: 30,
    //justifyContent: 'center',
    textAlign: 'center',
    color: '#FBFBFB',
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Ubuntu',
    lineHeight: 34,
    textTransform: 'uppercase',
    //marginVertical: 10,
  },

  square: {
    //position: 'absolute',
    width: '100%',
    //height: '50%',
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //backgroundColor: '#DCE8F5',
    borderRadius: 5,
  },

  questionView: {
    //position: 'absolute',
    width: '100%',
    height: 25,
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    //position: 'absolute',

    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  onClickText: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#424B5A',
    marginTop: '10%',
    //marginBottom: '7%',
    width: 0.4 * windowWidth,
    height: '8%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonName: {
    //position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    //left: '30.99%',
    //right: '32.28%',
    //top: 13.5,

    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    //backgroundColor: 'white',
  },
});

export default Login;

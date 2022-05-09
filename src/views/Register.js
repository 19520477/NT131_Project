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
} from 'react-native';
import Navigation from '../../Navigation';
import Inputs from '../components/Inputs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from '../api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Register({navigation}) {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      let {data} = await axios.post('/auth/register', {
        username,
        fullname,
        password,
      });

      if (data.success) {
        alert('Regist Successfully');
        navigation.navigate('Login');
      }
    } catch (err) {
      alert('Regist Failed');
      console.error(err);
    }
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require('../images/background_img/login_background.png')}
      resizeMode="stretch">
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Register</Text>
          <View style={styles.square}>
            <Inputs
              name="Username"
              icon="user"
              value={username}
              text={text => setUsername(text)}
            />
            <Inputs
              name="Fullname"
              icon="user"
              value={fullname}
              text={text => setFullname(text)}
            />
            <Inputs
              name="Password"
              icon="key"
              value={password}
              pass={true}
              text={text => setPassword(text)}
            />
          </View>
          <View style={styles.questionView}>
            <Text style={styles.questionText}>Forgot Password?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.onClickText}> Click Here</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={register}>
            <Text style={styles.buttonName}>register</Text>
          </TouchableOpacity>

          <View style={styles.questionView}>
            <Text style={styles.questionText}>Don’t have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.onClickText}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    height: 1.3 * windowHeight,
  },
  title: {
    //position: 'absolute',
    width: 0.5 * windowWidth,
    height: 0.07 * windowHeight,
    //left: '25%',
    //right: '50%',
    marginTop: '30%',
    fontSize: 30,
    //justifyContent: 'center',
    textAlign: 'center',
    //textAlignVertical: 'center',
    //alignItems: 'center',
    color: '#FBFBFB',
    fontWeight: 'bold',
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
    marginTop: 10,
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
    textTransform: 'capitalize',
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  onClickText: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    textTransform: 'capitalize',
    color: '#283ACF',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },

  button: {
    //position: 'absolute',
    //top: '70%',
    //bottom: '25%',
    backgroundColor: '#424B5A',
    marginTop: '10%',
    marginBottom: '7%',
    width: 0.35 * windowWidth,
    height: 0.08 * windowHeight,
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

export default Register;

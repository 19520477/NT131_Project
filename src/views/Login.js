import React, {Component, useState} from 'react';
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
  Image
} from 'react-native';
import Navigation from '../../Navigation';
import Inputs from '../components/Inputs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Icon} from 'react-native-elements';
import {Feather} from "react-native-vector-icons";

function Login ({navigation}) {
    //const [visible, setVisible] = useState(true);
    return (
        <ImageBackground style = {styles.background} 
            source = {require('../images/background_img/login_background.png')} resizeMode='stretch'>
            <View style={styles.container}>
                <Text style = {styles.title}>LOGIN</Text>
                <View style = {{marginTop: 10}}/>
                <Inputs name="Email"/>
                <Inputs name="Password"/> 
                
                <Text style={styles.forgotPassword}>Forgot your password?
                    <Text style={styles.clickHere}> Click here</Text>
                </Text>
                
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('UnconnectedDevice')}>
                    <Text style = {styles.buttonName}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            
        </ImageBackground>
    );
};

const styles = StyleSheet.create ({
    background: {
        position: 'relative',
        width: '100%',
        height: '100%',
        //background: '#FFFFFF',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        position: 'absolute',
        width: 170,
        height: 71,
        left: '25%',
        right: '50%',
        top: '18%',
        fontSize: 30,
        //justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        //alignItems: 'center',
        color: '#FBFBFB',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontFamily: 'Ubuntu',
        lineHeight: 34,
        textTransform: 'uppercase',
        marginVertical: 10,
    },  
    forgotPassword: {
        position: 'absolute',
        width: 270,
        height: 40,
        left: 20,
        top: 408,
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: "300",
        fontSize: 12,
        lineHeight: 14,
        textTransform: 'capitalize',
        color: '#000000',
    },
    clickHere: {
        position: 'absolute',
        width: 270,
        height: 40,
        left: 20,
        top: 408,
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: "300",
        fontSize: 12,
        lineHeight: 14,
        textTransform: 'capitalize',
        color: '#283ACF',
    },
    button: {
        position: 'absolute',
        left: 110,
        right: 95,
        top: '70%',
        bottom: '25%',
        backgroundColor: '#424B5A',
        marginTop: 30,
        width: 130,
        height: 43,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    }, 
    buttonName: {
        position: 'absolute',
        height: 30,
        width: 60,
        //left: '30.99%',
        //right: '32.28%',
        top: 13.5,

        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 16,
        textAlign: 'center',
        textTransform: 'uppercase',

        color: '#FFFFFF',
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
});

export default Login;
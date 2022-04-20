import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import login_bg_img from '../images/background_img/login_background.png';
import ToolBar from '../components/ToolBar';
import DeviceItem from '../components/DeviceItem';

const UnconnectedDevice = props => {
    const [device, setDevice] = useState([
        {name: 'Thiet bi Arduino 1', key: '1'},
        {name: 'Thiet bi Arduino 2', key: '2'},
        {name: 'Thiet bi Arduino 3', key: '3'},
        {name: 'Thiet bi Arduino 4', key: '4'},
        {name: 'Thiet bi Arduino 5', key: '5'},
        {name: 'Thiet bi Arduino 6', key: '6'},
    ]);
    return (
        <ImageBackground style = {styles.background} source = {login_bg_img} resizeMode='stretch'>
            <ScrollView>
            <View style = {styles.container}>
                <Text style = {styles.title}>XIN CHAO!</Text>
                <Text style = {styles.requireConnect}>Truoc het, hay ket noi voi mot thiet bi do Adruino dang hien thi nhe</Text>
                <View style = {styles.square}>
                    <FlatList
                    data = {device}
                        renderItem={({item}) => <DeviceItem item={item}/>}
                        />
                </View>
                
            </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create ({
    background: {
        position: 'relative',
        width: '100%',
        height: '100%',

        background: '#FFFFFF',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 1635,
    },
    title:{
        position: 'absolute',
        width: 270,
        height: 71,
        left: 75,
        top: 30,
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontFamily: 'Ubuntu',
        lineHeight: 34,
        textTransform: 'uppercase',
    },   
    requireConnect: {
        position: 'absolute',
        width: '95%',
        height: 59,
        left: 15,
        top: 86,
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 24,
        alignItems: 'center',
        color: '#000000',
    },
    square: {
        position: 'absolute',
        width: '90%',
        height: 334,
        left: 15,
        top: 157,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#DCE8F5',
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
});

export default UnconnectedDevice;
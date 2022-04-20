import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList
} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import login_bg_img from '../images/background_img/login_background.png';
//import ToolBar from '../components/ToolBar';
import DeviceItem from '../components/DeviceItem';

function UnconnectedDevice({navigation}) {
    const [device, setDevice] = useState([
        {name: 'Thiet bi Arduino 1'},
        {name: 'Thiet bi Arduino 2'},
        {name: 'Thiet bi Arduino 3'},
        {name: 'Thiet bi Arduino 4'},
        {name: 'Thiet bi Arduino 5'},
        {name: 'Thiet bi Arduino 6'},
    ]);
    return (
        <ImageBackground style = {styles.background} source = {login_bg_img} resizeMode='stretch'>
            <ScrollView>
            <View style = {styles.container}>
                <Text style = {styles.title}>XIN CHAO!</Text>
                <Text style = {styles.requireConnect}>Truoc het, hay ket noi voi mot thiet bi do Adruino dang hien thi nhe</Text>
                <ScrollView nestedScrollEnabled={true} style = {styles.square}>
                    {device.map((item) => <DeviceItem item={item}/>)}
                </ScrollView>
                
            </View>
            <View style = {styles.navigationBar}>
      <TouchableOpacity style = {styles.navigationIcon}
        onPress={() => navigation.navigate('UnconnectedDevice')}>
        <Image source={require('../images/navigation_icons/search_icon.png')} resizeMode={'stretch'}/>
      </TouchableOpacity>
      
      <TouchableOpacity style = {styles.navigationIcon}
        onPress={() => navigation.navigate('Login')}>
        <Image source={require('../images/navigation_icons/forward_icon.png')} resizeMode={'stretch'}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.navigationIcon}
        onPress={() => navigation.navigate('ConnectedDevice')}>
        <Image style = {styles.iconImg} source={require('../images/navigation_icons/home_icon.png')} resizeMode={'stretch'}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.navigationIcon}
        onPress={() => navigation.navigate('ViewDetail')}>
        <Image source={require('../images/navigation_icons/image_12_icon.png')} resizeMode={'stretch'}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.navigationIcon}
        onPress={() => navigation.navigate('Credits')}>
        <Image source={require('../images/navigation_icons/profile_icon.png')} resizeMode={'stretch'}/>
      </TouchableOpacity>
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
        height: 344,
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
    navigationBar: {
        position: 'absolute',
        width: '95%',
        height: 62,
        left: 9,
        //top: 550,
        bottom: 10,
        //top: 625,
        flexDirection: 'row',
        backgroundColor: '#F4F2F2',
        borderRadius: 15,
        padding: 10,
      },
      navigationIcon: {
        flex: 1,
        left: 3,
        //paddingTop: 10,
        //paddingLeft: 10,
        //width: 90,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        //alignContent: 'center',
        //backgroundColor: 'pink',
        borderRadius: 10,
      },
      iconImg: {
        width: '80%',
        height: '100%',
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
});

export default UnconnectedDevice;
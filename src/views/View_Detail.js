import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import login_bg_img from '../images/background_img/login_background.png';
import FactorItem from '../components/FactorItem';

function Detail({navigation}) {
    const [factor, setFactor] = useState([
        {name: 'UV Ratio', key: '1'},
        {name: 'Temperature', key: '2'},
        {name: 'Feel like', key: '3'},
    ]);
    return ( 
        <ImageBackground style = {styles.background} source = {login_bg_img} resizeMode='stretch'>
            <ScrollView>
            <View style = {styles.container}>
                <Image style = {styles.weatherImg} source={require("../images/show_password_icon.png")}/>
                <Text style = {styles.title}>37, HOT</Text>
                <View style = {styles.square}>
                    {
                        factor.map((item) => <FactorItem item={item}/>)
                    }
                </View>
                <Text style = {styles.adviceTitle}>Loi khuyen cua bac si</Text>
                <View style = {styles.adviceView}>
                    <Text style = {styles.adviceContent}>data</Text>
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
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignContent: 'center',
        width: '100%',
        height: 1635,
        position: 'relative',
        background: '#fff',
    },
    background: {
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#FFFFFF',
    },
    title:{
        position: 'absolute',
        width: '92%',
        height: 35,
        left: 15,
        top: 194,
        fontSize: 28,
        //justifyContent: 'center',
        textAlign: 'left',
        alignItems: 'center',
        color: '#D57284',
        fontWeight: '700',
        fontStyle: 'normal',
        fontFamily: 'Ubuntu',
        lineHeight: 30,
        textTransform: 'uppercase',
    }, 
    weatherImg: {
        width: '100%',
        height: 158,
        backgroundColor: '#fff',        
    } ,
    square: {
        top: 230,
        width: '95%',
        position: 'absolute',
        height: 330,
        left: 10,
        right: 10,
        
    },  
    adviceTitle: {
        position: 'absolute',
        width: '92%',
        height: 35,
        left: 15,
        top: 550,
        fontSize: 20,
        //justifyContent: 'center',
        textAlign: 'left',
        alignItems: 'center',
        color: '#000',
        fontWeight: '700',
        fontStyle: 'normal',
        fontFamily: 'Ubuntu',
        lineHeight: 24,
    }, 
    adviceView: {
        top: 590,
        width: '92%',
        position: 'absolute',
        height: 330,
        left: 10,
        right: 10,
        backgroundColor: '#f1f4f8'
    },       
    adviceContent: {
        width: '100%',
        //height: 30,
        padding: 10,
        fontSize: 12,
        color: '#000',
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 24,
        display: 'flex',
        textAlign: 'left',
    } ,
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

export default Detail;
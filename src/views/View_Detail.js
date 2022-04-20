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

const Detail = props => {
    const [factor, setFactor] = useState([
        {name: 'UV Ratio', key: '1'},
        {name: 'Temperature', key: '2'},
        {name: 'Feel like', key: '3'},
    ]);
    return (
        
        <ImageBackground style = {styles.background} source = {login_bg_img} resizeMode='stretch'>
            <ScrollView >
            <View style = {styles.container}>
                <Image style = {styles.weatherImg} source={require("../images/show_password_icon.png")}/>
                <Text style = {styles.title}>37, HOT</Text>
                <SafeAreaView style = {styles.square}>
                    {
                        factor.map((item) => <FactorItem item={item}/>)
                    }
                </SafeAreaView>
                <Text style = {styles.adviceTitle}>Loi khuyen cua bac si</Text>
                <View style = {styles.adviceView}>
                    <Text style = {styles.adviceContent}>data</Text>
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
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
});

export default Detail;
import React, {useEffect, useState} from 'react';
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
  FlatList,
  Image
} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import bg_img from '../images/background_img/hot_bg_img.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FactorItem from '../components/FactorItem';

function ConnectedDevice ({navigation}) {
    const [greet, setGreet] = useState();
    
    const findGreet = () => {
        const hours = new Date().getHours()
        if(hours === 0 || hours < 12) return setGreet('Morning');
        if(hours === 12 || hours < 18) return setGreet('Afternoon');
        else return setGreet('Evening');
    }

    useEffect(() => {
        findGreet();
    }, []);

    const [accessory, setAccessory] = useState ([
        {name: "Vay chong nang", key: '1'},
        {name: "Kinh ram", key: '2'},
    ]);
    return (
        <ImageBackground style = {styles.background} source = {bg_img} resizeMode='stretch'>
            <ScrollView>
            <View style = {styles.container}>
                <Text style = {styles.greeting}>{`Good ${greet}, Mai Dung`}</Text>

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('ViewDetail')}>
                    <Text style = {styles.buttonName}>VIEW DETAIL</Text>
                </TouchableOpacity>

                <View style = {styles.infoView}>
                    <Text style = {styles.infoTitle}>Hot weather</Text>
                    <Image style = {styles.infoImage}/>
                    <Text style = {styles.infoContent}>data</Text>
                </View>

                <Text style = {styles.accessoryTitle}>Phu kien cho hom nay</Text>

                <View style = {styles.square}>
                <FlatList
                    data = {accessory}
                            renderItem={({item}) => <FactorItem item={item}/>}
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
        width: '100%',
        height: 1635,
    },   
    greeting: {
        paddingTop: 18,
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'center',
        color: '#000000',
    },  
    button: {
        position: 'absolute',
        width: '80%',
        height: 43,
        backgroundColor: '#424B5A',
        top: 394,
        left: 36,
        right: 16,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    buttonName: {
        position: 'absolute',
        height: 30,
        width: '100%',
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
    accessoryTitle: {
        position: 'absolute',
        width: '92%',
        height: 35,
        left: 15,
        top: 800,
        fontSize: 20,
        //justifyContent: 'center',
        textAlign: 'left',
        alignItems: 'center',
        color: '#fff',
        fontWeight: '700',
        fontStyle: 'normal',
        fontFamily: 'Ubuntu',
        lineHeight: 24,
    },      
    square: {
        top: 830,
        width: '95%',
        position: 'absolute',
        height: 330,
        left: 10,
        right: 10,
        
    },   
    infoView: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        top: 430,
        width: '92%',
        height: 300,
        left: 15,
        right: 10,
    }, 
    infoTitle: {
        position: 'absolute',
        width: '92%',
        height: 45,
        padding: 10,
        //left: 15,
        //top: 550,
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
    infoImage: {
        top: 50,
        width: '97%',
        height: 140,
        backgroundColor: '#000',
        alignContent: 'center',
        left: 5,
        right: 5,
    },
    infoContent: {
        width: '100%',
        //height: 30,
        top: 60,
        padding: 5,
        fontSize: 12,
        color: '#000',
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 24,
        display: 'flex',
        textAlign: 'left',
        backgroundColor: 'pink',
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
});

export default ConnectedDevice;
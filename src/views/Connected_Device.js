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
import ProgressCircle from 'react-native-progress-circle';

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
        {name: "Vay chong nang"},
        {name: "Kinh ram"},
    ]);
    return (
        <ImageBackground style = {styles.background} source = {bg_img} resizeMode='stretch'>
            <ScrollView nestedScrollEnabled={true}>            
            <SafeAreaView style = {styles.container}>
                <Text style = {styles.greeting}>{`Good ${greet}, Mai Dung`}</Text>

                <View style = {styles.progressCircleView}>
                <ProgressCircle
                percent={30}
                radius={100}
                borderWidth={10}
                color="#424B5A"
                containerStyle={styles.containerCircle}
                outerCircleStyle={styles.outerCircleView}
                //style = {styles.circle}
                //shadowColor="#999"
                //bgColor="#fff"
                >
                <Text style={{ fontSize: 18 }}>{'30%'}</Text>
            </ProgressCircle>
            </View>

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

                <SafeAreaView style = {styles.square}>
                {
                    accessory.map((item) => <FactorItem item={item}/>)
                }
                
                </SafeAreaView>
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
            </SafeAreaView>
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
    progressCircleView: {
        top: 85,
        width: '100%',
        height: 212,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerCircleView: {
        
        width: 200,
        height: 200,
        left: 10,
        right: 10,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
    },
    containerCircle: {
        width: 150,
        height: 150,
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
        flex: 1,
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
        top: 220,
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
        //top: 800,
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
        width: '97%',
        left: 5,
        right: 5,
        height: 80,
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

export default ConnectedDevice;
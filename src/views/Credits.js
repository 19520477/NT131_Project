import React, {Component} from 'react';
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
} from 'react-native';
//import { normalize } from 'react-native-elements';
//import ToolBar from '../components/ToolBar';
import bg_img from '../images/background_img/credits_bg_img.png';

function Credits({navigation}) {
    return (
        <ImageBackground style = {styles.background} source = {bg_img} resizeMode='stretch'>
            <ScrollView>
            <View style = {styles.container}>
                <Text style = {styles.title}>CREDITS</Text>
                <View style = {{top: 170}}>
                    <Text style = {styles.childTitle}>Contributors</Text>
                </View>
                <View style = {{width: 177,
                                height: 110,
                                top: 205,
                                left: 71, }}>
                    <Text style = {styles.content}>Nguyen Duy Tung</Text>
                    <Text style = {styles.content}>Tran Thai Tuan Anh</Text>
                    <Text style = {styles.content}>Pham Mai Dung</Text>
                </View>
                <View style = {{top: 260}}>
                    <Text style = {styles.childTitle}>Dispatched as</Text>
                </View>
                
                <View style = {{width: 258,
                                height: 98,
                                marginLeft: 31,
                                marginTop: 295 }}>
                    <Text style = {styles.content}>Do an He thong Nhung</Text>
                    <Text style = {styles.content}>HK2 2021-2022</Text>
                    <Text style = {styles.content}>GVHD: Nguyen Khanh Thuat</Text>
                </View>

                <View style = {{top: 90}}>
                    <Text style = {styles.childTitle}>Core Technologies</Text>
                </View>
                
                <View style = {{width: 177,
                                height: 98,
                                marginLeft: 71,
                                marginTop: 125 }}>
                    <Text style = {styles.content}>React Native</Text>
                    <Text style = {styles.content}>NodeJS</Text>
                    <Text style = {styles.content}>Mongo Cloud Cluster</Text>
                    <Text style = {styles.content}>Firebase</Text>
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
    background: {
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#FFFFFF',
    },
    container: {
        flex: 1,
        alignContent: 'center',
        width: '100%',
        height: 1635,
        position: 'relative',
        background: '#fff',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    title:{
        position: 'absolute',
        width: 130,
        height: 51,
        left: 95,
        right: 95,
        top: 80,
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 24,
        /* or 92% */

        alignItems: 'center',
        textAlign: 'center',

        color: '#282323',
        justifyContent: 'center',
        textTransform: 'uppercase',
    },
    childTitle: {
        position: 'absolute',
        width: 170,
        height: 25,
        left: 75,
        
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        /* or 150% */
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#282323',
    },
    content: {
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 24,
        /* or 150% */

        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',

        color: '#FFF7F7',
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

export default Credits;
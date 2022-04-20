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
  ImageBackground
} from 'react-native';
import { normalize } from 'react-native-elements';
import ToolBar from '../components/ToolBar';
import bg_img from '../images/background_img/credits_bg_img.png';

const Credits = props => {
    return (
        <ImageBackground style = {styles.background} source = {bg_img} resizeMode='stretch'>
            <ScrollView style = {styles.container}>
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
        width: 320,
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
        fontStyle: 'normalize',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 24,
        /* or 150% */

        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',

        color: '#FFF7F7',
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
});

export default Credits;
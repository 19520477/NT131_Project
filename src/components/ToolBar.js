import * as React from 'react';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigation from '../../Navigation';
/*import Login from '../views/Login';
import UnconnectedDevice from '../views/Unconnected_Device';
import ConnectedDevice from '../views/Connected_Device';
import Detail from '../views/View_Detail';
import Credits from '../views/Credits';*/

/*function ToolBar ({navigation}) {
  return (
    <View style = {styles.container}>
      <View style = {styles.homeIcon}>
      <TouchableOpacity
        onPress={() => navigation.navigate('UnconnectedDevice')}>
        <Image source={require('../images/navigation_icons/search_icon.png')} resizeMode={'stretch'}/>
      </TouchableOpacity>
      </View>
      
      <TouchableOpacity style = {styles.homeIcon}
        onPress={() => navigation.navigate('Login')}>
        <Image source={require('../images/navigation_icons/forward_icon.png')} resizeMode={'stretch'}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.homeIcon}
        onPress={() => navigation.navigate('ConnectedDevice')}>
        <Image style = {styles.iconImg} source={require('../images/navigation_icons/home_icon.png')} resizeMode={'stretch'}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.homeIcon}
        onPress={() => navigation.navigate('ViewDetail')}>
        <Image source={require('../images/navigation_icons/image 12_icon.png')} resizeMode={'stretch'}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.homeIcon}
        onPress={() => navigation.navigate('Credits')}>
        <Image source={require('../images/navigation_icons/profile_icon.png')} resizeMode={'stretch'}/>
      </TouchableOpacity>
    </View>
  );
}*/

/*const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name = "Login" component={Login}/>
      <Tab.Screen name = "Credit" component={Credit}/>
    </Tab.Navigator>
  );
}*/
/*export default class ToolBar extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Toolbar>
          <ToolbarAction style = {styles.homeIcon} icon={require('../images/navigation_icons/search_icon.png')} 
            onPress={() => navigation.navigate('Login')} />
          <ToolbarAction icon={require('../images/navigation_icons/forward_icon.png')} 
            onPress={() => navigation.navigate('UnconnectedDevice')} />
          <ToolbarAction icon={require('../images/navigation_icons/home_icon.png')} 
            onPress={() => navigation.navigate('ConnectedDevice')} />
          <ToolbarAction icon={require('../images/navigation_icons/image 12_icon.png')} 
            onPress={() => navigation.navigate('ViewDetail')} />
          <ToolbarAction icon={require('../images/navigation_icons/profile_icon.png')} 
            onPress={() => navigation.navigate('Credits')} />
        </Toolbar>
        </View>
      );
    };
  };*/

  const styles = StyleSheet.create ({
    container: {
      position: 'absolute',
      width: '95%',
      height: 62,
      left: 9,
      top: 550,
      bottom: 10,
      //top: 625,
      flexDirection: 'row',
      backgroundColor: '#F4F2F2',
      borderRadius: 15,
      padding: 10,
    },
    homeIcon: {
      left: 20,
      //paddingTop: 10,
      //paddingLeft: 10,
      width: 43,
      height: 43,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: 'pink',
      borderRadius: 10,
    },
    iconImg: {
      width: '100%',
      height: '100%',
    }
  });

  //export default ToolBar;
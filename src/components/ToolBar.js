/*import * as React from 'react';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigation from '../../Navigation';
import Login from '../views/Login';
import UnconnectedDevice from '../views/Unconnected_Device';
import ConnectedDevice from '../views/Connected_Device';
import Detail from '../views/View_Detail';
import Credits from '../views/Credits';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  <HomeStack.Navigator>
    <HomeStack.Screen name="Login" component={Login}/>
    <HomeStack.Screen name="UnconnectedDevice" component={UnconnectedDevice}/>
    
    <HomeStack.Screen name="ViewDetail" component={Detail}/>
    <HomeStack.Screen name="Credits" component={Credits}/>
  </HomeStack.Navigator>
}

const UnconnectedStack = createNativeStackNavigator();

function UnconnectedStackScreen() {
  <UnconnectedStack.Navigator>
    <UnconnectedStack.Screen name="Login" component={Login}/>
    
    <UnconnectedStack.Screen name="ConnectedDevice" component={ConnectedDevice}/>
    <UnconnectedStack.Screen name="ViewDetail" component={Detail}/>
    <UnconnectedStack.Screen name="Credits" component={Credits}/>
  </UnconnectedStack.Navigator>
}

const CreditsStack = createNativeStackNavigator();

function CreditsStackScreen() {
  <CreditsStack.Navigator>
    <CreditsStack.Screen name="Login" component={Login}/>
    <CreditsStack.Screen name="UnconnectedDevice" component={UnconnectedDevice}/>
    <CreditsStack.Screen name="ConnectedDevice" component={ConnectedDevice}/>
    <CreditsStack.Screen name="ViewDetail" component={Detail}/>
    
  </CreditsStack.Navigator>
}

const DetailStack = createNativeStackNavigator();

function DetailStackScreen() {
  <DetailStack.Navigator>
    <DetailStack.Screen name="Login" component={Login}/>
    <DetailStack.Screen name="UnconnectedDevice" component={UnconnectedDevice}/>
    <DetailStack.Screen name="ConnectedDevice" component={ConnectedDevice}/>
    
    <DetailStack.Screen name="Credits" component={Credits}/>
  </DetailStack.Navigator>
}

const LoginStack = createNativeStackNavigator();

function LoginStackScreen() {
  <LoginStack.Navigator>
    
    <LoginStack.Screen name="UnconnectedDevice" component={UnconnectedDevice}/>
    <LoginStack.Screen name="ConnectedDevice" component={ConnectedDevice}/>
    <LoginStack.Screen name="ViewDetail" component={Detail}/>
    <LoginStack.Screen name="Credits" component={Credits}/>
  </LoginStack.Navigator>
}

const Tab = createBottomTabNavigator();

function ToolBar () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="LoginTab" component={LoginStackScreen} />
        <Tab.Screen name="UnconnectedDeviceTab" component={UnconnectedStackScreen}/>
        <Tab.Screen name="ConnectedDeviceTab" component={HomeStackScreen}/>
        <Tab.Screen name="ViewDetailTab" component={DetailStackScreen}/>
        <Tab.Screen name="CreditsTab" component={CreditsStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}







/*const Tabs = () => {
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


  //export default ToolBar;
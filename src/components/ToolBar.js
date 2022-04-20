import * as React from 'react';
//import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../views/Login';
import Unconnected_Device from '../views/Unconnected_Device';
import Connected_Device from '../views/Connected_Device';
import View_Detail from '../views/View_Detail';
import Credit from '../views/Credits';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name = "Login" component={Login}/>
      <Tab.Screen name = "Credit" component={Credit}/>
    </Tab.Navigator>
  );
}
/*export default class ToolBar extends React.Component {
    render() {
      return (
        <View style={styles.navigationBar}>
          <Toolbar>
          <ToolbarAction icon={require('../images/navigation_icons/search_icon.png')} onPress={this._onSearch} />
          <ToolbarAction icon={require('../images/navigation_icons/forward_icon.png')} onPress={this._onForward} />
          <ToolbarAction icon={require('../images/navigation_icons/home_icon.png')} onPress={this._onHome} />
          <ToolbarAction icon={require('../images/navigation_icons/image 12_icon.png')} onPress={this._onSearch} />
          <ToolbarAction icon={require('../images/navigation_icons/profile_icon.png')} onPress={this._onSearch} />
        </Toolbar>
        </View>
      );
    };
  };*/

  const styles = StyleSheet.create ({
    navigationBar: {
      position: 'absolute',
      width: 303,
      height: 62,
      left: 9,
      //top: 625,

      background: '#F4F2F2',
      borderRadius: 15,
    },
  });
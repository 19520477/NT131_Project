import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/views/Login';
import UnconnectedDevice from './src/views/Unconnected_Device';
import ConnectedDevice from './src/views/Connected_Device';
import Detail from './src/views/View_Detail';
import Credits from './src/views/Credits';

const Stack = createNativeStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ConnectedDevice" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="UnconnectedDevice" component={UnconnectedDevice}/>
                <Stack.Screen name="ConnectedDevice" component={ConnectedDevice}/>
                <Stack.Screen name="ViewDetail" component={Detail}/>
                <Stack.Screen name="Credits" component={Credits}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};

export default Navigation;
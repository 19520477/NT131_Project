import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import {Component} from 'react/cjs/react.production.min';
import login_bg_img from '../images/background_img/login_background.png';
import DeviceItem from '../components/DeviceItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function UnconnectedDevice({navigation}) {
  const [device, setDevice] = useState([
    {
      name: 'Thiet bi Arduino 1',
      // button: `${navigation.navigate('ConnectedDevice')}`,
      id: '1',
    },
    {name: 'Thiet bi Arduino 2', id: '2'},
    {name: 'Thiet bi Arduino 3', id: '3'},
    {name: 'Thiet bi Arduino 4', id: '4'},
    {name: 'Thiet bi Arduino 5', id: '5'},
    {name: 'Thiet bi Arduino 6', id: '6'},
  ]);
  return (
    <ImageBackground
      style={styles.background}
      source={login_bg_img}
      resizeMode="stretch">
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <Text style={styles.title}>xin chào!</Text>
          <Text style={styles.requireConnect}>
            Trước hết, hãy kết nối với một thiết bị Arduino đang hiển thị nhé!
          </Text>
          <View style={styles.square}>
            <ScrollView>
              {device.map(item => (
                <DeviceItem
                  item={item}
                  key={item.id}
                  //navigate={props.navigation.navigate}
                  //des="ConnectedDevice"
                />
              ))}
            </ScrollView>
          </View>
        </View>

        {/* navigation_bottom_bar */}
        <View style={styles.navigationBar}>
          <TouchableOpacity
            style={styles.navigationIcon}
            onPress={() => navigation.navigate('UnconnectedDevice')}>
            <MaterialCommunityIcons
              name="text-box-search-outline"
              size={50}
              resizeMode={'center'}
              color={'rgba(0,0,0,1)'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationIcon}
            onPress={() => navigation.navigate('Login')}>
            <MaterialIcons
              name="logout"
              size={35}
              resizeMode={'center'}
              color={'rgba(0,0,0,0.6)'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationIcon}
            onPress={() => navigation.navigate('ConnectedDevice')}>
            <Feather
              name="home"
              size={33}
              resizeMode={'center'}
              color={'rgba(0,0,0,0.6)'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationIcon}
            onPress={() => navigation.navigate('ViewDetail')}>
            <MaterialCommunityIcons
              name="link-variant"
              size={35}
              resizeMode={'center'}
              color={'rgba(0,0,0,0.6)'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationIcon}
            onPress={() => navigation.navigate('Credits')}>
            <AntDesign
              name="user"
              size={35}
              resizeMode={'center'}
              color={'rgba(0,0,0,0.6)'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: '#FFFFFF',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    //height: '80%',
    position: 'relative',
    //background: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  childContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: windowWidth,
    height: '80%',
    //background: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //paddingBottom: '30%',
  },
  title: {
    position: 'relative',
    width: '100%',
    //height: 71,
    marginTop: '10%',
    fontSize: 30,
    justifyContent: 'flex-start',
    //alignItems: 'center',
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Ubuntu',
    lineHeight: 38,
    textTransform: 'uppercase',
  },
  requireConnect: {
    position: 'relative',
    width: '95%',
    //height: "30%",
    marginTop: '2%',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#000000',
    //paddingLeft: 5,
    //paddingRight: 5,
  },
  square: {
    position: 'relative',
    width: '95%',
    height: '70%',
    marginTop: '5%',
    paddingTop: 20,
    alignItems: 'center',
    //justifyContent: 'flex-start',
    backgroundColor: '#DCE8F5',
    borderRadius: 5,
  },
  navigationBar: {
    position: 'absolute',
    //flex: 1,
    width: '90%',
    height: '10%',
    marginTop: 0.85 * windowHeight,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#F4F2F2',
    borderRadius: 15,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationIcon: {
    flex: 1,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default UnconnectedDevice;

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
//import DeviceItem from '../components/DeviceItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DeviceItem = props => {
  return (
    <View style={styles.listItemView}>
      <Text style={styles.listItemText}>{props.name}</Text>
      <TouchableOpacity
        style={styles.buttonSquare}
        onPress={() => props.navigate(props.des)}>
        <Text style={styles.buttonName}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

const UnconnectedDevice = props => {
  const [device, setDevice] = useState([
    {
      name: 'Thiet bi Arduino 1',
      id: '1',
      des: 'ConnectedDevice',
    },
    {name: 'Thiet bi Arduino 2', id: '2', des: 'ConnectedDevice'},
    {name: 'Thiet bi Arduino 3', id: '3', des: 'ConnectedDevice'},
  ]);
  const renderItem = ({item}) => (
    <DeviceItem
      name={item.name}
      des={item.des}
      navigate={props.navigation.navigate}
    />
  );
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={{
          uri: 'https://img.wallpapersafari.com/phone/640/1136/73/25/ZbXImp.jpg',
        }}
        resizeMode="stretch">
        <View style={styles.childContainer}>
          <Text style={styles.title}>xin chào!</Text>
          <Text style={styles.requireConnect}>
            Hãy chọn một thiết bị đang có sẵn để kết nối nhé!
          </Text>
          <View style={styles.square}>
            <FlatList
              data={device}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>

        {/* navigation_bottom_bar */}
        <View style={styles.navigationBar}>
          <TouchableOpacity
            style={styles.navigationIcon}
            onPress={() => props.navigation.navigate('UnconnectedDevice')}>
            <MaterialCommunityIcons
              name="text-box-search-outline"
              size={50}
              resizeMode={'center'}
              color={'rgba(0,0,0,1)'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationIcon}
            onPress={() => props.navigation.navigate('Login')}>
            <MaterialIcons
              name="logout"
              size={35}
              resizeMode={'center'}
              color={'rgba(0,0,0,0.6)'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationIcon}
            onPress={() => props.navigation.navigate('ConnectedDevice')}>
            <Feather
              name="home"
              size={33}
              resizeMode={'center'}
              color={'rgba(0,0,0,0.6)'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationIcon}
            onPress={() => props.navigation.navigate('ViewDetail')}>
            <MaterialCommunityIcons
              name="link-variant"
              size={35}
              resizeMode={'center'}
              color={'rgba(0,0,0,0.6)'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationIcon}
            onPress={() => props.navigation.navigate('Credits')}>
            <AntDesign
              name="user"
              size={35}
              resizeMode={'center'}
              color={'rgba(0,0,0,0.6)'}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'relative',
    width: windowWidth,
    height: windowHeight,
    background: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    width: windowWidth,
    //height: '80%',
    position: 'relative',
    //background: '#fff',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    //padding: 5,
  },
  childContainer: {
    //position: 'relative',
    //display: 'flex',
    padding: 5,
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
    //width: '100%',
    //height: 71,
    marginTop: '10%',
    fontSize: 30,
    justifyContent: 'flex-start',
    //alignItems: 'center',
    textAlign: 'center',
    color: '#000',
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Ubuntu',
    lineHeight: 34,
    textTransform: 'uppercase',
  },
  requireConnect: {
    position: 'relative',
    //width: '95%',
    //height: "30%",
    marginTop: '2%',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: 16,
    lineHeight: 24,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: '#000000',
    //paddingLeft: 5,
    //paddingRight: 5,
  },
  square: {
    //position: 'relative',
    width: 0.93 * windowWidth,
    height: '70%',
    marginTop: '5%',
    //paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    //paddingBottom: '7%',
    //alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 10,
  },

  listItemView: {
    marginBottom: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    height: 60,
    width: 0.85 * windowWidth,
    borderRadius: 5,
    padding: 5,
  },
  listItemText: {
    //paddingLeft: 5,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
  },
  buttonSquare: {
    marginRight: '3%',
    width: '25%',
    height: '90%',
    borderRadius: 10,
    backgroundColor: '#424B5A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonName: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },

  navigationBar: {
    position: 'absolute',
    //flex: 1,
    width: '95%',
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
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default UnconnectedDevice;

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
  Dimensions,
} from 'react-native';

import bg_img from '../images/background_img/credits_bg_img.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Credits({navigation}) {
  //state = {isFocused: true};
  /*onFocusChange = () => {
        this.setState({isFocused: true})
    }*/
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: 'https://i.pinimg.com/236x/e7/5a/f9/e75af99681538cf8d89fd7e5633aafc6.jpg',
      }}
      resizeMode="stretch">
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.childContainer}>
            <Text style={styles.title}>CREDITS</Text>
            <View style={styles.contentView}>
              <Text style={styles.childTitle}>Contributors</Text>
              <Text style={styles.content}>Nguyen Duy Tung</Text>
              <Text style={styles.content}>Tran Thai Tuan Anh</Text>
              <Text style={styles.content}>Pham Mai Dung</Text>
            </View>

            <View style={styles.contentView}>
              <Text style={styles.childTitle}>Dispatched as</Text>
              <Text style={styles.content}>Do an He thong Nhung</Text>
              <Text style={styles.content}>HK2 2021-2022</Text>
              <Text style={styles.content}>GVHD: Nguyen Khanh Thuat</Text>
            </View>

            <View style={styles.contentView}>
              <Text style={styles.childTitle}>Core Technologies</Text>
              <Text style={styles.content}>React Native</Text>
              <Text style={styles.content}>NodeJS</Text>
              <Text style={styles.content}>Mongo Cloud Cluster</Text>
              <Text style={styles.content}>Firebase</Text>
            </View>
          </View>
        </ScrollView>

        {/* navigation_bottom_bar */}
        <View style={styles.navigationBar}>
          <TouchableOpacity
            style={styles.navigationIcon}
            onPress={() => navigation.navigate('UnconnectedDevice')}>
            <MaterialCommunityIcons
              name="text-box-search-outline"
              size={35}
              resizeMode={'center'}
              color={'rgba(0,0,0,0.6)'}
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
              size={50}
              resizeMode={'center'}
              color={'rgba(0,0,0,1)'}
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
    width: windowWidth,
    height: windowHeight,
    background: '#FFFFFF',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    //height: 1635,
    position: 'relative',
    //background: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  childContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: windowWidth,
    height: windowHeight * 1.2,
    //background: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  title: {
    //position: 'absolute',
    width: '100%',
    height: 51,
    //left: 95,
    //right: 95,
    //top: 80,
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 30,
    marginTop: 70,
    marginBottom: 20,
    /* or 92% */

    alignItems: 'center',
    textAlign: 'center',

    color: '#282323',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },

  contentView: {
    width: '100%',
    height: 25 * 6,
    flexDirection: 'column',
    marginBottom: 30,
  },
  childTitle: {
    //position: 'absolute',
    width: '100%',
    height: 25,
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    /* or 150% */
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    color: '#282323',
  },
  content: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    /* or 150% */

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

    color: '#555555',
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

export default Credits;

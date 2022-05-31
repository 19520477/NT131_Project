import React, {useState, useEffect} from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';

import FactorItem from '../components/FactorItem';

import Geolocation from '@react-native-community/geolocation';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Weather = props => {
  const api_key = '98e6e7032df72e1fa0a7f6eaab2baa3a';

  const [data, setData] = useState({
    temp_c: 0,
    temp_f: 0,
    humid: 0,
    feel: 0,
    status: null,
    wind: 0,
  });
  const [future, setFutureNext4Hour] = useState({
    time: null,
    temp: 0,
    humid: 0,
    avail_rain: 0,
  });
  useEffect(() => {
    fetchDataForecast();
    const timeOutId = setTimeout(() => fetchDataForecast(), 60000);

    return () => clearTimeout(timeOutId);
  }, []);

  const fetchDataForecast = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=8db841a2ab4440569d165137222805&q=Hanoi&days=1&aqi=yes&alerts=yes`,
    )
      .then(res => res.json())
      .then(data => {
        setData({
          temp_c: data.forecast.forecastday[0].day.avgtemp_c,
          temp_f: data.forecast.forecastday[0].day.avgtemp_f,
          humid: data.forecast.forecastday[0].day.avghumidity,
          feel: data.current.feelslike_c,
          status: data.forecast.forecastday[0].day.condition.text,
          wind: data.forecast.forecastday[0].day.maxwind_kph,
        });
        var index = new Date().getHours() + 4;
        setFutureNext4Hour({
          time: data.forecast.forecastday[0].hour[index].time,
          temp: data.forecast.forecastday[0].hour[index].temp_c,
          humid: data.forecast.forecastday[0].hour[index].humidity,
          avail_rain: data.forecast.forecastday[0].hour[index].chance_of_rain,
        });
        console.log(data);
      });
  };

  const time = new Date();
  const date = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  const hours = time.getHours();
  const minutes = time.getMinutes();

  const getDayInWeek = () => {
    var day = useState();
    switch (time.getDay()) {
      case 0:
        return (day = 'CN');
        break;
      case 1:
        return (day = 'T2');
        break;
      case 2:
        return (day = 'T3');
        break;
      case 3:
        return (day = 'T4');
        break;
      case 4:
        return (day = 'T5');
        break;
      case 5:
        return (day = 'T6');
        break;
      case 6:
        return (day = 'T7');
        break;
    }
  };
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: 'https://wallpaperaccess.com/full/5202339.jpg',
      }}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.childContainer}>
            <Text style={styles.location}>Ha noi</Text>
            <Text style={styles.time}>
              {getDayInWeek()}, {date}/{month}/{year}
              {'\t'}
              {hours < 10 ? `0${hours}` : `${hours}`}:
              {minutes < 10 ? `0${minutes}` : `${minutes}`}
            </Text>
            <Text style={styles.temp_c}>{data?.temp_c}°C</Text>

            <Text style={styles.status}>{data?.status}</Text>
            <View style={styles.square}>
              <FactorItem
                temp={data?.temp_c}
                fah={data?.temp_f}
                humid={data?.humid}
                wind={data?.wind}
                uv={data?.uv}
                light={data?.light}
              />
            </View>
            <View style={styles.square2}>
              <Text style={styles.header_square}>
                Dự báo thời tiết 4 giờ tới
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#9bedff',
                }}>
                <Text style={styles.content}>Vào lúc</Text>
                <Text style={styles.ratio}>{future?.time}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#9bedff',
                }}>
                <Text style={styles.content}>Nhiệt độ</Text>
                <Text style={styles.ratio}>{future?.temp}°C</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#9bedff',
                }}>
                <Text style={styles.content}>Độ ẩm</Text>
                <Text style={styles.ratio}>{future?.humid}%</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#9bedff',
                }}>
                <Text style={styles.content}>Khả năng mưa</Text>
                <Text style={styles.ratio}>{future?.avail_rain}%</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* navigation_bottom_bar */}
        <View style={styles.navigationBar}>
          <TouchableOpacity
            style={styles.navigationIcon}
            onPress={() => props.navigation.navigate('UnconnectedDevice')}>
            <MaterialCommunityIcons
              name="text-box-search-outline"
              size={35}
              resizeMode={'center'}
              color={'rgba(0,0,0,0.6)'}
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
      </View>
    </ImageBackground>
  );
};

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
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  childContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: windowWidth,
    height: 1.7 * windowHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    paddingBottom: '25%',
  },
  location: {
    marginTop: '7%',
    //marginLeft: '5%',
    width: '100%',
    fontSize: 26,
    textAlign: 'center',
    alignItems: 'center',
    color: '#D57284',
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Ubuntu',
    lineHeight: 30,
  },
  time: {
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
    //color: '#D57284',
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Ubuntu',
    lineHeight: 30,
  },
  temp_c: {
    marginTop: '10%',
    fontSize: 70,
    justifyContent: 'flex-start',
    //alignItems: 'center',
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Ubuntu',
    lineHeight: 72,
    textTransform: 'uppercase',
  },
  status: {
    marginTop: '5%',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 26,
    lineHeight: 35,
    /* identical to box height, or 135% */

    textAlign: 'center',

    color: '#000',
  },
  square: {
    //flex: 1,
    width: '100%',
    marginTop: '10%',
    alignItems: 'center',
  },

  listItemView: {
    marginBottom: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
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

  square2: {
    //flex: 1,
    width: '100%',
    marginTop: '5%',
    padding: 5,
    //alignItems: 'center',
  },

  header_square: {
    marginTop: '5%',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 24,
    lineHeight: 30,
    /* identical to box height, or 135% */

    textAlign: 'left',

    color: '#000',
  },
  content: {
    marginTop: '5%',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '300',
    width: '60%',
    fontSize: 16,
    lineHeight: 25,
    /* identical to box height, or 135% */

    textAlign: 'left',

    color: '#000',
  },
  ratio: {
    marginTop: '5%',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '300',
    width: '40%',
    fontSize: 16,
    lineHeight: 25,
    /* identical to box height, or 135% */

    textAlign: 'right',

    color: '#000',
  },
});

export default Weather;

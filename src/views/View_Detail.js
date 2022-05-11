import React, {useState, useEffect} from 'react';
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
  FlatList,
} from 'react-native';
import {Component} from 'react/cjs/react.production.min';
import login_bg_img from '../images/background_img/login_background.png';
import FactorItem from '../components/FactorItem';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import freezing_img from '../images/weather_img/freezing_cold.jpg';
import cold_img from '../images/weather_img/cold.jpg';
import cool_img from '../images/weather_img/cool.jpg';
import warm_img from '../images/weather_img/warm.jpg';
import hot_img from '../images/weather_img/hot.jpg';
import burning_img from '../images/weather_img/burning_hot.jpg';

import axios from '../api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Detail({navigation}) {
  const [sensorData, setSensorData] = useState({
    temp: 0,
    fah: 0,
    humid: 0,
    uv: 0,
    light: 0,
    wind: 0,
  });

  // call api
  const getSensorInformtion = async () => {
    try {
      const {data} = await axios.get('/sensor/detail', {});
      if (data.success) {
        setSensorData({
          temp: data.info.temp[0].celcius,
          fah: data.info.temp[0].fahrenheit,
          humid: data.info.humid[0].humidity,
          uv: data.info.light[0].uv,
          light: data.info.light[0].light,
          wind: data.info.light[0].windDensity,
        });
      }
    } catch (e) {
      console.error(e);
      alert('Get Info Failed!');
    }
  };

  const getFeeling = temp => {
    if (temp < 15)
      return {
        title: 'Freezing Cold',
        image: freezing_img,
        msg: 'Tốt hơn hết là bạn nên ở trong nhà và sử dụng lò sưởi (không nên sử dụng sưởi bằng than), mặc quần áo giữ ấm cơ thể .  Uống nhiều nước ấm. Nếu cần ra ngoài bạn nên mặc áo quần dày và mang theo các dụng cụ chống trơn trượt (có thể có tuyết).',
      };
    if (temp >= 15 && temp <= 20)
      return {
        title: 'Cold',
        image: cold_img,
        msg: 'Bạn nên sử dụng lò sưởi khi ở nhà (không nên sử dụng sưởi bằng than), mặc quần áo giữ ấm cơ thể. Ra ngoài trời bạn nên mặc thêm áo dày, găng tay và choàng len. Uống nhiều nước ấm.',
      };
    if (temp > 20 && temp <= 26)
      return {
        title: 'Cool',
        image: cool_img,
        msg: 'Thời tiết mát mẻ và dễ chịu. Bạn nên ra ngoài trời vận động, làm việc hoặc vui chơi thay vì nằm ngủ cả ngày ở nhà.',
      };
    if (temp > 26 && temp <= 32)
      return {
        title: 'Warm',
        image: warm_img,
        msg: 'Thời tiết ấm áp, phù hợp với việc hoạt động ngoài trời cũng như trong nhà. Tuy nhiên bạn cũng cần bổ sung nước và thức ăn, thức uống giải nhiệt cho cơ thể (phòng khi hoạt động hoặc ở ngoài trời quá lâu).',
      };
    if (temp > 32 && temp < 50)
      return {
        title: 'Kinda Hot',
        image: hot_img,
        msg: 'Nhiệt độ cao khiến cơ thể dễ bị mất nước. Bạn nên ở nhà tránh nóng hoặc ở những nơi điều hòa khí hậu, uống nhiều nước và vitamin C tăng sức đề kháng cho cơ thể. Tránh tiếp xúc trực tiếp với ánh nắng mặt trời.',
      };
    if (temp >= 50)
      return {
        title: 'Burning Hot',
        image: burning_img,
        msg: 'Cố gắng tìm nơi tránh nóng. Chúc bạn may mắn vượt qua.',
      };
    else
      return {
        title: 'Feeling Here',
        image: cold_img,
        msg: 'Chúc bạn may mắn.',
      };
  };

  useEffect(() => {
    getSensorInformtion();
    const timeOutId = setTimeout(() => getSensorInformtion(), 60000 * 5);

    return () => clearTimeout(timeOutId);
  }, []);

  //console.log('sensorData', sensorData);
  return (
    <ImageBackground
      style={styles.background}
      source={login_bg_img}
      resizeMode="stretch">
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.childContainer}>
            <Image
              style={styles.weatherImg}
              source={getFeeling(sensorData?.temp).image}
              resizeMode="stretch"
            />
            <Text style={styles.title}>{`${sensorData?.temp}°C, ${
              getFeeling(sensorData?.temp).title
            }`}</Text>
            <View style={styles.square}>
              <FactorItem
                temp={sensorData?.temp}
                fah={sensorData?.fah}
                humid={sensorData?.humid}
                wind={sensorData?.wind}
                uv={sensorData?.uv}
                light={sensorData?.light}
              />
            </View>
            <Text style={styles.adviceTitle}>Lời khuyên của bác sĩ</Text>
            <View style={styles.adviceView}>
              <Text style={styles.adviceContent}>
                {getFeeling(sensorData?.temp).msg}
              </Text>
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
              size={50}
              resizeMode={'center'}
              color={'rgba(0,0,0,1)'}
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
    height: 2.5 * windowHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  weatherImg: {
    width: '100%',
    height: 0.27 * windowHeight,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    //position: 'absolute',
    marginTop: '10%',
    marginLeft: '5%',
    width: '100%',
    fontSize: 28,
    textAlign: 'left',
    alignItems: 'center',
    color: '#D57284',
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Ubuntu',
    lineHeight: 30,
    //textTransform: 'uppercase',
  },
  square: {
    //flex: 1,
    width: '100%',
    marginTop: '10%',
    alignItems: 'center',
  },
  adviceTitle: {
    //position: 'absolute',
    //marginTop: '10%',
    marginLeft: '5%',
    marginTop: '5%',
    width: '100%',
    fontSize: 20,
    //justifyContent: 'center',
    textAlign: 'left',
    //alignItems: 'center',
    color: '#000',
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Ubuntu',
    lineHeight: 24,
  },
  adviceView: {
    width: '95%',
    //position: 'absolute',
    //height: 330,
    backgroundColor: '#f1f4f8',
    borderRadius: 10,
    marginTop: '5%',
  },
  adviceContent: {
    width: '100%',
    //height: 30,
    padding: 10,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 24,
    display: 'flex',
    textAlign: 'left',
  },
  navigationBar: {
    position: 'absolute',
    //flex: 1,
    width: '90%',
    height: 62,
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

export default Detail;

import React, {useEffect, useState} from 'react';
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
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {Component} from 'react/cjs/react.production.min';
import hot_bg_img from '../images/background_img/hot_bg_img.png';
import cold_bg_img from '../images/background_img/login_background.png';

import AccessoryItem from '../components/AccessoryItem';
import ProgressCircle from 'react-native-progress-circle';

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

import facemask from '../images/accessory_img/facemask.jpg';
import sundress from '../images/accessory_img/sundress.jpg';
import sunscreen from '../images/accessory_img/sun_scream.jpg';
import sunglasses from '../images/accessory_img/sunglasses.jpg';

import golf from '../images/accessory_img/golf.jpg';
import camera from '../images/accessory_img/camera.jpg';
import sport_clothes from '../images/accessory_img/sport_clothes.jpg';
import fashion_clothes from '../images/accessory_img/fashion_clothes.jpg';

import sweater from '../images/accessory_img/sweater.jpg';
import sock_gloves from '../images/accessory_img/sock_gloves.jpg';
import scarf from '../images/accessory_img/scarf.jpg';
import snow_shoes from '../images/accessory_img/snow_shoes.jpg';

import axios from '../api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ConnectedDevice({navigation}) {
  const [greet, setGreet] = useState();
  const [sensorData, setSensorData] = useState({
    temp: 0,
    humid: 0,
    uv: 0,
  });
  const [user, setUser] = useState({
    username: null,
    fullname: null,
    password: null,
  });

  // call api
  const getSensorInformtion = async () => {
    try {
      const {data} = await axios.get('/sensor/detail', {});
      if (data.success) {
        setSensorData({
          temp: data.info.temp[0].celcius,
          humid: data.info.humid[0].humidity,
          uv: data.info.light[0].uv,
        });
      }
    } catch (e) {
      console.error(e);
      //alert('Get Info Failed!');
    }
  };

  // get user's fullname, but server doesn't response
  const getUserInformtion = async () => {
    try {
      const {userInfo} = await axios.get('/auth/info/fullname', {});
      if (userInfo.success) {
        setUser({
          username: userInfo.userInfo.user.username,
          fullname: userInfo.userInfo.user.fullname,
          password: userInfo.userInfo.user.password,
        });
      }
    } catch (e) {
      console.error(e);
      alert('Get your name Failed!');
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
    findGreet();
    getUserInformtion();
    getSensorInformtion();
    const timeOutId = setTimeout(() => getSensorInformtion(), 60000 * 5);

    return () => clearTimeout(timeOutId);
  }, []);

  // Set the greeting by hours
  const findGreet = () => {
    const hours = new Date().getHours();
    if (hours === 0 || hours < 12) return setGreet('Morning');
    if (hours === 12 || hours < 18) return setGreet('Afternoon');
    else return setGreet('Evening');
  };

  const [hot_accessory, setHotAccessory] = useState([
    {
      name: 'Khẩu trang chống nắng & UV',
      image: `${facemask}`,
      detail: 'Bảo vệ khuôn mặt của bạn khỏi ánh nắng trực tiếp mặt trời.',
      id: '1',
    },
    {
      name: 'Váy chống nắng',
      image: `${sundress}`,
      detail:
        'Bảo vệ chân bạn khỏi nắng nóng, tiện lợi cho người thường xuyên di chuyển bằng xe máy.',
      id: '2',
    },
    {
      name: 'Kem chống nắng',
      image: `${sunscreen}`,
      detail:
        'Bảo vệ da bạn khỏi nắng nóng, tia UV, chống khô da, dưỡng trắng...',
      id: '3',
    },
    {
      name: 'Kính râm',
      image: `${sunglasses}`,
      detail:
        'Bảo vệ đôi mắt của bạn khỏi sự tiếp xúc trực tiếp với ánh nắng mặt trời, tia UV, khói bụi,...',
      id: '4',
    },
  ]);
  const [comfort_accessory, setComfortAccessory] = useState([
    {
      name: 'Quần áo thể thao',
      image: `${sport_clothes}`,
      detail: 'Phù hợp cho các hoạt động thể dục thể thao ngoài trời.',
      id: '1',
    },
    {
      name: 'Bộ gậy Golf',
      image: `${golf}`,
      detail: 'Ngoài ra còn có thể chơi cầu lông, đá bóng, bơi lội,...',
      id: '2',
    },
    {
      name: 'Quần áo thời trang',
      image: `${fashion_clothes}`,
      detail:
        'Sẽ thích hợp cho những chuyến du lịch hay thêm vào album của bạn những chiếc ảnh chanh sả vào ngày đẹp trời.',
      id: '3',
    },
    {
      name: 'Máy ảnh',
      image: `${camera}`,
      detail: 'Công cụ không thể thiếu khi bạn muốn có một bộ ảnh xinh đẹp. ',
      id: '4',
    },
  ]);
  const [cold_accessory, setColdAccessory] = useState([
    {
      name: 'Áo len, áo khoác dày',
      image: `${sweater}`,
      detail: 'Giữ ấm cho cơ thể bạn. ',
      id: '1',
    },
    {
      name: 'Bít tất, găng tay',
      image: `${sock_gloves}`,
      detail: 'Giúp tay chân không bị lạnh cóng cả khi ở nhà và ra ngoài trời.',
      id: '2',
    },
    {
      name: 'Khăn quàng cổ',
      image: `${scarf}`,
      detail:
        'Phụ kiện giữ ấm cơ thể đi kèm với quần áo mùa đông. Ngoài ra còn có mũ len, chụp tai,...',
      id: '3',
    },
    {
      name: 'Giày đi tuyết',
      image: `${snow_shoes}`,
      detail:
        'Giày đi tuyết sẽ cần thiết khi bạn cần ra ngoài khi trời có tuyết. ',
      id: '4',
    },
  ]);

  // Set accessories by temperature
  const getAccessory = temp => {
    if (temp < 15)
      return cold_accessory.map(item => (
        <AccessoryItem
          item={item}
          image={item.image}
          detail={item.detail}
          key={item.id}
        />
      ));
    if (temp >= 15 && temp <= 20)
      return cold_accessory.map(item => (
        <AccessoryItem
          item={item}
          image={item.image}
          detail={item.detail}
          key={item.id}
        />
      ));
    if (temp > 20 && temp <= 26)
      return comfort_accessory.map(item => (
        <AccessoryItem
          item={item}
          image={item.image}
          detail={item.detail}
          key={item.id}
        />
      ));
    if (temp > 26 && temp <= 34)
      return comfort_accessory.map(item => (
        <AccessoryItem
          item={item}
          image={item.image}
          detail={item.detail}
          key={item.id}
        />
      ));
    if (temp > 34 && temp < 50)
      return hot_accessory.map(item => (
        <AccessoryItem
          item={item}
          image={item.image}
          detail={item.detail}
          key={item.id}
        />
      ));
    if (temp >= 50)
      return hot_accessory.map(item => (
        <AccessoryItem
          item={item}
          image={item.image}
          detail={item.detail}
          key={item.id}
        />
      ));
    else
      return cold_accessory.map(item => (
        <AccessoryItem
          item={item}
          image={item.image}
          detail={item.detail}
          key={item.id}
        />
      ));
  };

  const getBackground = temp => {
    if (temp <= 26) return cold_bg_img;
    else if (temp > 26) return hot_bg_img;
    else return cold_bg_img;
  };

  return (
    <ImageBackground
      style={styles.background}
      source={getBackground(sensorData?.temp)}
      resizeMode="stretch">
      <SafeAreaView style={styles.container}>
        <ScrollView nestedScrollEnabled={true}>
          <View style={styles.childContainer}>
            {/* greeting to user */}
            <Text
              style={
                styles.greeting
              }>{`Good ${greet}, ${user?.fullname}`}</Text>

            {/* temperature */}
            <View style={styles.progressCircleView}>
              <ProgressCircle
                percent={sensorData?.temp}
                radius={100}
                borderWidth={10}
                color="#424B5A"
                containerStyle={styles.containerCircle}
                outerCircleStyle={styles.outerCircleView}
                //style = {styles.circle}
                //shadowColor="#999"
                //bgColor="#fff"
              >
                <Text style={{fontSize: 18}}>{`${sensorData?.temp} °C`}</Text>
              </ProgressCircle>
            </View>

            {/* feeling by temp */}
            <Text style={styles.feeling}>{`${
              getFeeling(sensorData?.temp).title
            }`}</Text>

            {/* button navigates view_detail screen */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ViewDetail')}>
              <Text style={styles.buttonName}>VIEW DETAIL</Text>
            </TouchableOpacity>

            {/* info about the weather */}
            <View style={styles.infoView}>
              <Text style={styles.infoTitle}>{`${
                getFeeling(sensorData?.temp).title
              } Weather`}</Text>
              <Image
                style={styles.infoImage}
                source={getFeeling(sensorData?.temp).image}
                resizeMode="stretch"
              />
              <Text style={styles.infoContent}>{`${
                getFeeling(sensorData?.temp).msg
              }`}</Text>
            </View>

            {/* accessories for weather */}
            <Text style={styles.accessoryTitle}>Phụ kiện cho hôm nay</Text>
            <SafeAreaView style={styles.square}>
              {getAccessory(sensorData?.temp)}
            </SafeAreaView>
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
              size={47}
              resizeMode={'center'}
              color={'rgba(0,0,0,1)'}
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
      </SafeAreaView>
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
    height: 3 * windowHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: '20%',
  },
  greeting: {
    marginTop: 18,
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    color: '#000000',
  },
  progressCircleView: {
    //top: 85,
    marginTop: '15%',
    width: '100%',
    height: 212,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircleView: {
    width: 200,
    height: 200,
    //left: 10,
    //right: 10,
    //padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  containerCircle: {
    width: 150,
    height: 150,
  },
  feeling: {
    marginTop: '5%',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 26,
    lineHeight: 35,
    /* identical to box height, or 135% */

    textAlign: 'center',

    color: '#505D68',
  },
  button: {
    marginTop: '5%',
    //position: 'absolute',
    width: 0.5 * windowWidth,
    height: 0.08 * windowHeight,
    backgroundColor: '#424B5A',
    //top: 394,
    //left: 36,
    //right: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonName: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  infoView: {
    marginTop: '10%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '95%',
    height: 0.7 * windowHeight,
    padding: 7,
    borderRadius: 10,
  },
  infoTitle: {
    //position: 'absolute',
    width: '100%',
    //height: 45,
    padding: 5,
    fontSize: 20,
    //justifyContent: 'center',
    textAlign: 'left',
    alignItems: 'center',
    color: '#000',
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Ubuntu',
    lineHeight: 24,
  },
  infoImage: {
    width: '100%',
    height: '40%',
    backgroundColor: 'pink',
    alignItems: 'center',
    borderRadius: 10,
  },
  infoContent: {
    marginTop: '2%',
    width: '100%',
    //height: '60%',
    padding: 5,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 24,
    display: 'flex',
    textAlign: 'left',
    backgroundColor: 'pink',
    borderRadius: 10,
  },
  accessoryTitle: {
    marginTop: '13%',
    marginLeft: '5%',
    //position: 'absolute',
    width: '100%',
    fontSize: 23,
    //justifyContent: 'center',
    textAlign: 'left',
    //alignItems: 'center',
    color: '#fff',
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Ubuntu',
    lineHeight: 25,
  },
  square: {
    flex: 1,
    width: '100%',
    marginTop: '7%',
    alignItems: 'center',
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

export default ConnectedDevice;

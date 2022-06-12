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
  ToastAndroid,
} from 'react-native';

import AccessoryItem from '../components/AccessoryItem';
//import ProgressCircle from 'react-native-progress-circle';
import CircularProgress from 'react-native-circular-progress-indicator';

import {Component} from 'react/cjs/react.production.min';
import hot_bg_img from '../images/background_img/hot_bg_img.png';
import cold_bg_img from '../images/background_img/login_background.png';

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
import PushNotification from 'react-native-push-notification';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ConnectedDevice({navigation}) {
  const [greet, setGreet] = useState();
  const [sensorData, setSensorData] = useState({
    temp: 0,
    humid: 0,
    uv: 0,
    light: 0,
  });

  // call api
  const getSensorInformation = async () => {
    try {
      const {data} = await axios.get('/sensor/detail', {});
      if (data.success) {
        setSensorData({
          temp: data.info.temp[0].celcius,
          humid: data.info.humid[0].humidity,
          uv: data.info.light[0].uv,
          light: data.info.light[0].light,
        });
        ToastAndroid.showWithGravity(
          'Get Info Successfully!',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );
      }
    } catch (e) {
      console.error(e);
      ToastAndroid.showWithGravity(
        'Get Info Failed!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
  };

  // const createChannel = () => {
  //   PushNotification.createChannel({
  //     channelId: '1',
  //     channelName: 'Get sensor data',
  //   });
  // };

  const handleNotification = ({temp, humid, uv, light}) => {
    PushNotification.cancelAllLocalNotifications();
    PushNotification.localNotification({
      channelId: '1',
      ticker: 'Get sensor data successfully!',
      bigText: `T=${temp}°C, H=${humid}%, UV=${uv}, L=${light}`,
    });
  };

  const getFeelingByTemp = temp => {
    if (temp < 25)
      return {
        title: 'Trời hôm nay khá lạnh đó',
        ad_title: 'Trời khá lạnh',
      };
    if (temp < 30)
      return {
        title: 'Nhiệt độ hoàn hảo để ra ngoài',
        ad_title: 'Thời tiết đẹp',
      };
    if (temp < 35)
      return {title: 'Trời hôm nay khá nóng đó', ad_title: 'Trời khá nóng'};
    if (temp < 40)
      return {title: 'Trời rất nóng, hãy cẩn thận!', ad_title: 'Trời rất nóng'};
  };

  const getFeeling = temp => {
    if (temp < 15)
      return {
        title: 'Freezing Cold',
        image: {
          uri: 'https://i.pinimg.com/564x/8d/2d/a9/8d2da973662e2275c83f0c53e475fa70.jpg',
        },
        msg: 'Tốt hơn hết là bạn nên ở trong nhà và sử dụng lò sưởi (không nên sử dụng sưởi bằng than), mặc quần áo giữ ấm cơ thể .  Uống nhiều nước ấm. Nếu cần ra ngoài bạn nên mặc áo quần dày và mang theo các dụng cụ chống trơn trượt (có thể có tuyết).',
      };
    if (temp >= 15 && temp <= 20)
      return {
        title: 'Cold',
        image: {
          uri: 'https://i.pinimg.com/564x/8d/2d/a9/8d2da973662e2275c83f0c53e475fa70.jpg',
        },
        msg: 'Bạn nên sử dụng lò sưởi khi ở nhà (không nên sử dụng sưởi bằng than), mặc quần áo giữ ấm cơ thể. Ra ngoài trời bạn nên mặc thêm áo dày, găng tay và choàng len. Uống nhiều nước ấm.',
      };
    if (temp > 20 && temp <= 25)
      return {
        title: 'Cool',
        image: {
          uri: 'https://i.pinimg.com/564x/58/16/76/5816764c8263592980816f911e6540d0.jpg',
        },
        msg: 'Thời tiết mát mẻ và dễ chịu. Bạn nên ra ngoài trời vận động, làm việc hoặc vui chơi thay vì nằm ngủ cả ngày ở nhà.',
      };
    if (temp > 25 && temp <= 35)
      return {
        title: 'Warm',
        image: {
          uri: 'https://i.pinimg.com/564x/0f/1f/07/0f1f0735d1180ea44839191fbd20e2f2.jpg',
        },
        msg: 'Thời tiết khá phù hợp với việc hoạt động ngoài trời cũng như trong nhà. Tuy nhiên bạn cũng cần bổ sung nước và thức ăn, thức uống giải nhiệt cho cơ thể (phòng khi hoạt động hoặc ở ngoài trời quá lâu).',
      };
    if (temp > 35 && temp < 40)
      return {
        title: 'Kinda Hot',
        image: {
          uri: 'https://i.pinimg.com/564x/c5/24/59/c52459c8bea20f1f31de8a7b59a75915.jpg',
        },
        msg: 'Nhiệt độ cao khiến cơ thể dễ bị mất nước. Bạn nên ở nhà tránh nóng hoặc ở những nơi điều hòa khí hậu, uống nhiều nước và vitamin C tăng sức đề kháng cho cơ thể. Tránh tiếp xúc trực tiếp với ánh nắng mặt trời.',
      };
    if (temp >= 40)
      return {
        title: 'Burning Hot',
        image: {
          uri: 'https://i.pinimg.com/564x/cd/95/6e/cd956ebaa10e2d6a6779e2db942d6ec3.jpg',
        },
        msg: 'Cố gắng tìm nơi tránh nóng. Thời tiết không thích hợp để đi ra ngoài nhiều, tránh tiếp xúc với ánh nắng mặt trời quá lâu. Bổ sung thêm nhiều nước và vitaminC cho cơ thể. .',
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
    //getUserInformation();
    getSensorInformation();
    const timeOutId = setTimeout(() => {
      getSensorInformation();
    }, 60000);

    return () => clearTimeout(timeOutId);
  }, []);

  // Set the greeting by hours
  const findGreet = () => {
    const hours = new Date().getHours();
    if (hours === 0 || hours < 12) return setGreet('buổi sáng');
    if (hours === 12 || hours < 18) return setGreet('buổi chiều');
    else return setGreet('buổi tối');
  };

  const [hot_accessory, setHotAccessory] = useState([
    {
      name: 'Khẩu trang chống nắng & UV',
      image: facemask,
      detail: 'Bảo vệ khuôn mặt của bạn khỏi ánh nắng trực tiếp mặt trời.',
      id: '1',
    },
    {
      name: 'Váy chống nắng',
      image: sundress,
      detail:
        'Bảo vệ chân bạn khỏi nắng nóng, tiện lợi cho người thường xuyên di chuyển bằng xe máy.',
      id: '2',
    },
    {
      name: 'Kem chống nắng',
      image: sunscreen,
      detail:
        'Bảo vệ da bạn khỏi nắng nóng, tia UV, chống khô da, dưỡng trắng...',
      id: '3',
    },
    {
      name: 'Kính râm',
      image: sunglasses,
      detail:
        'Bảo vệ đôi mắt của bạn khỏi sự tiếp xúc trực tiếp với ánh nắng mặt trời, tia UV, khói bụi,...',
      id: '4',
    },
  ]);
  const [comfort_accessory, setComfortAccessory] = useState([
    {
      name: 'Quần áo thể thao',
      image: sport_clothes,
      detail: 'Phù hợp cho các hoạt động thể dục thể thao ngoài trời.',
      id: '1',
    },
    {
      name: 'Bộ gậy Golf',
      image: golf,
      detail: 'Ngoài ra còn có thể chơi cầu lông, đá bóng, bơi lội,...',
      id: '2',
    },
    {
      name: 'Quần áo thời trang',
      image: fashion_clothes,
      detail:
        'Sẽ thích hợp cho những chuyến du lịch hay thêm vào album của bạn những chiếc ảnh chanh sả vào ngày đẹp trời.',
      id: '3',
    },
    {
      name: 'Máy ảnh',
      image: camera,
      detail: 'Công cụ không thể thiếu khi bạn muốn có một bộ ảnh xinh đẹp. ',
      id: '4',
    },
  ]);
  const [cold_accessory, setColdAccessory] = useState([
    {
      name: 'Áo len, áo khoác dày',
      image: sweater,
      detail: 'Giữ ấm cho cơ thể bạn. ',
      id: '1',
    },
    {
      name: 'Bít tất, găng tay',
      image: sock_gloves,
      detail: 'Giúp tay chân không bị lạnh cóng cả khi ở nhà và ra ngoài trời.',
      id: '2',
    },
    {
      name: 'Khăn quàng cổ',
      image: scarf,
      detail:
        'Phụ kiện giữ ấm cơ thể đi kèm với quần áo mùa đông. Ngoài ra còn có mũ len, chụp tai,...',
      id: '3',
    },
    {
      name: 'Giày đi tuyết',
      image: snow_shoes,
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

  // const getBackground = temp => {
  //   if (temp <= 30)
  //     return {uri: 'https://wallpaperaccess.com/full/2443178.jpg'};
  //   else if (temp > 30) return hot_bg_img;
  //   else return cold_bg_img;
  // };

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: 'https://i.pinimg.com/236x/c1/d2/ec/c1d2ec676e3dccdc8719f9bc9161be88.jpg',
      }}
      //resizeMode="stretch"
    >
      <SafeAreaView style={styles.container}>
        <ScrollView nestedScrollEnabled={true}>
          {/* greeting to user */}
          <View style={styles.greetingView}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://avatars.githubusercontent.com/u/59441604?v=4',
              }}
            />
            <Text style={styles.greeting}>{` Xin chào ${greet}, `}</Text>
            <Text style={styles.fullname}>Duy Tùng</Text>
          </View>
          <View style={styles.childContainer}>
            {/* temperature */}
            <View style={styles.progressCircleView}>
              <CircularProgress
                value={sensorData?.temp}
                maxValue={40}
                valueSuffix={'°C'}
                progressValueStyle={{fontSize: 26, fontWeight: '700'}}
                titleColor={'#424B5A'}
                radius={105}
                progressValueColor={'#424B5A'}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={30}
                activeStrokeWidth={20}
                activeStrokeColor={'#424B5A'}
                activeStrokeSecondaryColor={'#990000'}
              />
            </View>

            {/* feeling by temp */}
            <Text style={styles.feeling}>{`${
              getFeelingByTemp(sensorData?.temp).title
            }`}</Text>

            {/* button navigates view_detail screen */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                getSensorInformation(),
                  handleNotification(
                    sensorData?.temp,
                    sensorData?.humid,
                    sensorData?.uv,
                    sensorData?.light,
                  );
              }}>
              <Text style={styles.buttonName}>refresh dữ liệu</Text>
            </TouchableOpacity>

            {/* info about the weather */}
            <View style={styles.infoView}>
              <Text style={styles.infoTitle}>{`${
                getFeelingByTemp(sensorData?.temp).ad_title
              }`}</Text>
              <Image
                style={styles.infoImage}
                source={getFeeling(sensorData?.temp).image}
              />
              <Text style={styles.infoContent}>{`${
                getFeeling(sensorData?.temp).msg
              }`}</Text>
            </View>

            {/* accessories for weather */}
            <Text style={styles.accessoryTitle}>Phụ kiện hôm nay cho bạn</Text>
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
    padding: 5,
    alignItems: 'center',
    paddingBottom: '25%',
  },
  greetingView: {
    flexDirection: 'row',
    //flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 0.095 * windowHeight,
    padding: 5,
  },
  avatar: {
    width: '15%',
    height: '100%',
    backgroundColor: '#000',
    borderRadius: 50,
  },
  fullname: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
    color: '#000000',
  },
  greeting: {
    //marginTop: '5%',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
    justifyContent: 'flex-start',
    //alignItems: 'center',
    color: '#000000',
  },
  progressCircleView: {
    //top: 85,
    marginTop: '10%',
    width: '100%',
    height: 222,
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
    width: '100%',
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
    lineHeight: 24,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  infoView: {
    marginTop: '10%',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255,0.2)',
    borderWidth: 1,
    borderColor: '#DCE8F5',
    width: '100%',
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
    padding: 10,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 24,
    display: 'flex',
    textAlign: 'justify',
    //backgroundColor: '#fff',
    borderRadius: 10,
  },
  accessoryTitle: {
    marginTop: '13%',
    //marginLeft: '5%',
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

export default ConnectedDevice;

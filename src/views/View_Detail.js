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

const Detail = props => {
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
      //alert('Get Info Failed!');
    }
  };

  // const video_url = {
  //   hot: 'https://media.istockphoto.com/videos/thermometer-on-blue-sky-with-sun-shining-video-id1322031944',
  //   cloudy: 'https://pixabay.com/videos/sky-clouds-wind-heaven-weather-3186/',
  //   rainy: 'https://pixabay.com/videos/rain-thunderstorm-lightning-clouds-305/',
  //   snowy: 'https://pixabay.com/videos/snow-snowfall-snowflakes-flakes-7090/',
  // };

  const getFeelingByTemp = temp => {
    if (temp < 25)
      return {
        title: 'Trời hôm nay khá lạnh đó',
        ad_title: 'Trời khá lạnh',
        t_alert:
          'Nhiệt độ khá thấp, uống nhiều nước ấm và mặc quần áo dày để giữ ấm cơ thể. Nếu nhiệt độ giảm sâu cần sử dụng lò sưởi trong nhà (lưu ý không sử dụng sưởi bằng than trong phòng kín và ban đêm, có thể gây ngạt khí và ngộ độc CO).',
      };
    if (temp < 30)
      return {
        title: 'Nhiệt độ hoàn hảo để ra ngoài',
        ad_title: 'Thời tiết đẹp',
        t_alert:
          'Nhiệt độ hoàn hảo để ra ngoài, tuy nhiên vẫn nên bổ sung nước khi vận động nhiều. Khi ra ngoài nên chú ý chỉ số UV để lựa chọn các phụ kiện phù hợp.',
      };
    if (temp < 35)
      return {
        title: 'Trời hôm nay khá nóng đó',
        ad_title: 'Trời khá nóng',
        t_alert:
          'Nhiệt độ khá cao, cần bổ sung nhiều nước và vitaminC tăng sức đề kháng. Khi ra ngoài cần chú ý chỉ số UV và chuẩn bị các phụ kiện chống nắng.',
      };
    if (temp < 40)
      return {
        title: 'Trời rất nóng, hãy cẩn thận!',
        ad_title: 'Trời rất nóng',
        t_alert:
          'Nhiệt độ rất cao, cần chuẩn bị các phụ kiện bảo hộ chống nắng kỹ càng khi ra ngoài, hạn chế tiếp xúc trực tiếp với ánh nắng mặt trời. Bổ sung nhiều nước, vitaminC, điện giải,… Chú ý không nên mở điều hòa quá thấp, chênh lệnh vừa phải với nhiệt độ ngoài trời, tránh gây sốc nhiệt.',
      };
  };

  const getAdviceByUV = uv => {
    if (uv <= 5)
      return {
        uv_alert:
          'Mức UV an toàn, tuy nhiên vẫn cần sử dụng kem chống nắng. Xem kĩ hơn về tiêu chuẩn kem chống nắng tại phần gợi ý.',
      };
    if (uv > 5 && uv < 7)
      return {
        uv_alert:
          'Mức UV khá cao, cần sử dụng kem chống nắng, váy chống nắng để tránh say nắng, lưu ý bổ sung thêm vitamin để giữ sức khoẻ. ',
      };
    if (uv > 7)
      return {
        uv_alert:
          'Mức UV rất cao, cần đem các trang thiết bị cần thiết và mặc trang bị bảo hộ chống nắng.',
      };
  };

  const getAdviceByHumidity = humid => {
    if (humid <= 40)
      return {
        h_alert:
          'Độ ẩm quá thấp, cần bổ sung gấp nước và sử dụng kem dưỡng ẩm, son dưỡng ẩm cho môi và da. Da có thể bị khô nứt hoặc tác động xấu nếu không sử dụng các sản phẩm bảo vệ hợp lý. Bảo quản các đồ dùng bằng da và gỗ tránh bị nứt.',
      };
    if (humid > 40 && humid <= 65)
      return {
        h_alert: 'Độ ẩm hoàn hảo. vẫn cần bổ sung nhiều nước.',
      };
    if (humid > 65)
      return {
        h_alert:
          'Độ ẩm cao, trời nồm. Sàn nhà dễ tụ nước gây ẩm mốc và dễ trượt té. Lưu ý giữ ấm cơ thể, vì đây là môi trường hoàn hảo cho nấm mốc sinh sôi và phát triển.',
      };
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
    getSensorInformtion();
    const timeOutId = setTimeout(() => getSensorInformtion(), 60000);

    return () => clearTimeout(timeOutId);
  }, []);

  //console.log('sensorData', sensorData);
  return (
    <ImageBackground
      style={styles.background}
      source={{uri: 'https://wallpaperaccess.com/full/1250595.jpg'}}
      resizeMode="stretch">
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.weatherImg}
            source={getFeeling(sensorData?.temp).image}
          />
          <View style={styles.childContainer}>
            <Text
              style={styles.forecast}
              onPress={() => props.navigation.navigate('Weather')}>
              Xem dự báo thời tiết
            </Text>
            <Text style={styles.title}>{`${sensorData?.temp}°C, ${
              getFeelingByTemp(sensorData?.temp).ad_title
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
            <Text style={styles.adviceTitle}>
              Lời khuyên của bác sĩ (uy tín)
            </Text>
            <View style={styles.adviceView}>
              <Text style={styles.adviceContent}>
                {' - '}
                {getFeelingByTemp(sensorData?.temp).t_alert} {'\n'}
                {' - '}
                {getAdviceByUV(sensorData?.uv).uv_alert} {'\n'}
                {' - '}
                {getAdviceByHumidity(sensorData?.humid).h_alert}
              </Text>
            </View>
            {/* Note for sunscreen by UV */}
            {/* <View style={styles.adviceView}>
              <Text style={styles.adviceContent}>
                `{UV < 5: spf từ 30 đến 40} {'\n'}
                5 < UV < 8: spf từ 50 đến 60 {'\n'}
                8 < UV < 10: spf 100}
              </Text>
            </View> */}
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
              size={50}
              resizeMode={'center'}
              color={'rgba(0,0,0,1)'}
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
    height: 2.5 * windowHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  weatherImg: {
    width: '100%',
    height: 0.27 * windowHeight,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  forecast: {
    width: '100%',
    textAlign: 'right',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontSize: 14,
    color: 'blue',
    fontFamily: 'Ubuntu',
    lineHeight: 16,
    marginTop: '3%',
  },
  title: {
    //position: 'absolute',
    marginTop: '7%',
    //marginLeft: '5%',
    width: '100%',
    fontSize: 26,
    textAlign: 'left',
    alignItems: 'center',
    color: '#D57284',
    fontWeight: '600',
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
    //marginLeft: '5%',
    marginTop: '5%',
    width: '100%',
    fontSize: 20,
    //justifyContent: 'center',
    textAlign: 'left',
    //alignItems: 'center',
    color: '#000',
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Ubuntu',
    lineHeight: 24,
  },
  adviceView: {
    width: '100%',
    //position: 'absolute',
    //height: 330,
    backgroundColor: 'rgba(255, 255, 255,0.4)',
    borderRadius: 10,
    marginTop: '3%',
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
    textAlign: 'justify',
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

export default Detail;

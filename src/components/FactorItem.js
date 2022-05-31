import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const FactorItem = ({temp, fah, humid, light, uv, wind}) => {
  return (
    <React.Fragment>
      <View style={styles.listItemView}>
        <View style={styles.ellipse}>
          <Ionicons name="ios-thermometer-outline" size={40} color="red" />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.listItemText}>Nhiệt độ</Text>
          <Text style={styles.detail}>
            {temp}°C {'\t'} | {'\t'} {fah} °F
          </Text>
        </View>
      </View>

      <View style={styles.listItemView}>
        <View style={styles.ellipse}>
          <Ionicons name="water-sharp" size={40} color="blue" />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.listItemText}>Độ ẩm</Text>
          <Text style={styles.detail}>
            {humid}% {'\t'} | {'\t'} Cường độ gió: {wind}
          </Text>
        </View>
      </View>

      <View style={styles.listItemView}>
        <View style={styles.ellipse}>
          <Ionicons name="sunny-outline" size={40} color="yellow" />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.listItemText}>Chỉ số tia UV</Text>
          <Text style={styles.detail}>
            {uv}% {'\t'} | {'\t'} Cường độ ánh sáng: {light}
          </Text>
        </View>
      </View>

      <View style={styles.listItemView}>
        <View style={styles.ellipse}>
          <Ionicons name="ios-heart-sharp" size={40} color="#FF214C" />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.listItemText}>Cảm giác như</Text>
          <Text style={styles.detail}>{parseFloat(temp + 3)}°C</Text>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  listItemView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: '#fff',
    padding: 5,
    marginBottom: '5%',
    borderRadius: 10,
    borderColor: '#9bedff',
    borderWidth: 1,
  },
  listItemText: {
    //paddingLeft: 5,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    //display: 'flex',
    textAlign: 'left',
  },
  ellipse: {
    width: '16%',
    //height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9bedff',
    borderRadius: 100,
    padding: 10,
    borderColor: '#9bedff',

    borderWidth: 1,
    //marginLeft: '2%',
  },
  detail: {
    //paddingLeft: 5,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 24,
    display: 'flex',
    textAlign: 'left',
  },
  contentView: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    //height: '100%',
  },
});

export default FactorItem;

import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const AccessoryItem = ({item}) => {
  return (
    <View style={styles.listItemView}>
      <View style={styles.ellipse}>
        <Image style={styles.img} source={item.image} resizeMode="center" />
      </View>
      <View style={styles.contentView}>
        <Text style={styles.listItemText}>{item.name}</Text>
        <Text style={styles.detail}>{item.detail}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemView: {
    flex: 1,
    width: '97%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 7,
    marginBottom: '8%',
    borderRadius: 10,
  },
  listItemText: {
    //paddingLeft: 5,
    width: '100%',
    //height: '30%',
    fontSize: 14,
    color: '#000',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 24,
    //display: 'flex',
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  ellipse: {
    width: '28%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    borderRadius: 100,
    //padding: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'pink',
    borderRadius: 100,
    //padding: 10,
  },
  detail: {
    //paddingLeft: 5,
    fontSize: 12,
    color: '#000',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 24,
    //display: 'flex',
    textAlign: 'left',
  },
  contentView: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '70%',
    //height: '100%',
  },
});

export default AccessoryItem;

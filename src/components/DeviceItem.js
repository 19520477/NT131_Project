import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const DeviceItem = props => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{props.item.name}</Text>
        <TouchableOpacity style={styles.buttonSquare}>
          <Text style={styles.buttonName}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    paddingBottom: '7%',
    alignItems: 'center',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    width: '82%',
    borderRadius: 5,
  },
  listItemText: {
    paddingLeft: 5,
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
    height: '85%',
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
    fontWeight: '700',
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default DeviceItem;

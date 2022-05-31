import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
//import {Input} from "react-native-elements";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//const [visiblePass, setVisiblePass] = useState(true);
class Inputs extends Component {
  state = {isFocused: false};

  onFocusChange = () => {
    this.setState({isFocused: true});
  };
  render() {
    return (
      <View
        style={[
          styles.inputView,
          {borderColor: this.state.isFocused ? '#283ACF' : '#c2d1d9'},
        ]}>
        <FontAwesome5 name={this.props.icon} size={30} />
        <TextInput
          placeholder={this.props.name}
          value={this.props.value}
          onFocus={this.onFocusChange}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          secureTextEntry={this.props.pass}
          onChangeText={this.props.text}
          autoCapitalize={'none'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    width: '100%',
    height: 50,
    //marginVertical: 10,
    //borderBottomWidth: 1.5,
    flexDirection: 'row',
    marginBottom: 30,
    //backgroundColor: '#C2D1D9',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 10,
    borderBottomWidth: 1,
    //borderColor:
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  inputText: {
    color: '#000',
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '80%',
    height: 20,
    top: (50 % -18) / 2,

    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Inputs;

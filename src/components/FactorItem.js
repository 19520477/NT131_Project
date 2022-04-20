import React, {Component} from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const FactorItem = ({item}) => {
    return (
        <View style = {styles.listItem}>
            <View style = {styles.listItemView}>
                <View style = {styles.ellipse}></View>
                <View style = {styles.contentView}>
                    <Text style = {styles.listItemText}>{item.name}</Text>
                    <Text style = {styles.detail}>detail</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        paddingTop: 25,
    },
    listItemView: {
        width: '95%',
        height: 74,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        left: 5,
        right: 5,
        paddingLeft: 5,
    },
    listItemText: {
        width: 160,
        height: 30,
        paddingLeft: 5,
        fontSize: 14,
        color: '#000',
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24,
        display: 'flex',
        textAlign: 'left',
    },
    ellipse: {
        width: 55,
        height: 55,
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 50,
    },
    detail: {
        width: 160,
        height: 30,
        paddingLeft: 5,
        fontSize: 12,
        color: '#000',
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 24,
        display: 'flex',
        textAlign: 'left',
    },
    contentView: {
        flexDirection: 'column',
        //height: '100%',

    },
});

export default FactorItem;
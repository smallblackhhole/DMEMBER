import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from "react-native";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const BorderPayComfirm = ({ name, sđt, address }) => {
    return (
        <View style={style.container}>
            <View style={style.borderView}>
                <View >
                    <Image style={{ width: 34, height: 34, margin: 10 }} source={require('../Assets/paycomfirmHomelogo.png')} />
                </View>
                <View style={{marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View >
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: '500' }}>{name}</Text>
                        </View>
                        <View style={style.Line}></View>
                        <View>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: '500' }}>{sđt}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12, color: 'black', fontWeight: '400' }}>{address}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default BorderPayComfirm;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    borderView: {
        backgroundColor: 'white',
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Line : {
        height:17,
        borderWidth: 0.3, 
        backgroundColor: '#000000',
        margin: 5 
    }
});
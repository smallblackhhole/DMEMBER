import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from "react-native";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const BorderPayComfirm = ({ name, sđt, address }) => {
    return (
        <View style={style.container}>
            <View style={style.borderView}>
                <View >
                    <Image style={{ width: 50, height: 50, margin: 20 }} source={require('../Assets/paycomfirmHomelogo.png')} />
                </View>
                <View >
                    <View style={{ flexDirection: 'row' }}>
                        <View >
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>{name}</Text>
                        </View>
                        <View style={style.Line}></View>
                        <View>
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>{sđt}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: 'black' }}>{address}</Text>
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
        borderWidth: 0.5, 
        borderColor: 'black',
        margin: 5 
    }
});
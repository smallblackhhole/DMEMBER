import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity } from "react-native";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Thongtin_dcm_2 = ({text,img}) => {
    return (
        <View style={style.container}>

            <View style={{ with: WidthScreen,justifyContent: 'center', height: HeightScreen * 0.09, alignItems: 'center', }}>
                <View style={{ backgroundColor: 'white', width: WidthScreen * 0.9, height: HeightScreen * 0.07, borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ fontSize: 16, flex: 9 ,marginLeft:20}}>
                        <Text style={{ fontSize: 16,}}>{text}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image source={img} />

                    </View>
                </View>
            </View>

        </View>
    );
};

export default Thongtin_dcm_2;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },



});
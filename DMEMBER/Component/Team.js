import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity } from "react-native";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Team = ({text,img}) => {
    return (
        <View style={style.container}>

            <View style={{ with: WidthScreen,justifyContent: 'center', height: HeightScreen * 0.08, alignItems: 'center', }}>
                <View style={{ backgroundColor: 'white', width: WidthScreen * 0.9, height: HeightScreen * 0.07, borderRadius: 5, flexDirection: 'row', alignItems: 'center',borderWidth:1 }}>
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

export default Team;
const style = StyleSheet.create({
    container: {
        flex: 1,
    },



});
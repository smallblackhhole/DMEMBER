import React, { useState } from 'react';
import { StyleSheet, View, Text,  Image,  Dimensions, TouchableOpacity } from "react-native";

import Team from '../Component/Team';
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const TeamList = () => {
    return (
        <View style={style.container}>
            <View style={{ margin: 20, justifyContent: 'center', alignContent: 'center', height: HeightScreen * 0.04, alignItems: 'flex-end' }}>
                <Image source={require('../image/xx.png')} />
            </View>
            <View>
                <Text style={{ fontSize: 16,  marginLeft: 20,height:HeightScreen*0.04,fontWeight:'bold' }}>Danh sách nhóm</Text>
            </View>
            <View style={{ width:WidthScreen,height:HeightScreen*0.4 ,justifyContent: 'center', alignItems: 'center' }}>
          
                <Team
                text={"Nhóm 1"}
                img={require('../image/pen.png')}
                />
                <Team
                text={"Nhóm 2"}
                img={require('../image/pen.png')}
                />
                     <Team
                text={"Nhóm 3"}
                img={require('../image/pen.png')}
                />
                     <Team
                text={"Nhóm 4"}
                img={require('../image/pen.png')}
                />
                     <Team
                text={"Nhóm 5"}
                img={require('../image/pen.png')}
                />
            </View>
            <View style={{ alignItems: 'center',marginTop:200 }}>
                <TouchableOpacity style={style.loginn}>
                    <Text style={{ color: 'white' }}>Lưu</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

export default TeamList;
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        width: WidthScreen,
        height: HeightScreen * 0.03,

    },
    loginn: {
        width: WidthScreen * 0.4,
        height: HeightScreen * 0.07,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },


});
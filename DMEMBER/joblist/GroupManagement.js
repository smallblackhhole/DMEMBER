import React, { useState } from 'react';
import { StyleSheet, View, Text,  Image,  Dimensions, } from "react-native";


import Thongtin_dcm_2 from '../Component/Thongtin_dcm_2';
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const GroupManagement = () => {
    return (
        <View style={style.container}>
            <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'center', alignContent: 'center' }}>
                <View style={{ flex: 3 }}>
                    <Image source={require('../image/back.png')} />
                </View>
                <View style={{ flex: 7 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Quản lý nhóm</Text>
                </View>
            </View>
           
            <View style={style.thanhvien}>

              <Thongtin_dcm_2
              text={"Nhóm 1"}
              img={require('../image/pen.png')}
              />
                 <Thongtin_dcm_2
              text={"Nhóm 1"}
              img={require('../image/pen.png')}
              />
            <Thongtin_dcm_2
              text={"Nhóm 1"}
              img={require('../image/pen.png')}
              />
               <Thongtin_dcm_2
              text={"Nhóm 1"}
              img={require('../image/pen.png')}
              />
            </View>
         
         
        </View>
    );
};

export default GroupManagement;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
        flexDirection: 'column'
    },
    text: {
        justifyContent: 'center',
        width: WidthScreen,
        height: HeightScreen * 0.04,
    },
    thanhvien: {
        width: WidthScreen,
        height: HeightScreen * 0.35,
        justifyContent: 'center'
    },
    loginn: {
        width: WidthScreen * 0.3,
        height: HeightScreen * 0.07,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
import React, { useState } from 'react';
import { StyleSheet, View, Text,  Image,  Dimensions } from "react-native";

import Thongtin_dcm_2 from '../Component/Thongtin_dcm_2';
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const documentmanage_2 = () => {
    return (
        <View style={style.container}>
            <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'center', alignContent: 'center', height: HeightScreen * 0.08 }}>
                <View style={{ flex: 3 }}>
                    <Image source={require('../image/back.png')} />
                </View>
                <View style={{ flex: 7 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Chuyển Dcash</Text>
                </View>
            </View>
            <View style={{ with: WidthScreen, height: HeightScreen * 0.07, justifyContent: 'center' }}>
                <View style={{
                    backgroundColor: 'black',
                    width: WidthScreen * 0.4,
                    height: HeightScreen * 0.05,
                    borderTopRightRadius: 50,
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{ flex: 1, margin: 20 }}>
                        <Image source={require('../image/menu.png')} />
                    </View>
                    <View style={{ flex: 9 }}>
                        <Text style={{ color: 'white' }}>
                            THÔNG TIN
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ width: WidthScreen, height: HeightScreen * 0.11, marginTop: 10, marginBottom: 10 }}>
                <View style={style.text}>
                    <Text style={{ fontSize: 16, color: 'black', left: 20 }}>Bình thạnh</Text>
                </View>

                <Thongtin_dcm_2
                    text={"Bình thạnh"} 
                    img={require('../image/Vector3.png')}/>

            </View>
            <View style={{ width: WidthScreen, height: HeightScreen * 0.13, }}>
                <View style={style.text}>
                    <Text style={{ fontSize: 16, color: 'black', left: 20 }}>Nhóm tài liệu</Text>
                </View>
                <Thongtin_dcm_2
                    text={"Mặc định"}
                    img={require('../image/Vector3.png')} />
            </View>
            <View style={{ width: WidthScreen, height: HeightScreen * 0.13, }}>
                <View style={style.text}>
                    <Text style={{ fontSize: 16, color: 'black', left: 20 }}>Danh mục</Text>
                </View>
                <Thongtin_dcm_2
                    text={"Mặc định"} 
                    img={require('../image/Vector3.png')}/>
            </View>
            

        </View>
    );
};

export default documentmanage_2;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    text: {
        width: WidthScreen,
        height: HeightScreen * 0.03,

    },


});
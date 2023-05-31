import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Dimensions } from "react-native";
import ButtonBack from "../Component/ButtonBack";
import React, { useState } from 'react';
import Thongtin1 from "../Component/Thongtin_1";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const InforTransfer = () => {

    return (
        <View style={style.container}>
            <View style={style.headerbar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Thông tin chuyển khoản"} />
            </View>

            <View style={{ width: WidthScreen, height: HeightScreen * 0.7 }}>
                <View style={style.text}>
                    <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Ngân hàng</Text>
                </View>
                <Thongtin1
                    text={"Techcombank"}
                />
                <View style={style.text}>
                    <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Chi nhánh</Text>
                </View>
                <Thongtin1
                    text={"Tân Bình"}
                />
                <View style={style.text}>
                    <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Số tài khoản</Text>
                </View>
                <Thongtin1
                    text={"19036252454018"}
                />
                <View style={style.text}>
                    <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Tên người thụ hưởng</Text>
                </View>
                <Thongtin1
                    text={"Nguyễn Vũ Linh"}
                />
                <View style={style.text}>
                    <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Số tiền chuyển khoản</Text>
                </View>
                <View style={{ with: WidthScreen, justifyContent: 'center', height: HeightScreen * 0.08, alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', width: WidthScreen * 0.9, height: HeightScreen * 0.07, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 16, color: 'black' }}>50.000</Text>
                        </View>
                    </View>
                </View>
                <View style={style.text}>
                    <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Nội dung chuyển khoản</Text>
                </View>
                <View style={{ with: WidthScreen,justifyContent: 'center', height: HeightScreen * 0.09, alignItems: 'center', }}>
                <View style={{ backgroundColor: 'white', width: WidthScreen * 0.9, height: HeightScreen * 0.07, borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ fontSize: 16, flex: 9 ,marginLeft:20}}>
                        <Text style={{ fontSize: 16,color:'black'}}>TIENHANG 0976674647 13479</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image source={require('../image/saochep.png')} />

                    </View>
                </View>
            </View>
            </View>

            <View style={{ alignItems: 'center', marginTop: 40 }}>
                <TouchableOpacity style={style.loginn}>
                    <Text style={{ color: 'white' }}>Chuyển</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default InforTransfer;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
        flexDirection: 'column'
    },
    headerbar: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        flexDirection: "row",
    },
    text: {
        justifyContent: 'center',
        width: WidthScreen,
        height: HeightScreen * 0.03,
    },
    thanhvien: {
        width: WidthScreen,
        height: HeightScreen * 0.40,
        justifyContent: 'center'
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
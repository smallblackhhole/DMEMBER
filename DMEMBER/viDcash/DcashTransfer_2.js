import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity } from "react-native";

import Memberslist from '../Component/Memberslist';
import Avatar from '../Component/Avata';
import Search from '../Component/Search';
import Avatar2 from '../Component/Avata2';
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const DcashTransfer_2 = () => {
    return (
        <View style={style.container}>
            <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'center', alignContent: 'center' }}>
                <View style={{ flex: 3 }}>
                    <Image source={require('../image/back.png')} />
                </View>
                <View style={{ flex: 7 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Chuyển Dcash</Text>
                </View>
            </View>
            <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Người nhận</Text>
            </View >
            <View style={{ flexDirection: 'row', width: WidthScreen, height: HeightScreen * 0.1, alignItems: 'center', margin: 10 }}>
                <Avatar2
                    img={require('../image/kimngan.png')}
                    name={"Lê Ánh Uyên"}
                />
                <Avatar2
                    img={require('../image/leanhuyen.png')}
                    name={"Lê Ánh Uyên"}
                />
            </View>

            <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Nhập số tiền muốn chuyển </Text>
            </View>
            <View style={{ width: WidthScreen, height: HeightScreen * 0.2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={style.homebuy}>
                    <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>50,000</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <View style={style.homee}>
                        <Text style={{ fontSize: 20, fontWeight: '400', color: 'black', }}>500.000</Text>
                    </View>
                    <View style={style.homeee}>
                        <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>50.000</Text>
                    </View>
                    <View style={style.homeeee}>
                        <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>5.000</Text>
                    </View>
                </View>
            </View>
            <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Lời nhắn</Text>
            </View>
            <View style={{ alignItems: "center", height: HeightScreen * 0.2, margin: 10 }}>
                <Image source={require('../image/note.png')} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={style.loginn}>
                    <Text style={{ color: 'white' }}>Chuyển</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DcashTransfer_2;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
        flexDirection: 'column'
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
    homee: {
        backgroundColor: '#FFCC66',
        borderRadius: 5,
        width: WidthScreen * 0.25,
        height: HeightScreen * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15

    },
    homeee: {
        backgroundColor: '#FFCC66',
        borderRadius: 5,
        width: WidthScreen * 0.25,
        height: HeightScreen * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15


    },
    homeeee: {
        backgroundColor: '#FFCC66',
        borderRadius: 5,
        width: WidthScreen * 0.25,
        height: HeightScreen * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15

    },
    homebuy: {
        backgroundColor: 'white',
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.09,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
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
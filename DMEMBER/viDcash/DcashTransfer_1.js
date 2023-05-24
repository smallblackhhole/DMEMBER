import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity } from "react-native";

import Memberslist from '../Component/Memberslist';
import Avatar from '../Component/Avata';
import Search from '../Component/Search';
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const DcashTransfer_1 = () => {
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
            <View style={style.searchh}>
                <Search
                    img={require('../image/search.png')}
                    text={"Nhập tên, sđt, email người nhận"}
                    add={require('../image/add.png')}
                />
            </View>

            <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Danh sách thành viên</Text>
            </View>
            <View style={style.thanhvien}>

                <Memberslist
                    name={"Lê Kim Ngân"}
                    img={require('../image/kimngan.png')}
                    sđt={"0839020007"}
                />
                <Memberslist
                    name={"Thanh toán Dstore Hồ Chí Minh"}
                    img={require('../image/thanhtoan.png')}
                    sđt={"190070030"}
                />
                <Memberslist
                    name={"Dstore Global"}
                    img={require('../image/global.png')}
                    sđt={"190070030"}
                />
                <Memberslist
                    name={"Lê Ánh Uyên"}
                    img={require('../image/leanhuyen.png')}
                    sđt={"0839020007"}
                />
            </View>
            <View style={{ backgroundColor: 'white', width: WidthScreen, height: HeightScreen * 0.11, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, marginTop: 240 }}>

                <View style={{ flexDirection: 'row', flex: 6.5 }}>
                    <Avatar
                        img={require('../image/leanhuyen.png')}
                        name={"Lê Ánh Uyên"}
                    />
                    <Avatar
                        img={require('../image/kimngan.png')}
                        name={"Lê Kim Ngân"}
                    />
                </View>
                <View style={{ flex: 3.5 }}>
                    <TouchableOpacity style={style.loginn}>
                        <Text style={{ color: 'white' }}>Tiếp tục</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

export default DcashTransfer_1;
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
        height: HeightScreen * 0.40,
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
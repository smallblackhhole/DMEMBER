import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity } from "react-native";

import Memberslist from '../Component/Memberslist';
import Avatar from '../Component/Avata';
import Search from '../Component/Search';
import Thongtin1 from '../Component/Thongtin_1';
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Details_job = () => {
    return (
        <View style={style.container}>
            <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'center', alignContent: 'center' }}>
                <View style={{ flex: 3 }}>
                    <Image source={require('../image/back.png')} />
                </View>
                <View style={{ flex: 7 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Chi tiết công việc </Text>
                </View>
            </View>


            <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Chi nhánh</Text>
            </View>


            <Thongtin1
                text={"DSORE - HCM"}
            />

            <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Phòng ban</Text>
            </View>
            <Thongtin1
                text={"Phòng công nghệ"}
            />

            <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Phòng ban liên quan</Text>
            </View>

            <Thongtin1
                text={"Phòng công nghệ"}
            />

            <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Loại công việc</Text>
            </View>

            <Thongtin1
                text={"Kỹ thuật"}
            />
                  <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Công việc</Text>
            </View>

            <Thongtin1
                text={"Đưa TV lên phòng họp VIP7"}
            />
                  <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Thời gian</Text>
            </View>

            <Thongtin1
                text={"24/05/2022"}
            />
                  <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Gán công việc cho</Text>
            </View>

            <Thongtin1
                text={"DUONGLONG, DUONG NHAT TAM"}
            />
                  <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Trạng thái</Text>
            </View>

            <View style={{ with: WidthScreen,justifyContent: 'center', height: HeightScreen * 0.08, alignItems: 'center'}}>
                <View style={{ backgroundColor: 'white', width: WidthScreen * 0.9, height: HeightScreen * 0.07, borderRadius: 5, flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{marginLeft:20}}>
                        <Text style={{ fontSize: 16,color:'green'}}>Hoàn thành</Text>
                    </View>
             
                </View>
            </View>

        </View>
    );
};

export default Details_job;
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
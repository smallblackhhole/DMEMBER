import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Touchable, TouchableOpacity } from "react-native";
import CheckBox from 'react-native-check-box'
import React, { useState } from 'react';
const addaddress = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <SafeAreaView style={style.container}>
            <View>
                <Image style={{ top: '5%', left: '5%' }} source={require('../image/back.png')} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', left: '30%' }}>Thêm địa chỉ mới </Text>
                <View style={{ paddingTop: '5%', padding: '5%', }}>
                    <View >
                        <Text style={{ fontSize: 16, }}>Tên người nhận</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 5, top: '10%', }}>
                            <TextInput style={{ top: '5%', left: '5%' }} placeholder='Hiền Hòa' placeholderTextColor='#000' />
                        </View>
                    </View>
                    <View >
                        <Text style={style.name}>Số điện thoại</Text>
                        <View style={style.retangle}>
                            <TextInput style={style.textt} placeholder='Nhập số điện thoại  ' placeholderTextColor='#A9A9A9' />
                        </View>
                    </View>
                    <View >
                        <Text style={{ top: '40%', fontSize: 16, }}>Địa chỉ nhận hàng </Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 5, top: '50%', }}>
                            <TextInput style={style.textt} placeholder='Nhập số nhà, tên đường' placeholderTextColor='#A9A9A9' />
                        </View>
                    </View>
                    <View >
                        <Text style={{ top: '60%', fontSize: 16, }}>Tỉnh/Thành phố</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 5, top: '70%', }}>
                            <TextInput style={style.textt} placeholder='Thành phố Hồ Chí Minh' placeholderTextColor='#000' />
                        </View>
                    </View>
                    <View >
                        <Text style={{ top: '80%', fontSize: 16, }}>Quận/Huyện</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 5, top: '90%', }}>
                            <Image style={{ left: '90%', top: '50%' }} source={require('../image/Vector3.png')} />
                            <TextInput style={style.textt} placeholder='vui lòng chọn' placeholderTextColor='#A9A9A9' />
                        </View>
                    </View>
                    <View >
                        <Text style={{ top: '100%', fontSize: 16, }}>Phường/Xã</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 5, top: '110%', }}>
                            <Image style={{ left: '90%', top: '50%' }} source={require('../image/Vector3.png')} />
                            <TextInput style={style.textt} placeholder='Vui lòng chọn' placeholderTextColor='#A9A9A9' />
                        </View>
                    </View>

                </View>
                <View >

                    <CheckBox style={{ left: '5%', top: '170%' }} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                    <Text style={{ fontSize: 16, left: '12%', top: '120%' }}>Đặt làm địa chỉ mặc định</Text>

                </View>
                <TouchableOpacity style={style.loginn}>
                    <Text style={{ color: 'white' }}>Thêm</Text>
                </TouchableOpacity>
            </View> 
        </SafeAreaView>

    );
};

export default addaddress;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    backk: {
        left: '5%',
    },
    name: {
        top: '20%',
        fontSize: 16,
    },
    retangle: {
        backgroundColor: 'white',
        borderRadius: 5,
        top: '30%',
    },
    textt: {
        left: '5%',

    }, 
    loginn: {
        width: '40%',
        height: '7%',
        left: '30%',
        color: 'white',
        backgroundColor: 'black',
        top: '15%',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center',
    },



});
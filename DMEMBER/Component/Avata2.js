import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Dimensions ,TouchableOpacity } from "react-native";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');


const Avatar2 = ({name, img, onRemoveMember}) => {
    const handleRemoveMember = () => {
        onRemoveMember(name); // Gọi hàm xử lý xóa và truyền thông tin thành viên cần xóa
      };
    return (
        <View style={{ width: WidthScreen*0.22, height: HeightScreen * 0.09, justifyContent: 'center', alignItems: 'center', flexDirection: 'column',}}>
            <View style={style.searchh}>
                <View style={style.reangle62}>
                    <Image source={img} />
                    <TouchableOpacity style={style.imgChecked}  onPress={handleRemoveMember}>
                    <Image source={require('../image/x.png')} />
                    </TouchableOpacity>
                </View>
            </View >
            <View style={{ flex: 1 }}>
                <Text>{name}</Text>
            </View>
        </View>
    );
};

export default Avatar2;
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
    reangle62: {
        width: 50,
        height: 51,
    },
    imgChecked: {
        position: 'absolute',
        left:32,
        top:4
    },
});
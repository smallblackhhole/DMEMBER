import { StyleSheet, View, Text, SafeAreaView, Dimensions,   TouchableOpacity, TextInput, Image,  ToastAndroid } from "react-native";
import React, { useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';

import ButtonBack from "../Component/ButtonBack";
import Thongtin1 from "../Component/Thongtin_1";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const InforTransfer = () => {
    const [text, setText] = useState('');

    const copyToClipboard = () => {
        Clipboard.setString(text);
        ToastAndroid.show('Đã sao chép văn bản!', ToastAndroid.SHORT);
    };

    return (
        <SafeAreaView style={style.container}>
            <View style={{ flexDirection: 'column' }}>
                <View style={style.headerBar}>
                    <ButtonBack
                        icon={require('../Assets/Back.png')}
                        title={"Thông tin chuyển khoản"}
                    />
                </View >

                <View>
                    <Text style={style.textt}>Ngân hàng</Text>
                </View>
                <Thongtin1
                    text={"Techcombank"} />

                <View>
                    <Text style={style.textt}>Chi nhánh</Text>
                </View>
                <Thongtin1
                    text={"Tân Bình"} />
                <View>
                    <Text style={style.textt}>Số tài khoản</Text>
                </View>
                <Thongtin1
                    text={"19036252454018"} />
                <View>
                    <Text style={style.textt}>Tên người thụ hưởng</Text>
                </View>
                <Thongtin1
                    text={"Nguyễn Vũ Linh"} />
                <View>
                    <Text style={style.textt}>Số tiền chuyển khoản</Text>
                </View>
                <View style={{ with: WidthScreen, justifyContent: 'center', height: HeightScreen * 0.08, alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', width: WidthScreen * 0.9, height: HeightScreen * 0.07, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ marginLeft: 20 }}>
                            <TextInput
                                placeholder='50.000'
                                style={{ fontSize: 20, color: 'black' }} />
                        </View>
                    </View>
                </View>
                <View >
                    <Text style={style.textt}>Nội dung chuyển khoản</Text>
                </View>
                <View style={{ with: WidthScreen, justifyContent: 'center', height: HeightScreen * 0.08, alignItems: 'center', }}>
                    <View style={{ backgroundColor: 'white', width: WidthScreen * 0.9, height: HeightScreen * 0.07, borderRadius: 5, flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ flex: 8.5 }}>
                            <TextInput
                                placeholder='TIENHANG 0976674647 13479'
                                onChangeText={setText}
                                value={text}
                                style={{ fontSize: 16, color: 'black', left: 20 }} />
                        </View>
                        <TouchableOpacity onPress={copyToClipboard} style={{ flex: 1.5 }} >
                            <Image source={require('../image/saochep.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    <TouchableOpacity style={style.loginn}>
                        <Text style={{ color: 'white' }}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    );
};

export default InforTransfer;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textt: {
        fontSize: 20,
        color: 'black',
        marginLeft: 20
    },
    dropdown: {

        height: HeightScreen * 0.07,
        width: WidthScreen * 0.9,
        borderRadius: 5,
        padding: 20,
        top: 5,
        backgroundColor: '#FFFFFF'
    }
    ,
    //text ở dropdown ngoài
    placeholderStyle: {
        fontSize: 15,
        color: '#000000'
    },
    //text khi chọn xuất hiện ngoài dropdown
    selectedTextStyle: {
        fontSize: 16,
        color: '#000000'
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
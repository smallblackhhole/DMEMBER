import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from "react-native";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const BorderPayComfirm2 = ({ img, name, num, price, dis }) => {

    return (
        <View style={styles.view_sp}>
            <View style={styles.borderView}>
                <View style={styles.img_all}>
                    <Image source={img} style={styles.img_item} />
                </View>
                <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                    <Text style={styles.ten_sp}>{name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.gia_chietkhau}>Giá bán:{' '}
                                <Text style={{ fontWeight: '600', color: '#BE7229' }}>{price}</Text>
                            </Text>
                            <Text style={styles.gia_chietkhau}>Chiết khấu:{' '}
                                <Text style={{ fontWeight: '600', color: '#1151F5' }}>{dis}</Text>
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', position: 'absolute', right: 0, bottom: 0 }}>
                            <Text style={{ color: '#000000', fontWeight: '400', fontSize: 10 }}>Số lượng</Text>
                            <Text style={{ color: '#000000', fontWeight: '400', fontSize: 10, marginLeft: 5 }}>{num}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default BorderPayComfirm2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    borderView: {
        backgroundColor: '#FFFFFF',
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.124,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Line: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 5
    },
    //text giỏ hàng
    textgiohang: {
        fontSize: 21,
        color: '#000000',
        fontWeight: '500',
        marginLeft: 103
    },
    //icon_back
    icon_back: {
        width: WidthScreen * 0.080,//28
        height: HeightScreen * 0.040, //28
    },
    view_gh: {
        flex: 1,
        width: WidthScreen * 0.90,
        // height: height_screen * 0.88,
        // marginLeft: width_screen * 0.06,
        // marginTop: width_screen * 0.08,
        flexDirection: 'column',
        // backgroundColor:'green',
    },
    //view sp
    view_sp: {
        height: HeightScreen * 0.135,
        marginTop: 10,
        alignItems: 'center',
        justifyContent : 'center'
    },
    //item hình ảnh
    img_all: {
        position: 'relative',
        justifyContent: 'flex-start',
    },
    img_item: {
        width: WidthScreen * 0.210,//80
        height: HeightScreen * 0.102,//79
        marginLeft: 8,

    },
    img_corner: {
        position: 'absolute',
        top: 4,
        right: 7,
    },
    img_cornerIcon: {
        width: WidthScreen * 0.056,//20
        height: HeightScreen * 0.033,//23
    },
    //phần vuốt item hiện nút xóa
    OptionBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: WidthScreen * 0.106,//20
        height: HeightScreen * 0.053,//40
        backgroundColor: '#D7232D',
        borderRadius: 50
    },
    xoa: {
        width: WidthScreen * 0.050,//20
        height: HeightScreen * 0.035,//40

    },
    text3: {
        fontSize: 15,
        fontWeight: "500",
        color: 'black'
    },
    // item tên sản phẩm
    ten_sp: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 16,
        width: WidthScreen * 0.620,//239
        height: HeightScreen * 0.062,//48
        // backgroundColor: 'red',

    },
    gia_chietkhau: {
        color: '#000000',
        fontSize: 12,
    },
    // nút tăng giảm số lượng
    giam_sl: {
        width: WidthScreen * 0.067,//20
        height: HeightScreen * 0.033,//48
        backgroundColor: '#000000',
        borderRadius: 7,
        alignItems: 'center',
    },
    //view thanh toán
    tongtien_gh: {
        width: WidthScreen,
        height: HeightScreen * 0.097,//76
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
    },
    //so lượng trong bag img
    img_bag: {
        width: WidthScreen * 0.079,//20
        height: HeightScreen * 0.039,//30
        marginLeft: 24,
    },
    img_cornerIcon2: {
        position: 'absolute',
        top: 11,
        left: -3,
    },

    //số tiền
    text_tt: {
        color: '#BE7229',
        fontWeight: '600',
        fontSize: 21,
        marginLeft: 20
    },
    //button thanh toán
    button_tt: {
        width: WidthScreen * 0.30,//122
        height: HeightScreen * 0.063,//50
        backgroundColor: '#000000',
        borderRadius: 10,
        justifyContent: 'center',
        marginLeft: 90
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '600',

    },
    headerbar: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        justifyContent: 'center'
    }
});
import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, Switch, TextInput } from 'react-native'
import ButtonBack from '../Component/ButtonBack';
import Line from "../Component/Line";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const DetailTeam = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Chi tiết thành viên"}
                />
            </View>
            <View style={styles.btndelete}>
                <Text style={styles.deletetxt}>Xóa</Text>
            </View>
            <View style={styles.Viewmem}>
                <View style={styles.Bordmem}>
                    <View style={styles.flex1}>
                        <Image style={styles.imgmem} source={require('../Assets/detailmember.png')} />
                    </View>
                    <View style={styles.flex2}>
                        <Text style={styles.name}>NGUYỄN VĂN A</Text>
                        <Text>bo037@gmail.com</Text>
                    </View>
                    <View style={styles.flex3}>
                        <View style={styles.potisionView}>
                            <View style={styles.bord}>
                                <View style={styles.borderorder}>
                                    <Image source={require('../Assets/hisorder.png')} />
                                </View>
                                <Text style={styles.ordertext}>Lịch sử bán trả hàng</Text>
                            </View>
                            <View style={styles.Line}></View>
                            <View style={styles.bord}>
                                <View style={styles.borderorder}>
                                    <Image source={require('../Assets/order.png')} />
                                </View>
                                <Text style={styles.ordertext}>Đơn đặt hàng</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.ViewtextTitle2}>
                <Text style={styles.TextTitle2}>Thông tin liên hệ</Text>
            </View>
            <View style={styles.ViewInfo}>
                <View style={styles.ViewInfoBord}>
                    <View style={styles.Info}>
                        <Text style={styles.text1}>Địa chỉ</Text>
                        <Text style={styles.text2}>256 Bạch Đằng, Phường 24, Bình Thạnh, TPHCM</Text>
                    </View>
                    <View style={styles.Info}>
                        <Text style={styles.text1}>Số điện thoại</Text>
                        <Text style={styles.text2}>+84 1296745382</Text>
                    </View>
                    <View style={styles.Info}>
                        <Text style={styles.text1}>Ngày sinh</Text>
                        <Text style={styles.text2}>11/06/1995</Text>
                    </View>
                    <View style={styles.Info}>
                        <Text style={styles.text1}>Giới tính</Text>
                        <Text style={styles.text2}>Nữ</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBAE35'
    },
    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btndelete: {
        width: WidthScreen,
        height: 20,
    },
    deletetxt: {
        color: '#D21E1E',
        fontSize: 14,
        fontWeight: "500",
        textAlign: "right",
        marginRight: '10%'
    },
    Viewmem: {
        width: WidthScreen,
        marginTop: 50,
        height: HeightScreen * 0.3,
        justifyContent: "center",
        alignItems: "center",
    },
    Bordmem: {
        width: '90%',
        height: '90%',
        flexDirection: "column",
        borderRadius: 10,
        backgroundColor: 'white'
    },
    imgmem: {
        position: "absolute",
        bottom: 0
    },
    flex1: {
        flex: 2,
        alignItems: "center",
    },
    flex2: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    flex3: {
        justifyContent: "center",
        alignItems: "center",
        flex: 5,
    },
    name: {
        color: 'black',
        fontSize: 18,
        fontWeight: "500"
    },
    borderorder: {
        width: 40,
        height: 40,
        backgroundColor: 'black',
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    Line: {
        borderColor: 'black',
        width: 50,
        borderWidth: 1,
        transform: [{ rotate: '90deg' }]
    },
    potisionView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20
    },
    ordertext: {
        color: 'black',
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
        maxWidth: '70%'
    },
    bord: {
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: '100%'
    },
    ViewtextTitle2: {
        marginTop: 10,
        width: WidthScreen,
        height: HeightScreen * 0.05,
        justifyContent: "center",
    },
    TextTitle2: {
        color: 'black',
        fontSize: 18,
        fontWeight: "500",
        marginLeft: 20
    }, 
    ViewInfo : {
        width :WidthScreen,
        height : HeightScreen*0.4,
        justifyContent : "center",
        alignItems : "center",
    },
    ViewInfoBord : {
        width : '90%',
        height : '90%',
        flexDirection : "column",
        alignItems : "center",
        backgroundColor : 'white',
        borderRadius : 10
    },
    Info : {
        marginTop : 25,
        width : '90%',
    },
    text1 : {
        color :'black',
        fontSize : 15,
        fontWeight : "500",
        opacity : 0.5
    },
    text2 : {
        color :'black',
        marginTop : 5,
        fontSize : 15,
        fontWeight : "500",
    }
});

export default DetailTeam;
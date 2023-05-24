import React from "react";
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import ButtonBack from "../Component/ButtonBack";
import LogoAccount from "../Component/LogoAccount";
import BorderAccount from "../Component/BorderAccount";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const AccountScreenBeforeLogin = () => {
    return (
        <View style={styles.container}>
            <ButtonBack
                icon={require('../Assets/Back.png')}
                title={"Tài Khoản"} />
            <View style={styles.logo}>
                <LogoAccount
                    img={require('../Assets/logoNull.png')}
                />
            </View>
            <View style={styles.ViewFull}>
                <View style={styles.View1}>
                    <Text style={styles.nameNull}>Account 1</Text>
                    <View style={styles.loginbtn}>
                        <Text style={styles.textloginbtn}>Đăng nhập ngay</Text>
                    </View>
                </View>
                <View style={styles.ViewtextTitle2}>
                    <Text style={styles.TextTitle2}>Chức năng khác</Text>
                </View>
                <View style={styles.MoreOption}>
                    <BorderAccount
                        icon={require('../Assets/share.png')}
                        name={"Chia sẻ app"} />
                    <BorderAccount
                        icon={require('../Assets/security.png')}
                        name={"Thiết lập bảo mật"} />
                    <BorderAccount
                        icon={require('../Assets/map.png')}
                        name={"Quản lí địa chỉ"} />
                    <BorderAccount
                        icon={require('../Assets/education.png')}
                        name={"Đào tạo"} />
                    <BorderAccount
                        icon={require('../Assets/team.png')}
                        name={"Danh sách thành viên"} />
                    <BorderAccount
                        icon={require('../Assets/report.png')}
                        name={"Báo cáo"} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffbb00'
    },
    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        flexDirection: "row",
    },
    title: {
        color: 'black',
        fontSize: 22,
        fontWeight: "500",
    },
    logo: {
        width: WidthScreen,
        height: HeightScreen * 0.1,
        paddingTop: 60,
        flexDirection: "column",
        alignItems: "center",
        zIndex: 998
    },
    ViewFull: {
        width: WidthScreen,
        height: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    nameNull: {
        color: 'black',
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 5
    },
    View1: {
        width: WidthScreen,
        height: HeightScreen * 0.15,
        justifyContent: "center",
        marginTop: 30,
        flexDirection: "column",
        alignItems: "center",
    },
    loginbtn: {
        width: '50%',
        height: '40%',
        borderRadius: 10,
        backgroundColor: '#19A538',
        alignItems: "center",
        justifyContent: 'center'
    },
    textloginbtn: {
        color: 'white',
        fontWeight: "500",
        fontSize: 16
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
        fontWeight: "600",
        marginLeft: 20
    },
    MoreOption: {
        width: WidthScreen,
        height: '100%',
        alignItems: "center",
    }
})

export default AccountScreenBeforeLogin;
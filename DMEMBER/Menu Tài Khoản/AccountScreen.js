import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, FlatList, Dimensions } from "react-native";
import BorderAccount from "../Component/BorderAccount";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');


const AccountScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.texttitle}>Tài Khoản</Text>
                </View>
                <View style={styles.AccountBackground}>
                    <View style={styles.borderRadiusImage}></View>
                    <Image style={styles.ImageAccount} source={require('../Assets/ImageAccount.png')} />
                    <View style={styles.viewname}>
                        <Text style={styles.textName}>LÊ HUỲNH BÁ TOÀN</Text>
                        <Image style={styles.editname} source={require('../Assets/EditName.png')} />
                    </View>
                    <Text style={styles.potision}>Bank Office</Text>
                    <View style={styles.viewdayend}>
                        <Text style={styles.textdayend}>Ngày hết hạn: 24/05/2022</Text>
                        <Text style={{ position: "relative", left: 14, zIndex: 999, color: 'white', fontWeight: "700" }}>!</Text>
                        <Image style={styles.icondayend} source={require('../Assets/warningAccount.png')} />
                    </View>
                    <View style={styles.viewSale}>
                        <View style={styles.potisionView}>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={styles.textPotision}>Bank Office</Text>
                                <Text style={styles.timelinePotision}>Vị trí hiện tại</Text>
                            </View>
                            <Image source={require('../Assets/Polygon.png')} />
                            <View style={{ flexDirection: "column" }}>
                                <Text style={styles.textPotision}>Vị trí kế tiếp</Text>
                                <Text style={styles.timelinePotision}>Chưa xác định</Text>
                            </View>
                        </View>
                        <ScrollView style={styles.SaleView} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.salecase1}>
                                <Text style={styles.textmoney}>0đ</Text>
                                <Text style={styles.textmoney}>Doanh số cá nhân</Text>
                            </View>
                            <View style={styles.salecase2}>
                                <Text style={styles.textmoney}>0đ</Text>
                                <Text style={styles.textmoney}>Doanh số hệ thống</Text>
                            </View>
                            <View style={styles.salecase3}>
                                <Text style={styles.textmoney}>0đ</Text>
                                <Text style={styles.textmoney}>Mục tiêu thành công</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.ViewtextTitle2}>
                        <Text style={styles.TextTitle2}>Chức năng khác</Text>
                    </View>
                    <View style={styles.MoreOption}>
                        <BorderAccount
                            icon={require('../Assets/share.png')}
                            name={"Chia sẻ app"}
                            navi={'Shareapp'} />
                        <BorderAccount
                            icon={require('../Assets/security.png')}
                            name={"Thiết lập bảo mật"}
                            navi={'Security'} />
                        <BorderAccount
                            icon={require('../Assets/map.png')}
                            name={"Quản lí địa chỉ"}
                            navi={"Map"} />
                        <BorderAccount
                            icon={require('../Assets/education.png')}
                            name={"Đào tạo"} />
                        <BorderAccount
                            icon={require('../Assets/team.png')}
                            name={"Danh sách thành viên"}
                            navi={"Team"} />
                        <BorderAccount
                            icon={require('../Assets/report.png')}
                            name={"Báo cáo"}
                            navi={"Report"} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#FBAE35',
        flexDirection: "column"
    },
    texttitle: {
        fontSize: 21,
        fontFamily: 'Montserrat',
        color: 'black',
        fontWeight: "700",
        textAlign: "center",
        paddingTop: 25
    },
    AccountBackground: {
        backgroundColor: 'white',
        width: '100%',
        height: HeightScreen,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignItems: "center",
        marginTop: 100,
        paddingBottom: 120
    },
    ImageAccount: {
        position: "absolute",
        top: -40
    },
    borderRadiusImage: {
        position: "relative",
        bottom: 45,
        width: 110,
        height: 110,
        backgroundColor: 'white',
        borderRadius: 55
    },
    viewname: {
        flexDirection: "row",
        paddingLeft: 25,
        bottom: 30,
        width: '100%',
        height: '5%',
        justifyContent: "center",
        textAlign: "center"
    },
    textName: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        paddingLeft: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    editname: {
        width: 25,
        height: 25,
        marginLeft: 20
    },
    potision: {
        fontSize: 15,
        fontFamily: 'Montserrat',
        fontWeight: "600",
        color: 'black',
        bottom: 35
    },
    viewdayend: {
        backgroundColor: '#16C7BD',
        flexDirection: "row",
        width: WidthScreen * 0.55,
        height: HeightScreen * 0.04,
        borderRadius: 30,
        bottom: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    textdayend: {
        color: 'white',
        fontWeight: "700"
    },
    icondayend: {
        marginLeft: 5,
        width: 15,
        height: 15
    },
    viewSale: {
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.212,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        elevation: 6
    },
    potisionView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 20,
        marginHorizontal: 40,
    },
    textPotision: {
        color: '#16C7BD',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: "700",
        textAlign: "center",
    },
    SaleView: {
        height: HeightScreen * 0.7,
        flexDirection: "row",
    },
    salecase1: {
        width: WidthScreen * 0.315,//120
        height: HeightScreen * 0.082,
        backgroundColor: '#FBCC80',
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 10
    },
    salecase2: {
        width: WidthScreen * 0.315,//120
        height: HeightScreen * 0.082,
        backgroundColor: '#5EC7C1',
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginHorizontal: 10
    },
    salecase3: {
        width: WidthScreen * 0.315,//120
        height: HeightScreen * 0.082,
        backgroundColor: '#8ABF3D',
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
        marginTop: 20,
        marginHorizontal: 10
    },
    timelinePotision: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        fontWeight: "700",
        textAlign: "center",
        color: 'black'
    },
    textmoney: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: 'white',
        fontWeight: "700"
    },
    ViewOption: {
        flex: 1,
        flexDirection: "column",
        width: '100%',
        height: '100%',
        padding: 20,

    },
    touchOptionView: {
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 10,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        padding: 15,
        marginTop: 10,
    },
    textOptionView: {
        fontFamily: 'Montserrat',
        color: 'black',
        fontWeight: "400",
        fontSize: 15,
        paddingLeft: 10
    },
    MoreOption: {
        width: WidthScreen,
        height: HeightScreen,
        alignItems: "center",
        // backgroundColor:'pink'
    },
    ViewtextTitle2: {
        marginTop: 10,
        width: WidthScreen,
        height: HeightScreen * 0.05,
        justifyContent: "center",
    },
    TextTitle2: {
        color: 'black',
        fontSize: 17,
        fontWeight: "500",
        marginLeft: 20
    },
});

export default AccountScreen;

import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import BorderAccount from "../Component/BorderAccount";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');
import AccountScreenBeforeLogin from "../AccountScreenBFLOG/BeforeLoginScreen";
import { useNavigation } from "@react-navigation/native";


const AccountScreen = ({ route }) => {
    const navigation = useNavigation();
    const login = route.params?.data?.isLogin;
    const username = route.params?.data?.username;

    return !login ? (
        <AccountScreenBeforeLogin />
    ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
            {username === '1' ? (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.texttitle}>Tài Khoản</Text>
                    </View>
                    <View style={styles.AccountBackground}>
                        <View style={styles.borderRadiusImage}></View>
                        <Image style={styles.ImageAccount} source={require('../Assets/ImageAccount.png')} />
                        <View style={styles.viewname}>
                            <Text style={styles.textName}>LÊ HUỲNH BÁ TOÀN</Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('InfomationScreen') }}>
                                <Image style={styles.editname} source={require('../Assets/EditName.png')} />
                            </TouchableOpacity>
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
            ) : (
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
                                <TouchableOpacity onPress={() => { navigation.navigate('InfomationScreen') }}>
                                    <Image style={styles.editname} source={require('../Assets/EditName.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.viewSale2}>
                                <Image style={{ position: "absolute", width: '100%', height: '100%', resizeMode: "stretch" }} source={require('../Assets/imgAccount2.png')} />
                                <View style={styles.potisionView}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={styles.textPotision2}>DOLO FRIEND</Text>
                                        <Text style={styles.timelinePotision}>Thứ hạng hiện tại</Text>
                                    </View>
                                    <Image source={require('../Assets/Polygon2.png')} />
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={styles.textPotision2}>DOLO FAMILY</Text>
                                        <Text style={styles.timelinePotision}>Thứ hạng kế tiếp</Text>
                                    </View>
                                </View>
                                <View style={styles.Line1}>
                                    <Image style={{ width: 25, height: 25, marginLeft: 25 }} source={require('../Assets/iconAccount2.png')} />
                                    <Text style={styles.textAccount2}>Để thăng hạng Family</Text>
                                </View>
                                <View style={styles.Line2}>
                                    <Text style={styles.textAccount1}>Tích lũy</Text>
                                </View>
                                <View style={styles.Line3}>
                                    <Text style={styles.textAccount3}>5,055/</Text>
                                    <Text style={styles.textAccount4}>10,000 DOLO POINT</Text>
                                </View>
                                <View style={styles.Line4}>
                                    <Text style={styles.textAccount5}>Tích lũy thêm 4, 945 DOLO POINT để đạt hạng </Text>
                                    <Text style={styles.textAccount6}>Family</Text>
                                </View>
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
            )}
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBAE35',
        flexDirection: "column",
        paddingBottom: 20
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
        height: HeightScreen,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
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
        width: WidthScreen * 0.290,//110
        height: HeightScreen * 0.141,//110
        backgroundColor: '#FFFFFF',
        borderRadius: 55
    },
    viewname: {
        flexDirection: "row",
        paddingLeft: 25,
        bottom: 30,
        height: HeightScreen * 0.042,//110
        justifyContent: "center",
        textAlign: "center",
        // backgroundColor: 'red',
    },
    textName: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        paddingLeft: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    editname: {
        width: WidthScreen * 0.066,//25
        height: HeightScreen * 0.033,//25
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
        height: HeightScreen * 0.225,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        elevation: 6,
        bottom: 20
    },
    viewSale2: {
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.225,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        bottom: 20
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
    textPotision2: {
        color: '#FBAE35',
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
        backgroundColor: '#FFFFFF',
        elevation: 2,
        borderRadius: 10,
        height: 100,
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
        bottom: 20
        // backgroundColor:'pink'
    },
    ViewtextTitle2: {
        width: WidthScreen,
        height: HeightScreen * 0.05,
        justifyContent: "center",
        bottom: 20
    },
    TextTitle2: {
        color: 'black',
        fontSize: 17,
        fontWeight: "500",
        marginLeft: 20
    },
    Line1: {
        marginTop: 20,
        width: '100%',
        height: '15%',
        alignItems: "center",
        flexDirection: 'row',
    },
    textAccount2: {
        color: 'white',
        fontSize: 16,
        fontWeight: "400",
        marginLeft: 10
    },
    textAccount1: {
        color: 'white',
        fontSize: 14,
        fontWeight: "400",
        marginLeft: 25
    },
    Line2: {
        width: '100%',
        height: '10%',
        alignItems: "center",
        flexDirection: 'row',
    },
    Line3: {
        width: '100%',
        height: '15%',
        alignItems: "center",
        flexDirection: 'row',
    },
    textAccount3: {
        color: '#19A538',
        fontSize: 14,
        fontWeight: "600",
        marginLeft: 25
    },
    textAccount4: {
        color: 'white',
        fontSize: 14,
        fontWeight: "600",
    },
    Line4: {
        width: '100%',
        height: '15%',
        alignItems: "center",
        flexDirection: 'row',
    },
    textAccount5: {
        color: 'white',
        fontSize: 14,
        fontWeight: "600",
        marginLeft: 25
    },
    textAccount6: {
        color: '#FBAE35',
        fontSize: 14,
        fontWeight: "500",
    },
});

export default AccountScreen;

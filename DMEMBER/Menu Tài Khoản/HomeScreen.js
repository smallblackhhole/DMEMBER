import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Modal from 'react-native-modal';
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');


const HomeScreen = () => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={styles.container}>
            <View style={styles.balanceView}>
                <View style={styles.balanceBord}>
                    <View style={styles.flex1Balance}>
                        <View style={styles.ViewItemBalance}>
                            <Text style={styles.textbalance1}>Số dư DSS</Text>
                        </View>
                        <View style={styles.ViewItemBalance}>
                            <Text style={styles.textbalance2}>48,000 CP</Text>
                            <Text style={styles.textbalance3}>/0,24%</Text>
                        </View>
                        <View style={styles.ViewItemBalance}>
                            <View style={{ flexDirection: "column" }}>
                                <Image source={require('../Assets/xapxi.png')} />
                                <Image source={require('../Assets/xapxi.png')} />
                            </View>
                            <Text style={styles.textbalance4}>480,000,00 VNĐ</Text>
                        </View>
                    </View>
                    <View style={styles.flex2Balance}>
                        <Image style={styles.Imgbalance} source={require('../Assets/HomeImg.png')} />
                    </View>
                </View>
            </View>
            <View style={styles.ViewtextTitle2}>
                <Text style={styles.TextTitle2}>Danh sách ví</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ViewFull}>
                    <View style={styles.ListWalletView}>
                        <TouchableOpacity style={styles.ListWalletBord} onPress={() => { navigation.navigate('Dcash') }}>
                            <View style={styles.flexList1}>
                                <View style={styles.borderListWal}>
                                    <Image style={styles.ImgList} source={require('../Assets/Wallet1.png')} />
                                </View>
                            </View>
                            <View style={styles.flexList2}>
                                <Text style={styles.textList}>Số dư Dcash</Text>
                                <Text style={styles.textList1}>434,403</Text>
                            </View>
                            <View style={styles.flexList3}>
                                <View >
                                    <Image source={require('../Assets/Vector.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ListWalletBord}>
                            <View style={styles.flexList1}>
                                <View style={styles.borderListWal}>
                                    <Image style={styles.ImgList} source={require('../Assets/Wallet2.png')} />
                                </View>
                            </View>
                            <View style={styles.flexList2}>
                                <Text style={styles.textList}>Số dư Dpoint</Text>
                                <Text style={styles.textList2}>254,975</Text>
                            </View>
                            <View style={styles.flexList3}>
                                <Image source={require('../Assets/Vector.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ListWalletBord}>
                            <View style={styles.flexList1}>
                                <View style={styles.borderListWal}>
                                    <Image style={styles.ImgList} source={require('../Assets/Wallet3.png')} />
                                </View>
                            </View>
                            <View style={styles.flexList2}>
                                <Text style={styles.textList}>Số dư Dcredit</Text>
                                <Text style={styles.textList3}>50,000</Text>
                            </View>
                            <View style={styles.flexList3}>
                                <Image source={require('../Assets/Vector.png')} />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.Seeall}>Xem tất cả</Text>
                    </View>
                    <View style={styles.optionView}>
                        <View style={styles.optionBord}>
                            <View style={styles.Line1}>
                                <View style={styles.ItemOption}>
                                    <View style={styles.borderOption}>
                                        <Image source={require('../Assets/optionHome1.png')} />
                                    </View>
                                    <Text style={styles.textOption}>Xác nhận thanh toán</Text>
                                </View>
                                <View style={styles.ItemOption}>
                                    <View style={styles.borderOption}>
                                        <Image source={require('../Assets/optionHome2.png')} />
                                    </View>
                                    <Text style={styles.textOption}>Xác nhận đơn hàng</Text>
                                </View>
                                <View style={styles.ItemOption}>
                                    <View style={styles.borderOption}>
                                        <Image source={require('../Assets/optionHome3.png')} />
                                    </View>
                                    <Text style={styles.textOption}>Quản lí Dcredit</Text>
                                </View>
                            </View>
                            <View style={styles.Line2}>
                                <TouchableOpacity style={styles.ItemOption} onPress={() => navigation.navigate('Bord')}>
                                    <View style={styles.borderOption}>
                                        <Image source={require('../Assets/optionHome4.png')} />
                                    </View>
                                    <Text style={styles.textOption}>QR</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.ItemOption} onPress={toggleModal}>
                                    <View style={styles.borderOption}>
                                        <Image source={require('../Assets/optionHome5.png')} />
                                    </View>
                                    <Text style={styles.textOption}>Nạp Dcash</Text>
                                    <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
                                        <View style={styles.ViewModal}>
                                            <View style={styles.header}></View>
                                            <View style={styles.header2}>
                                                <View style={{ flex: 2, alignItems: "center" }}>
                                                    <Image style={{ position: "absolute", top: -50 }} source={require('../Assets/warningrecharge.png')} />
                                                </View>
                                                <View style={{ flex: 2, alignItems: "center" , justifyContent : "center",marginTop:20  }}>
                                                    <Text style={{ color: '#FBAE35', fontSize: 18, fontWeight: "600" }}>Thông báo</Text>
                                                </View>
                                                <View style={{ flex: 2, alignItems: "center", justifyContent : "center"  }}>
                                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: "500", marginBottom:13 }}>Vui lòng nạp tối thiểu 50,000</Text>
                                                </View>
                                                <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                                                    <TouchableOpacity style={styles.borderAgree} onPress={toggleModal} >
                                                        <Text style={{ color: 'white', fontSize: 14, fontWeight: "600" }}>Đồng ý</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </Modal>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.ItemOption} onPress={() => {navigation.navigate('WithdrawDcash')}}>
                                    <View style={styles.borderOption}>
                                        <Image source={require('../Assets/optionHome6.png')} />
                                    </View>
                                    <Text style={styles.textOption}>Rút Dcash</Text>
                                </TouchableOpacity>
                            </View>
                        </View>                        
                    </View>
                </View>         
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBAE35'
    },
    balanceView: {
        width: WidthScreen,
        height: HeightScreen * 0.15,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    balanceBord: {
        width: WidthScreen * 0.9,
        height:HeightScreen * 0.141,//108
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        flexDirection: "row"
    },
    flex1Balance: {
        flex: 6.5,
        flexDirection: "column",
        justifyContent: "center"
    },
    flex2Balance: {
        flex: 3.5,
        justifyContent: "center",
        alignItems: "center"
    },
    Imgbalance: {
        width:   WidthScreen * 0.299,
        height:  HeightScreen * 0.126,
        resizeMode: "stretch",
    },
    textbalance1: {
        color: 'black',
        fontWeight: "400",
        fontSize: 14
    },
    textbalance2: {
        color: 'black',
        fontWeight: "500",
        fontSize: 17
    },
    textbalance3: {
        color: '#19A538',
        fontWeight: "500",
        fontSize: 11
    },
    textbalance4: {
        color: '#19A538',
        fontWeight: "600",
        fontSize: 17,
        marginLeft: 2
    },
    ViewItemBalance: {
        flexDirection: "row",
        marginLeft: 20,
        alignItems: "center"
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
    ViewFull: {
        width: WidthScreen,
        height: HeightScreen,
    },
    ListWalletView: {
        width: WidthScreen,
        height: HeightScreen * 0.3,
        alignItems: "center",
    },
    ListWalletBord: {
        width: WidthScreen * 0.9,
        height:HeightScreen * 0.075,
        backgroundColor: '#FFFFFF',
        flexDirection: "row",
        borderRadius: 10,
        margin: 5,
    },
    borderListWal: {
        width: WidthScreen * 0.106,//40
        height: HeightScreen * 0.053,//40
        borderRadius: 20,
        backgroundColor: 'rgba(17, 81, 245, 0.1)',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 15,
        //backgroundColor: 'red',
    },
    ImgList: {
        width: WidthScreen * 0.106,//40
        height: HeightScreen * 0.053,//40
    },
    textList: {
        fontSize: 13,
        fontWeight: "500",
        color: 'black'
    },
    textList1: {
        fontSize: 17,
        fontWeight: "600",
        color: '#F55B00'
    },
    textList2: {
        fontSize: 18,
        fontWeight: "600",
        color: '#1D83D4'
    },
    textList3: {
        fontSize: 18,
        fontWeight: "600",
        color: '#19A538'
    },
    flexList1: {
        flex: 2
    },
    flexList2: {
        flex: 7,
        flexDirection: "column",
        justifyContent: "center"
    },
    flexList3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    Seeall: {
        color: 'black',
        fontSize: 13,
        fontWeight: "400"
    },
    optionView: {
        width: WidthScreen,
        height: HeightScreen * 0.3,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        //backgroundColor: 'red',
    },
    optionBord: {
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.335,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        flexDirection: "column",
        justifyContent: "center",
    },
    Line1: {
        flexDirection: "row",
    },
    Line2: {
        flexDirection: "row"
    },
    borderOption: {
        width: WidthScreen * 0.152,//60
        height: HeightScreen * 0.078,//60
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
         backgroundColor: 'rgba(196, 196, 196, 0.3)',
    },
    ItemOption: {
        flexDirection: "column",
        flex: 1,
        alignItems: "center"
    },
    textOption: {   
        width: WidthScreen * 0.229,//86
        height: HeightScreen * 0.050,//60
        color: 'black',
        fontWeight: "500",
        fontSize: 15,
        textAlign: "center",
        marginTop: 5,
       // backgroundColor:'pink'
       
    },
    ViewModal: {
        height: HeightScreen * 0.340,//262
        flexDirection: "column",
    },
    header: {
        flex: 3,
        backgroundColor: '#FBAE35',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
       
    },
    header2: {
        flex: 7,
        backgroundColor: 'white',
        alignItems: "center",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        
    },
    borderAgree: {
        width: WidthScreen * 0.305,//116
        height: HeightScreen * 0.059,//46
        backgroundColor: 'black',
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    }
});
export default HomeScreen;
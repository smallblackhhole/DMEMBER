import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import Line from "../Component/Line";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');


const HistoryScreen = ({route}) => {
    const order = route.params
    const navigation = useNavigation();
    const [activeOption, setActiveOption] = useState('done');
console.log(order);
    const handleOptionPress = (
        option) => {
        setActiveOption(option);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <Text style={styles.TextTitle}>Đơn hàng</Text>
            </View>
            <View style={styles.Option}>
                <View style={styles.BorderOption}>
                    <View style={styles.OptionLine1}>
                        <TouchableOpacity onPress={() => handleOptionPress('waitpay')}>
                            {activeOption === 'waitpay' ? (
                                    <View style={styles.borderOptionClick}>
                                        <Text style={[styles.textOption, { color: 'white' }]}>Chờ thanh toán</Text>
                                    </View>
                            ) : (
                                <Text style={[styles.textOption, { color: 'black' }]}>Chờ thanh toán</Text>
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOptionPress('done')}>
                            {activeOption === 'done' ? (
                                <View style={styles.borderOptionClick}>
                                    <Text style={[styles.textOption, { color: 'white' }]}>Hoàn thành</Text>
                                </View>
                            ) : (
                                <Text style={[styles.textOption, { color: 'black' }]}>Hoàn thành</Text>
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOptionPress('cancel')}>
                            {activeOption === 'cancel' ? (
                                <View style={styles.borderOptionClick}>
                                    <Text style={[styles.textOption, { color: 'white' }]}>Đã hủy</Text>
                                </View>
                            ) : (
                                <Text style={[styles.textOption, { color: 'black' }]}>Đã hủy</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.OptionLine2}>
                        <TouchableOpacity onPress={() => handleOptionPress('all')}>
                            {activeOption === 'all' ? (
                                <View style={styles.borderOptionClick}>
                                    <Text style={[styles.textOption, { color: 'white' }]}>Tất cả</Text>
                                </View>
                            ) : (
                                <Text style={[styles.textOption, { color: 'black' }]}>Tất cả</Text>
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOptionPress('Dcash')}>
                            {activeOption === 'Dcash' ? (
                                <View style={styles.borderOptionClick}>
                                    <Text style={[styles.textOption, { color: 'white' }]}>Dcash</Text>
                                </View>
                            ) : (
                                <Text style={[styles.textOption, { color: 'black' }]}>Dcash</Text>
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOptionPress('Dpoint')}>
                            {activeOption === 'Dpoint' ? (
                                <View style={styles.borderOptionClick}>
                                    <Text style={[styles.textOption, { color: 'white' }]}>Dpoint</Text>
                                </View>
                            ) : (
                                <Text style={[styles.textOption, { color: 'black' }]}>Dpoint</Text>
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOptionPress('Dcredit')}>
                            {activeOption === 'Dcredit' ? (
                                <View style={styles.borderOptionClick}>
                                    <Text style={[styles.textOption, { color: 'white' }]}>Dcredit</Text>
                                </View>
                            ) : (
                                <Text style={[styles.textOption, { color: 'black' }]}>Dcredit</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.ViewtextTitle2}>
                <Text style={styles.TextTitle2}>Đã giao</Text>
            </View>
            <View style={styles.ViewFull}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {activeOption === 'done' && (
                        <React.Fragment>
                            <View style={styles.DetailView}>
                                <TouchableOpacity style={styles.BordeDetailView} >
                                    <View style={styles.flex1}>
                                        <View style={styles.logoShip}>
                                            <Image style={{ zIndex: 999 }} source={require('../Assets/logoShip.png')} />
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                            <Text style={styles.Text1}>Mã đơn hàng: 002220321D9M</Text>
                                            <Text>25/03/2022 - 17:40</Text>
                                        </View>
                                    </View>
                                    <View style={styles.flex2}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={styles.logoShip2}>
                                                <Image style={styles.styImage} source={require('../Assets/Pro1.png')} />
                                            </View>
                                            <View style={styles.logoShip2}>
                                                <Image style={styles.styImage} source={require('../Assets/Pro2.png')} />
                                            </View>
                                            <View style={styles.logoShip2}>
                                                <Image style={styles.styImage} source={require('../Assets/Pro3.png')} />
                                            </View>
                                            <View style={styles.logoShip2}>
                                                <Image style={styles.styImage} source={require('../Assets/Pro4.png')} />
                                            </View>
                                            <View style={styles.logoShip2}>
                                                <Text style={{ color: 'black', fontSize: 12 }}>+1</Text>
                                            </View>
                                            <Image style={{ position: 'relative', top: 25, left: 60 }} source={require('../Assets/Vector.png')} />
                                        </View>
                                        <View style={styles.title}>
                                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Luxe Intense 75ml - Nước hoa nữ phiên bản đặc biệt</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 15, marginBottom: 10 }}>
                                            <Text style={styles.text1}>Giá bán : </Text>
                                            <Text style={styles.text2}>1,100,000</Text>
                                        </View>
                                    </View>
                                    <View style={styles.flex3}>
                                        <Text style={styles.text1}>5 sản phẩm</Text>
                                        <Text style={styles.text3}>5,200,000</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.DetailView2}>
                                <View style={styles.BordeDetailView}>
                                    <View style={styles.flex1}>
                                        <View style={styles.logoShip2}>
                                            <Image style={{ zIndex: 999 }} source={require('../Assets/logoShip.png')} />
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                                            <Text style={styles.Text1}>Mã đơn hàng: 002220321D10V</Text>
                                            <Text>25/03/2022 - 17:40</Text>
                                        </View>
                                    </View>
                                    <View style={styles.flex2}>
                                        <View style={{ flexDirection: 'row', height: '100%' }}>
                                            <View style={styles.logoShip2}>
                                                <Image style={styles.styImage} source={require('../Assets/Pro1.png')} />
                                            </View>
                                            <View style={styles.title}>
                                                <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Luxe Intense 75ml - Nước hoa nữ phiên bản đặc biệt</Text>
                                                <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 10 }}>
                                                    <Text style={styles.text1}>Giá bán : </Text>
                                                    <Text style={styles.text2}>1,100,000</Text>
                                                </View>
                                            </View>
                                            <Image style={{ position: 'relative', top: 25, left: 20 }} source={require('../Assets/Vector.png')} />
                                        </View>
                                    </View>
                                    <View style={styles.flex3}>
                                        <Text style={styles.text1}>2 sản phẩm</Text>
                                        <Text style={styles.text3}>2,200,000</Text>
                                    </View>
                                </View>
                            </View>
                        </React.Fragment>
                    )}
                    {activeOption === 'Dcash' && (
                        <React.Fragment>
                            <View style={styles.DashView}>
                                <View style={styles.DcashViewBorder}>
                                    <Image style={{ width: 100, height: 100 }} source={require('../Assets/DcashEmpty.png')} />
                                    <Text style={styles.textDcash}>Chúng tôi rất tiếc! Bạn chưa có đơn hàng nào cả</Text>
                                </View>
                            </View>
                        </React.Fragment>
                    )}
                    {activeOption === 'waitpay' && (
                        <React.Fragment>
                            <TouchableOpacity style={styles.DetailView2}  onPress={() => { navigation.navigate('chitiet_donghang') }}>
                                <View style={styles.BordeDetailView}>
                                    <View style={styles.flex1}>
                                        <View style={styles.logoShip2}>
                                            <Image style={{ zIndex: 999 }} source={require('../Assets/logoShip.png')} />
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                                            <Text style={styles.Text1}>Mã đơn hàng: 002220321D10V</Text>
                                            <Text>25/03/2022 - 17:40</Text>
                                        </View>
                                    </View>
                                    <View style={styles.flex2}>
                                        <View style={{ flexDirection: 'row', height: '100%' }}>
                                            <View style={styles.logoShip2}>
                                                <Image style={styles.styImage} source={order.donepay.itemcart.itemchaged.item.imgproduct} />
                                            </View>
                                            <View style={styles.title}>
                                                <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>{order.donepay.itemcart.itemchaged.item.nameproduct}</Text>
                                                <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 10 }}>
                                                    <Text style={styles.text1}>Giá bán : </Text>
                                                    <Text style={styles.text2}>{order.donepay.itemcart.itemchaged.item.price}</Text>
                                                </View>
                                            </View>
                                            <Image style={{ position: 'relative', top: 25, left: 20 }} source={require('../Assets/Vector.png')} />
                                        </View>
                                    </View>
                                    <View style={styles.flex3}>
                                        <Text style={styles.text1}>{order.donepay.numberCart} sản phẩm</Text>
                                        <Text style={styles.text3}>{order.formattedTotal},000</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    )}
                </ScrollView>
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
        justifyContent: "center",
        alignItems: 'center'
    },
    TextTitle: {
        color: 'black',
        fontWeight: "500",
        fontSize: 22
    },
    Option: {
        width: WidthScreen,
        height: HeightScreen * 0.12,
        justifyContent: "center",
        alignItems: "center"
    },
    BorderOption: {
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: "column"
    },
    OptionLine1: {
        flexDirection: "row",
        flex: 1,
        margin: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    OptionLine2: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom : 10
    },
    textOption: {
        color: 'black',
        fontSize: 16,
        fontWeight: "500",
        marginHorizontal : 7,
        
    },
    TextTitle2: {
        color: 'black',
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 20
    },
    ViewtextTitle2: {
        width: WidthScreen,
        height: HeightScreen * 0.05,
        justifyContent: "center",
    },
    ViewFull: {
        width: WidthScreen,
        height: HeightScreen,
    },
    DetailView: {
        width: '100%',
        height: HeightScreen * 0.35,
        justifyContent: "center",
        alignItems: "center",
    },
    DetailView2: {
        width: '100%',
        height: HeightScreen * 0.25,
        justifyContent: "center",
        alignItems: "center",
    },
    BordeDetailView: {
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        borderRadius: 14,
        flexDirection: 'column'
    },
    logoShip: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(17, 81, 245, 0.1)',
        justifyContent: "center",
        alignItems: "center",
        margin: 20
    },
    logoShip2: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(17, 81, 245, 0.1)',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 15
    },
    Text1: {
        color: 'black',
        fontSize: 16,
        fontWeight: "500"
    },
    flex1: {
        flexDirection: 'row',
        flex: 3,
    },
    flex2: {
        flex: 5,
        flexDirection: "column",
    },
    flex3: {
        flex: 2,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    styImage: {
        width: 40,
        height: 40
    },
    title: {
        maxWidth: '70%',
        marginTop: 10,
        marginLeft: 15
    },
    text1: {
        fontSize: 14,
        fontWeight: "600",
        color: 'black'
    },
    text2: {
        fontSize: 14,
        fontWeight: "600",
        color: '#BE7229'
    },
    text3: {
        fontSize: 15,
        fontWeight: "600",
        color: '#19A538'
    },
    borderOptionClick: {
        width: '100%',
        height: '100%',
        backgroundColor: '#041F44',
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    DashView: {
        width: WidthScreen,
        height: HeightScreen,
    },
    DcashViewBorder: {
        width: '100%',
        height: '50%',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    textDcash: {
        fontSize: 18,
        fontWeight: "500",
        maxWidth: '60%',
        color: 'black',
        marginTop: 20,
        textAlign: "center"
    }
});
export default HistoryScreen;
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, Pressable, ScrollView, TextInput } from "react-native";
import BorderPayComfirm from "../Component/BorderPayComfirm";
import React, { useState } from "react";
import ButtonBack from "../Component/ButtonBack";
import { useNavigation } from "@react-navigation/native";
import BorderPayComfirm2 from "../Component/BorderPayComfirm2";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');
const Payment = ({ route }) => {
    const navigation  = useNavigation();
    const donepay = route.params;
    const [activecheckbox, setactivecheckbox] = useState("checkbox1");
    const handleOptionPress = (
        option) => {
        setactivecheckbox(option);
    };
    const total = parseFloat(donepay.itemcart.itemchaged.item.price) * parseFloat(donepay.numberCart);
    const formattedTotal = parseFloat(total).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 3
      });

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerbar}>
                    <ButtonBack
                        icon={require('../Assets/Back.png')}
                        title={"Thông tin đặt hàng"} />
                </View>
                <View style={{ flexDirection: 'row', height: HeightScreen * 0.04, width: WidthScreen, }}>
                    <View style={{ flex: 9, justifyContent: 'center' }}>
                        <Text style={styles.texttitle}>Địa chỉ nhận hàng</Text>
                    </View>
                    <View style={{ flex:0.7, justifyContent: 'center' }}>
                        <Image source={require('../Assets/Vector.png')} />
                    </View>
                </View>
                <View style={styles.view_tt}>
                    <BorderPayComfirm
                        name={"Thùy Linh"}
                        sđt={"0909078111"}
                        address={'256 Bạch Đằng, Phường 24, Q.Bình Thạnh,\nThành phố Hồ Chí Minh'}
                    />
                </View>
                <View style={styles.titleView}>
                    <View style={{ flex: 9, justifyContent: 'center' }}>
                        <Text style={styles.texttitle}>Hình thức thanh toán</Text>
                    </View>
                </View>
                <View style={styles.Viewpay}>
                    <View style={styles.Bordpay}>
                        <View style={styles.flex1}>
                            <Pressable onPress={() => handleOptionPress("checkbox1")}>
                                {
                                    activecheckbox === "checkbox1" ? (
                                        <View style={styles.checkbox}>
                                            <View style={styles.activecheckbox}></View>
                                        </View>
                                    ) : (
                                        <View style={styles.checkbox}></View>
                                    )
                                }
                            </Pressable>
                        </View>
                        <View style={styles.flex2}>
                            <View style={styles.flex2cham2}>
                                <Text style={styles.text}>Thanh toán bằng ví Dcash</Text>
                                <View style={styles.flex2cham2cham3}>
                                    <Text style={styles.revenue}>Số dư hiện tại:</Text>
                                    <Text style={styles.numrevenue}>434,403</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.Bordpay}>
                        <View style={styles.flex1}>
                            <Pressable onPress={() => handleOptionPress("checkbox2")}>
                                {
                                    activecheckbox === "checkbox2" ? (
                                        <View style={styles.checkbox}>
                                            <View style={styles.activecheckbox}></View>
                                        </View>
                                    ) : (
                                        <View style={styles.checkbox}></View>
                                    )
                                }

                            </Pressable>
                        </View>
                        <View style={styles.flex2}>
                            <View style={styles.flex2cham2}>
                                <Text style={styles.text}>Thanh toán bằng ví Dpoint</Text>
                                <View style={styles.flex2cham2cham3}>
                                    <Text style={styles.revenue}>Số dư hiện tại:</Text>
                                    <Text style={styles.numrevenue}>434,403</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', height: HeightScreen * 0.04, width: WidthScreen }}>
                    <View style={{ flex: 9, justifyContent: 'center' }}>
                        <Text style={styles.texttitle}>Sản phẩm chọn mua</Text>
                    </View>
                    <View style={{ flex:0.7, justifyContent: 'center' }}>
                        <Image source={require('../Assets/Vector.png')} />
                    </View>
                </View>
                <View>
                    <BorderPayComfirm2
                        img={donepay.itemcart.itemchaged.item.imgproduct}
                        name={donepay.itemcart.itemchaged.item.nameproduct}
                        num={donepay.numberCart}
                        price={donepay.itemcart.itemchaged.item.price}
                        dis={donepay.itemcart.itemchaged.item.dis}
                    />
                </View>
                <View style={styles.titleView}>
                    <View style={{ flex: 9, justifyContent: 'center' }}>
                        <Text style={styles.texttitle}>Ghi chú</Text>
                    </View>
                </View>
                <View style={styles.note}>
                    <View style={styles.bordernote}>
                        <TextInput style={{color: 'black'}} />
                    </View>
                </View>
                <View style={styles.titleView}>
                    <View style={{ flex: 9, justifyContent: 'center' }}>
                        <Text style={styles.texttitle}>Thanh toán</Text>
                    </View>
                </View>
                <View style={styles.ViewPay}>
                    <Image style={{ width: WidthScreen * 0.9, height:HeightScreen * 0.135 }} source={require('../Assets/backgroundPay.png')} />
                    <View style={styles.view_thanhtoan}>
                        <View style={{alignItems: "flex-start"}}>
                            <Text style={styles.textpay1}>Tổng cộng:</Text>
                            <Text style={styles.textpay2}>Chiết khấu:</Text>
                            <Text style={styles.textpay2}>Hoa hồng:</Text>
                        </View>
                        <View style={{alignItems: "flex-end", width: WidthScreen * 0.52}}>
                            <Text style={styles.colpay1}>{formattedTotal},000</Text>
                            <Text style={styles.colpay2}>790,000</Text>
                            <Text style={styles.colpay3}>79,000</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.btncomfirm}>
                    <TouchableOpacity style={styles.borderbtn} onPress={()=>{navigation.navigate('History', {donepay , formattedTotal})}}>
                        <Text style={{
                            color: 'white',
                            fontSize: 15,
                            fontWeight: "600"
                        }}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default Payment;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    headerbar: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        justifyContent: 'center'
    },
    view_tt:{
        with: WidthScreen,
         justifyContent: 'center',
          height: HeightScreen * 0.1, 
          alignItems: 'center',  
          marginTop:16,
          marginBottom: 19
         // backgroundColor: 'red',
    },
    texttitle: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '500',
        marginLeft: 20
    },
    titleView: {
        flexDirection: 'row',
        height: HeightScreen * 0.04,
        width: WidthScreen,
        justifyContent: "space-between",
        alignItems: "center"
    },
    Viewpay: {
        width: WidthScreen,
        height: HeightScreen * 0.2,
        justifyContent: "center",
        alignItems: "center",
        marginTop:7,
        // backgroundColor: 'red',
    },
    Bordpay: {
        width: WidthScreen * 0.895,
        height: HeightScreen * 0.081,
        backgroundColor: 'white',
        flexDirection: "row",
        borderRadius: 10,
        margin: 5,
        //backgroundColor: 'red',
    },
    flex1: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        
    },
    flex2: {
        flex: 8,
        flexDirection: "column",
        justifyContent: "center"
    },
    flex2cham2: {
        justifyContent: "center",

    },
    flex2cham2cham3: {
        flexDirection: "row"
    },
    checkbox: {
        width: WidthScreen * 0.053,//20
        height: HeightScreen * 0.026,//20
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: 'black',
    },
    activecheckbox: {
        width: WidthScreen * 0.039,//15
        height: HeightScreen * 0.019,//15
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black'
    },
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: "500"
    },
    revenue: {
        color: 'black',
        fontSize: 14,
        fontWeight: "400"
    },
    numrevenue: {
        color: '#19A538',
        fontSize: 14,
        fontWeight: "400"
    },
    note: {
        width: WidthScreen,
        height: HeightScreen * 0.1,
        alignItems: "center",
        
    },
    bordernote: {
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.09,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'dashed',   
    },
    ViewPay: {
        width: WidthScreen,
        height: HeightScreen * 0.15,
        alignItems: "center",
    },
    //view thanh toán
    view_thanhtoan:{
        marginTop:19,
        position: "absolute", 
        flexDirection: "row", 
       // backgroundColor: 'red',
    },
    textpay1: {
        color: 'black',
        fontSize: 17,
        fontWeight: "500"
    },
    textpay2: {
        color: 'black',
        fontSize: 15,
        fontWeight: "400"
    },
    colpay1: {
        color: '#BE7229',
        fontSize: 17,
        fontWeight: "600"
    },
    colpay2: {
        color: '#1151F5',
        fontSize: 15,
        fontWeight: "500"
    },
    colpay3: {
        color: '#19A538',
        fontSize: 15,
        fontWeight: "500"
    },
    btncomfirm: {
        width: WidthScreen,
        height: HeightScreen * 0.08,
        justifyContent: "center",
        alignItems: "center"
    },
    borderbtn: {
        width: '50%',
        height: '80%',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'black'
    }


});
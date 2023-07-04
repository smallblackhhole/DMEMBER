import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, Pressable, ScrollView, TextInput, SafeAreaView } from "react-native";
import BorderPayComfirm from "../Component/BorderPayComfirm";
import React, { useState } from "react";
import ButtonBack from "../Component/ButtonBack";
import { useNavigation } from "@react-navigation/native";
import BorderPayComfirm2 from "../Component/BorderPayComfirm2";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');
const Payment = ({ route }) => {
    const navigation = useNavigation();
    const donepay = route.params;
    const [activecheckbox, setactivecheckbox] = useState("checkbox1");
    const handleOptionPress = (
        option) => {
        setactivecheckbox(option);
    };

    const discount = donepay.PriceToConfirm * 0.2;
    const rose = donepay.PriceToConfirm * 0.1;
    const formatTotal = parseFloat(donepay.PriceToConfirm).toLocaleString();
    const formattedDiscount = parseFloat(discount).toLocaleString();
    const formattedRose = parseFloat(rose).toLocaleString();


    return (
        <SafeAreaView style={styles.container}>
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
                    <View style={{ flex: 0.7, justifyContent: 'center' }}>
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
                    <View style={{ flex: 0.7, justifyContent: 'center' }}>
                        <Image source={require('../Assets/Vector.png')} />
                    </View>
                </View>
                <View>
                    {donepay.products.map((product) => (
                        <View style={styles.view_sp} key={product.id}>
                            <View style={styles.borderView}>
                                <View style={styles.img_all}>
                                    <Image source={product.imgproduct} style={styles.img_item} />
                                </View>
                                <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                    <Text style={styles.ten_sp}>{product.nameproduct}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={styles.gia_chietkhau}>
                                                Giá bán:{' '}
                                                <Text style={{ fontWeight: '600', color: '#BE7229' }}>
                                                    {product.price}
                                                </Text>
                                            </Text>
                                            <Text style={styles.gia_chietkhau}>
                                                Chiết khấu:{' '}
                                                <Text style={{ fontWeight: '600', color: '#1151F5' }}>
                                                    {product.dis}
                                                </Text>
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                position: 'absolute',
                                                right: 0,
                                                bottom: 0,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: '#000000',
                                                    fontWeight: '400',
                                                    fontSize: 10,
                                                }}
                                            >
                                                Số lượng
                                            </Text>
                                            <Text
                                                style={{
                                                    color: '#000000',
                                                    fontWeight: '400',
                                                    fontSize: 10,
                                                    marginLeft: 5,
                                                }}
                                            >
                                                {product.current}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.titleView}>
                    <View style={{ flex: 9, justifyContent: 'center' }}>
                        <Text style={styles.texttitle}>Ghi chú</Text>
                    </View>
                </View>
                <View style={styles.note}>
                    <View style={styles.bordernote}>
                        <TextInput style={{ color: 'black' }} />
                    </View>
                </View>
                <View style={styles.titleView}>
                    <View style={{ flex: 9, justifyContent: 'center' }}>
                        <Text style={styles.texttitle}>Thanh toán</Text>
                    </View>
                </View>
                <View style={styles.ViewPay}>
                    <Image style={{ width: WidthScreen * 0.9, height: HeightScreen * 0.135 }} source={require('../Assets/backgroundPay.png')} />
                    <View style={styles.view_thanhtoan}>
                        <View style={{ alignItems: "flex-start" }}>
                            <Text style={styles.textpay1}>Tổng cộng:</Text>
                            <Text style={styles.textpay2}>Chiết khấu:</Text>
                            <Text style={styles.textpay2}>Hoa hồng:</Text>
                        </View>
                        <View style={{ alignItems: "flex-end", width: WidthScreen * 0.52 }}>
                            <Text style={styles.colpay1}>{formatTotal}</Text>
                            <Text style={styles.colpay2}>{formattedDiscount}</Text>
                            <Text style={styles.colpay3}>{formattedRose}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.btncomfirm}>
                    <TouchableOpacity style={styles.borderbtn} onPress={() => { navigation.navigate('History', { donepay, formatTotal }) }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 15,
                            fontWeight: "600"
                        }}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
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
    view_tt: {
        with: WidthScreen,
        justifyContent: 'center',
        height: HeightScreen * 0.1,
        alignItems: 'center',
        marginTop: 16,
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
        marginTop: 7,
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
    view_thanhtoan: {
        marginTop: 19,
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
        justifyContent: 'center'
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


});
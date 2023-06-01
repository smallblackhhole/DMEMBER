import React, { useState } from "react";
import { Text, View, Image, Dimensions, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ButtonBack from "../Component/ButtonBack";
import detailproData from "../dataShopScreen/detailproData";
import { useNavigation } from "@react-navigation/native";
import Carticon from "../Component/Carticon";
import CarousellphoneS from 'react-native-reanimated-carousel';
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');


const DetailScreen = ({ route }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [numberCart, setnumberCart] = useState(1);
    const navigation = useNavigation();
    const itemchaged = route.params;
    const FlatlistrenderDetail = ({ item }) => {

        const renderListPro = ({ item }) => {
            return (
                <View style={styles.InfoPro}>
                    <View style={styles.srollInffo}>
                        <View style={styles.ViewNameInfo}>
                            <Text style={styles.NameInfo}>{itemchaged.item.nameproduct}</Text>
                            <View style={styles.line}></View>
                        </View>
                        <View style={{ flexDirection: "column", width: '100%' }}>
                            <View style={styles.InfoABC}>
                                <Text style={styles.textFil}>Giá bán : </Text>
                                <Text style={styles.priceFil3}>{itemchaged.item.price}</Text>
                            </View>
                            <View style={styles.InfoABC}>
                                <Text style={styles.textFil}>Giá nhập : </Text>
                                <Text style={styles.priceFil3}>309,375</Text>
                            </View>
                            <View style={styles.InfoABC}>
                                <Text style={styles.textFil}>Chiết khấu : </Text>
                                <Text style={styles.priceFil}>103,125</Text>
                            </View>
                            <View style={styles.InfoABC}>
                                <Text style={styles.textFil}>Hoa hồng thành viên cũ : </Text>
                                <Text style={styles.priceFil2}>12,375</Text>
                            </View>
                            <View style={styles.InfoABC}>
                                <Text style={styles.textFil}>Hoa hồng thành viên mới : </Text>
                                <Text style={styles.priceFil2}>12,375</Text>
                            </View>
                            <View style={styles.line2}></View>
                        </View>
                        <View style={styles.InfoTextView}>
                            <View style={{ width: WidthScreen * 0.9,marginBottom:10 }}>
                                <Text style={styles.title}>{item.title1}</Text>
                            </View>

                            <View style={{  width: WidthScreen * 0.8,marginBottom:10}}>
                                <Text style={styles.textne}>{item.detail1}</Text>
                            </View>

                            <View style={{  width: WidthScreen * 0.9,marginBottom:10 }}>
                                <Text style={styles.title}>{item.title2}</Text>
                            </View>

                            <View style={{  width: WidthScreen * 0.8,marginBottom:10  }}>
                                <Text style={styles.textne}>{item.detail2}</Text>
                            </View>

                            <View style={{  width: WidthScreen * 0.9,marginBottom:10 }}>
                                <Text style={styles.title}>{item.title3}</Text>
                            </View>

                            <View style={{  width: WidthScreen * 0.8,marginBottom:10 }}>
                                <Text style={styles.textne}>{item.detail3}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        };

        const renderItemSame = ({ item }) => {
            return (
                <View style={styles.borderTopProduct}>
                    <View>
                        <Image style={styles.image_product} source={item.imgpro} />
                    </View>
                    <Text style={styles.textTopProduct}>{item.namepro}</Text>
                    <View style={styles.priceanddiscount2}>
                        <Text style={styles.textpridis}>Giá bán : </Text>
                        <Text style={styles.pricenum}>{item.price}</Text>
                    </View>
                    <View style={styles.priceanddiscount}>
                        <Text style={styles.textpridis}>Chiết khấu : </Text>
                        <Text style={styles.disnum}>{item.dis}</Text>
                        <Image style={{ marginBottom: 2, marginLeft:10 }} source={require('../Assets/addbtn.png')} />
                    </View>
                </View>
            );
        }

        const rendercreatetopic = ({ item }) => {
            return (
                <View style={styles.InfoPro}>
                    <View style={styles.srollInffo}>
                        <View style={styles.createtopic}>
                            <Image source={require('../Assets/logocreatetopic.png')} />
                            <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                <Text style={styles.textnamecreatetopic}>Mỹ phẩm Milky Dress</Text>
                                <Text style={{color : 'rgba(0, 0, 0, 0.8)'}}>17/06/2022, 17:50</Text>
                            </View>
                        </View>
                        <View style={styles.ViewNameInfo2}>
                            <Text style={styles.NameInfo}>{itemchaged.item.nameproduct}</Text>
                        </View>
                        <View style={styles.ViewPrice}>
                            <Image style={{ marginLeft:20 }} source={require('../Assets/pricegood.png')} />
                            <Text style={styles.textprice}>{itemchaged.item.price}</Text>
                        </View>
                        <View>
                            <Image style={{ margin: 20 }} source={require('../Assets/whylike.png')} />
                        </View>
                        <View style={{ width: '85%', alignItems: "center", marginLeft: 20}}>
                            <Text style={styles.textcontent}>{item.whylike}</Text>
                        </View>
                        <View>
                            <Image style={{ margin: 20 }} source={require('../Assets/uudiem.png')} />
                        </View>
                        <View style={{ width: '85%', alignItems: "center", marginLeft: 20 }}>
                            <Text style={styles.textcontent}>{item.uudiem}</Text>
                        </View>
                        <View style={styles.imgtopic}>
                            <View style={styles.Line1}>
                                <View style={styles.borderLine1}>
                                    <Image style={{ width: 100, height: 100 }} source={itemchaged.item.imgproduct} />
                                    <Image style={{ position: "absolute", top: 90, right: 10 }} source={require('../Assets/speaker.png')} />
                                </View>
                                <View style={styles.borderLine1}>
                                    <Image style={{ width: 100, height: 100 }} source={itemchaged.item.imgproduct} />
                                </View>
                            </View>
                            <View style={styles.Line2}>
                                <View style={styles.borderLine2}>
                                    <Image style={{ width: 100, height: 100 }} source={itemchaged.item.imgproduct} />
                                </View>
                                <View style={styles.borderLine2}>
                                    <Image style={{ width: 100, height: 100 }} source={itemchaged.item.imgproduct} />
                                </View>
                                <View style={styles.borderLine3}>
                                    <Text style={{ color: 'white', position: "absolute", zIndex: 999 }}>+5</Text>
                                    <Image style={{ width: 100, height: 100 }} source={itemchaged.item.imgproduct} />
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.footer}>
                            <View style={styles.flexfooter1}>
                                <Image style={{ width: 20, height: 20 }} source={require('../Assets/downicon.png')} />
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: "500" }}>Tải ảnh</Text>
                            </View>
                            <View style={styles.flexfooter2}>
                                <Image style={{ width: 20, height: 20 }} source={require('../Assets/copyicon.png')} />
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: "500" }}>Sao chép</Text>
                            </View>
                            <View style={styles.flexfooter3}>
                                <Image style={{ width: 20, height: 20 }} source={require('../Assets/sellicon.png')} />
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: "500" }}>Đăng bán</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }

        const renderCarouselItem = ({ item, index }) => {
            return (
                <View
                    style={{
                        marginTop: 12,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        style={{ width: 150, height: 180 }}
                        source={item.img}
                    />
                </View>
            );
        };


        return (
            <View style={{ flex: 1, }}>
                <View style={styles.detailView}>
                    <View style={styles.borderDetail}>
                        <View style={styles.holderView}>
                            <Image style={{ width: '100%', height: ' 100%', justifyContent: 'center', alignItems: "center" }} source={require('../Assets/viewDetail.png')} />
                            <View style={{ position: "absolute", zIndex: 999, alignItems: "center", justifyContent: "center" }}>
                                <CarousellphoneS
                                    data={item.Data4}
                                    renderItem={renderCarouselItem}
                                    width={250}
                                    height={250}
                                    loop={true}
                                    autoPlayInterval={3000}
                                    autoPlay={true}
                                    onSnapToItem={(index) => setCurrentPage(index)}
                                />
                            </View>
                                <View style={styles.indicatorContainer}>
                                    {item.Data4.map((_, index) => (
                                        <View
                                            key={index} 
                                            style={[
                                                styles.indicator,
                                                { backgroundColor: index === currentPage ? 'white' : 'gray' },
                                            ]}
                                        />
                                    ))}
                                </View>
                            <Image style={{ position: "absolute", width: '90%', height: '60%', bottom: 10 }} source={require('../Assets/backDetail.png')} />
                        </View>
                    </View>

                </View>
                <View style={styles.price}>
                    <Text style={styles.text}>Giá bán : </Text>
                    <Text style={styles.textprice22}>{itemchaged.item.price}</Text>
                </View>
                <View>
                    <FlatList
                        style={{ flex: 1 }}
                        data={item.Data}
                        renderItem={renderListPro}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.ProSame}>
                    <Text style={styles.texthot}>SẢN PHẨM CÙNG DANH MỤC</Text>
                </View>
                <View style={styles.ProductTop}>
                    <FlatList
                        style={{ flex: 1 }}
                        data={item.Data2}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItemSame}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.ProSame}>
                    <Text style={styles.texthot}>Bài viết mẫu</Text>
                </View>
                <View>
                    <FlatList
                        style={{ flex: 1 }}
                        data={item.Data3}
                        renderItem={rendercreatetopic}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('CreateTopic', { itemchaged }) }}>
                    <View style={styles.btncreatetopicView}>
                        <View style={styles.btncreatetopicBord}>
                            <Text style={styles.texthot2}>Tạo bài viết mẫu</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.AddtoCartView}>
                    <View style={styles.ViewBtn}>
                        <TouchableOpacity onPress={() => {
                            setnumberCart(numberCart - 1)
                            if (numberCart <= 1) {
                                setnumberCart(1)
                            }
                        }}>
                            <Image style={{ margin: 5 }} source={require('../Assets/minus.png')} />
                        </TouchableOpacity>
                        <Text style={{ margin: 5, color: 'black', fontWeight: "500" }}>{numberCart}</Text>
                        <TouchableOpacity onPress={() => { setnumberCart(numberCart + 1) }}>
                            <Image style={{ margin: 5 }} source={require('../Assets/plus.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ViewBtn2}>
                        <TouchableOpacity style={styles.btnAdd} onPress={() => { navigation.navigate('Cart2', { itemchaged, numberCart }) }}>
                            <Text style={{ color: 'white', fontWeight: "600", fontSize: 16 }}>Thêm vào giỏ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };




    return (
        <View style={styles.container}>
            <View style={styles.hearderbar}>
                <View style={{ flex: 7 }}>
                    <ButtonBack
                        icon={require('../Assets/Back.png')}
                        title={""} />
                </View>
                <View style={styles.viewbtnhead}>
                    <Image style={styles.imgheader} source={require('../Assets/sharebtn.png')} />
                    <Image style={styles.imgheader} source={require('../Assets/dowbtn.png')} />
                    <Carticon />
                </View>
            </View>
            <View style={styles.viewfull}>
                <FlatList
                    data={detailproData}
                    renderItem={FlatlistrenderDetail}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBAE35',
    },
    hearderbar: {
        width: WidthScreen,
        height: HeightScreen * 0.1,
        flexDirection: "row",
        //  backgroundColor: 'red',
    },
    viewbtnhead: {
        flex: 3,
        marginRight: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    viewfull: {
        flex: 1,
        alignItems: 'center',
        //backgroundColor: 'red',
    },
    imgheader: {
        width: WidthScreen * 0.066,//25
        height: HeightScreen * 0.033,//25
        marginRight: 15,
        // backgroundColor: 'red',
    },
    detailView: {
        width: WidthScreen,
        height: HeightScreen * 0.3,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 10
    },
    borderDetail: {
        width: WidthScreen * 0.655,
        height:  HeightScreen * 0.301,
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: 'red',
    },
    holderView: {
        width: WidthScreen * 0.595,
        alignItems: "center",
        height:  HeightScreen * 0.268,
       // backgroundColor: 'red',
    },
    //gia tiền
    price: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: "center",
        //backgroundColor: 'red',
    },
    text: {
        color: '#000000',
        fontSize: 21,
        fontWeight: "400"
    },
    textprice22: {
        color: 'white',
        fontSize: 21,
        fontWeight: "600"
    },
    InfoPro: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: 'red',
    },
    texthot: {
        fontSize: 18,
        fontWeight: "600",
        color: 'black'
    },
    texthot2: {
        fontSize: 15,
        fontWeight: "600",
        color: 'white'
    },
    srollInffo: {
        width: WidthScreen * 0.9,
        // height: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    ViewNameInfo: {
        marginTop:18,
        // width: '100%',
        alignItems: "center",
        //backgroundColor: 'red',
    },
    ViewNameInfo2: {
        // width: '100%',
        alignItems: "center",
        //backgroundColor: 'red',
    },
    NameInfo: {
        width:WidthScreen * 0.8,//300,
        // height: HeightScreen * 0.082,//63
        color: '#000000',
        fontSize: 17,
        fontWeight: "500",
        textAlign: "left",
       //  backgroundColor: 'yellow',
       
    },
    line: {
        borderWidth: 0.3,
        backgroundColor: '#C4C4C4',
        width: WidthScreen * 0.64,
        opacity: 0.1,
        marginTop: 17,
        marginBottom:13
    },
    line2: {
        borderWidth: 0.3,
        backgroundColor: '#C4C4C4',
        width: WidthScreen * 0.62,
        opacity: 0.1,
        marginTop: 13,
         marginBottom:13,
        marginLeft:54
    },
    InfoABC: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        marginHorizontal: 20,
    },
    textFil: {
        color: '#000000',
        fontSize: 15,
        fontWeight: "400"
    },
    priceFil: {
        color: '#1151F5',
        fontSize: 15,
        fontWeight: "600"
    },
    priceFil2: {
        color: '#19A538',
        fontSize: 15,
        fontWeight: "600"
    },
    priceFil3: {
        color: 'black',
        fontSize: 15,
        fontWeight: "600"
    },
    InfoTextView: {
        flexDirection: 'column',
        alignItems: "center",
        // backgroundColor: 'red',
    },
    InfoTextView2: {
        flexDirection: 'column',
        alignItems: "center",
    },
    title: {
        color: 'black',
        fontSize: 17,
        fontWeight: "500",
        marginLeft: 20,
        marginTop: 5
    },
    textne: {
        fontSize: 15,
        fontWeight: "400",
        color: 'black',
        textAlign:'left'
    },
    ProSame: {
        width: WidthScreen,
        // height: HeightScreen * 0.090,//70
        padding: 20,
        // backgroundColor: 'red',
    },
    ProductTop: {
        width: WidthScreen,
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: 'pink',

    },
    borderTopProduct: {
        backgroundColor: 'white',
        flexDirection: "column",
        width: WidthScreen * 0.375,
        height: HeightScreen * 0.285,//229
        justifyContent: "center",
        alignItems:'center',
        marginLeft:19,
        borderRadius: 15
    },
    textTopProduct: {
         width: WidthScreen * 0.343,
        height: HeightScreen * 0.048,
        color: 'black',
        fontSize: 10,
        fontWeight: "500",
        textAlign: "center",
        margin: 5,
       // backgroundColor: 'pink',
    },
    priceanddiscount: {
        flexDirection: "row",
        marginLeft:10
    },
    priceanddiscount2: {
        flexDirection: "row",
        marginRight:33
    },
    textpridis: {
        color: 'black',
        fontSize: 10,
        fontWeight: "400"
    },
    pricenum: {
        color: '#BE7229',
        fontSize: 10,
        fontWeight: "600"
    },
    disnum: {
        color: '#1151F5',
        fontSize: 10,
        fontWeight: "600"
    },
    image_product:{
        width:WidthScreen * 0.32,//122
        height:HeightScreen * 0.145,//116
        marginTop:15,
       // backgroundColor: 'red',
    },
    AddtoCartView: {
        marginTop: 40,
        height: HeightScreen * 0.1,
        flexDirection: 'row',
    },
    ViewBtn: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    ViewBtn2: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    btnAdd: {
        backgroundColor: '#000000',
        width: WidthScreen * 0.488,//183
        height: HeightScreen * 0.066,//50
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    createtopic: {
        alignItems: "center",
        flexDirection: "row",
        height: HeightScreen * 0.066,//50
        margin: 20,
       //backgroundColor: 'red',
    },
    textnamecreatetopic: {
        color: 'black',
        fontSize: 16,
        fontWeight: "600"
    },
    ViewPrice: {
        marginTop:15,
        flexDirection: "row",
        alignItems: "center",
       // backgroundColor: 'pink',
    },
    textprice: {
        color: '#EE2525',
        fontSize: 16,
        fontWeight: "600",
        marginLeft:7
    },
    textcontent: {
        color: 'black',
        fontSize: 15,
        fontWeight: "400",
    },
    imgtopic: {
        flexDirection: "column",
        // backgroundColor: 'pink',
        marginTop:25
    },
    Line1: {
        flexDirection: "row",
        justifyContent: "center"
    },
    Line2: {
        flexDirection: "row",
        justifyContent: "center"
    },
    borderLine1: {
        borderWidth: 0.3,
        borderColor: 'black',
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
        width: WidthScreen * 0.40,
        height: HeightScreen * 0.154
    },
    borderLine2: {
        borderWidth: 0.3,
        borderColor: 'black',
        justifyContent: "center",
        backgroundColor: 'white',
        alignItems: "center",
        margin: 2,
        width: WidthScreen * 0.26,
        height: HeightScreen * 0.142
    },
    borderLine3: {
        borderWidth: 0.3,
        borderColor: 'black',
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: "center",
        margin: 2,
        width: WidthScreen * 0.27,
        height: HeightScreen * 0.142
    },
    footer: {
        flexDirection: "row",
        height: HeightScreen * 0.07,
        alignItems: "center",
        // backgroundColor: 'pink',
    },
    flexfooter1: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    flexfooter2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    flexfooter3: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    btncreatetopicView: {
        flex: 1,
        width: WidthScreen,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        height: HeightScreen * 0.075,
       // backgroundColor: 'pink',
    },
    btncreatetopicBord: {
        backgroundColor: 'black',
        justifyContent: "center",
        alignItems: "center",
        width: WidthScreen * 0.5,
        height: HeightScreen * 0.070,
        borderRadius: 10
    },
    indicatorContainer: {
        flexDirection: 'row',
    },
    indicator: {
        width: 14,
        height: 5,
        borderRadius : 5,
        marginHorizontal: 3,
    },
    // paginationContainer: {
    //     height: 1,
    //     width: 60,
    // },
    // dotStyle: {
    //     width: 20,
    //     marginHorizontal: 10,
    //     height: 5,
    //     backgroundColor: 'white',
    // },
    // indotStyle: {
    //     backgroundColor: 'black'
    // }
})

export default DetailScreen;
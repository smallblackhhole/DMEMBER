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
                            <View style={{ width: '100%', height: 40 }}>
                                <Text style={styles.title}>{item.title1}</Text>
                            </View>
                            <View style={{ width: '90%' }}>
                                <Text style={styles.textne}>{item.detail1}</Text>
                            </View>
                            <View style={{ width: '100%', height: 40 }}>
                                <Text style={styles.title}>{item.title2}</Text>
                            </View>
                            <View style={{ width: '90%' }}>
                                <Text style={styles.textne}>{item.detail2}</Text>
                            </View>
                            <View style={{ width: '100%', height: 40 }}>
                                <Text style={styles.title}>{item.title3}</Text>
                            </View>
                            <View style={{ width: '90%' }}>
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
                        <Image source={item.imgpro} />
                    </View>
                    <Text style={styles.textTopProduct}>{item.namepro}</Text>
                    <View style={styles.priceanddiscount}>
                        <Text style={styles.textpridis}>Giá bán : </Text>
                        <Text style={styles.pricenum}>{item.price}</Text>
                    </View>
                    <View style={styles.priceanddiscount}>
                        <Text style={styles.textpridis}>Chiết khấu : </Text>
                        <Text style={styles.disnum}>{item.dis}</Text>
                        <Image style={{ marginBottom: 2 }} source={require('../Assets/addbtn.png')} />
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
                                <Text>17/06/2022, 17:50</Text>
                            </View>
                        </View>
                        <View style={styles.ViewNameInfo}>
                            <Text style={styles.NameInfo}>{itemchaged.item.nameproduct}</Text>
                        </View>
                        <View style={styles.ViewPrice}>
                            <Image style={{ margin: 20 }} source={require('../Assets/pricegood.png')} />
                            <Text style={styles.textprice}>{itemchaged.item.price}</Text>
                        </View>
                        <View>
                            <Image style={{ margin: 10 }} source={require('../Assets/whylike.png')} />
                        </View>
                        <View style={{ width: '95%', alignItems: "center", margin: 10 }}>
                            <Text style={styles.textcontent}>{item.whylike}</Text>
                        </View>
                        <View>
                            <Image style={{ margin: 10 }} source={require('../Assets/uudiem.png')} />
                        </View>
                        <View style={{ width: '95%', alignItems: "center", margin: 10 }}>
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
        flexDirection: "row"
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
        width: '100%',
        alignItems: 'center',
    },
    imgheader: {
        width: 25,
        height: 25,
        marginRight: 15
    },
    detailView: {
        width: WidthScreen,
        height: HeightScreen * 0.3,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 10
    },
    borderDetail: {
        width: '65%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    holderView: {
        width: '90%',
        alignItems: "center",
        height: '88%'
    },
    price: {
        width: WidthScreen,
        height: 30,
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: "center",
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: "400"
    },
    textprice22: {
        color: 'white',
        fontSize: 20,
        fontWeight: "400"
    },
    InfoPro: {
        width: WidthScreen,
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    texthot: {
        fontSize: 18,
        fontWeight: "600",
        color: 'black'
    },
    texthot2: {
        fontSize: 18,
        fontWeight: "600",
        color: 'white'
    },
    srollInffo: {
        width: '90%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
    },
    ViewNameInfo: {
        marginTop: 20,
        width: '100%',
        alignItems: "center"
    },
    NameInfo: {
        color: 'black',
        fontSize: 18,
        fontWeight: "500",
        textAlign: "left",
    },
    line: {
        borderWidth: 0.2,
        color: '#D9D9D9',
        width: '90%',
        opacity: 0.4,
        marginTop: 20
    },
    line2: {
        borderWidth: 0.2,
        color: '#D9D9D9',
        width: '80%',
        opacity: 0.4,
        marginTop: 20,
        marginLeft: 40
    },
    InfoABC: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        marginHorizontal: 20,
    },
    textFil: {
        color: 'black',
        fontSize: 16,
        fontWeight: "400"
    },
    priceFil: {
        color: '#1151F5',
        fontSize: 16,
        fontWeight: "600"
    },
    priceFil2: {
        color: '#19A538',
        fontSize: 16,
        fontWeight: "600"
    },
    priceFil3: {
        color: 'black',
        fontSize: 16,
        fontWeight: "600"
    },
    InfoTextView: {
        flexDirection: 'column',
        alignItems: "center",
        width: '100%',
        height: HeightScreen * 0.6,
    },
    InfoTextView2: {
        flexDirection: 'column',
        alignItems: "center",
        width: '100%',
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: "500",
        marginLeft: 20,
        marginTop: 5
    },
    textne: {
        fontSize: 15,
        fontWeight: "400",
        color: 'black'
    },
    ProSame: {
        width: WidthScreen,
        height: 70,
        padding: 20
    },
    ProductTop: {
        width: WidthScreen,
        height: HeightScreen * 0.35,
        justifyContent: "space-between",
        alignItems: "center",
    },
    borderTopProduct: {
        backgroundColor: 'white',
        flexDirection: "column",
        width: WidthScreen * 0.35,
        justifyContent: "center",
        height: '90%',
        margin: 10,
        paddingBottom: 10,
        borderRadius: 15
    },
    textTopProduct: {
        color: 'black',
        fontSize: 13,
        fontWeight: "500",
        textAlign: "center",
        margin: 5,
        paddingBottom: 7
    },
    priceanddiscount: {
        flexDirection: "row",
        marginLeft: 10
    },
    textpridis: {
        color: 'black',
        fontSize: 12,
        fontWeight: "600"
    },
    pricenum: {
        color: '#BE7229',
        fontSize: 12,
        fontWeight: "600"
    },
    disnum: {
        color: '#1151F5',
        fontSize: 12,
        fontWeight: "600"
    },
    AddtoCartView: {
        width: '100%',
        marginTop: 40,
        height: HeightScreen * 0.1,
        flexDirection: 'row'
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
        backgroundColor: 'black',
        width: '80%',
        height: '70%',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    createtopic: {
        width: '100%',
        alignItems: "center",
        flexDirection: "row",
        height: 70,
        margin: 10,
    },
    textnamecreatetopic: {
        color: 'black',
        fontSize: 16,
        fontWeight: "600"
    },
    ViewPrice: {
        flexDirection: "row",
        width: '100%',
        alignItems: "center"
    },
    textprice: {
        color: '#EE2525',
        fontSize: 16,
        fontWeight: "600"
    },
    textcontent: {
        color: 'black',
        fontSize: 16,
        fontWeight: "500",
    },
    imgtopic: {
        width: '100%',
        flexDirection: "column",
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
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
        width: '45%',
        height: 120
    },
    borderLine2: {
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: "center",
        backgroundColor: 'white',
        alignItems: "center",
        margin: 2,
        width: '30%',
        height: 110
    },
    borderLine3: {
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: "center",
        margin: 2,
        width: '30%',
        height: 110
    },
    footer: {
        flexDirection: "row",
        height: 70,
        justifyContent: "center",
        alignItems: "center"
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
        height: 70,
    },
    btncreatetopicBord: {
        backgroundColor: 'black',
        justifyContent: "center",
        alignItems: "center",
        width: '50%',
        height: '90%',
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
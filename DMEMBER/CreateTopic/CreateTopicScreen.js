import React from "react";
import { Text, View, Image, Dimensions, StyleSheet, FlatList } from "react-native";
import detailproData from "../dataShopScreen/detailproData";
import ButtonBack from "../Component/ButtonBack";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const CreateTopicScreen = ({ route }) => {
    const itemtopic = route.params;
    const FlatlistrenderDetail = ({ item }) => {
        const rendercreatetopic = ({ item }) => {
            return (
                <View>
                    <View style={styles.InfoPro}>
                        <View style={styles.srollInffo}>
                            <View style={styles.createtopic}>
                                <Image source={require('../Assets/logocreatetopic.png')} />
                                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                    <Text style={styles.textnamecreatetopic}>Mỹ phẩm Milky Dress</Text>
                                    <Text style={{color : 'rgba(0, 0, 0, 0.8)'}}>17/06/2022, 17:50</Text>
                                </View>
                            </View>
                            <View style={styles.ViewNameInfo}>
                                <Text style={styles.NameInfo}>{itemtopic.itemchaged.item.nameproduct}</Text>
                            </View>
                            <View style={styles.ViewPrice}>
                                <Image style={{ marginLeft:20 }} source={require('../Assets/pricegood.png')} />
                                <Text style={styles.textprice}>{itemtopic.itemchaged.item.price}</Text>
                            </View>
                            <View>
                                <Image style={{ margin: 20 }} source={require('../Assets/whylike.png')} />
                            </View>
                            <View style={{width: '85%', alignItems: "center", marginLeft: 20}}>
                                <Text style={styles.textcontent}>{item.whylike}</Text>
                            </View>
                            <View>
                                <Image style={{ margin: 20 }} source={require('../Assets/uudiem.png')} />
                            </View>
                            <View style={{ width: '85%', alignItems: "center", marginLeft: 20}}>
                                <Text style={styles.textcontent}>{item.uudiem}</Text>
                            </View>
                            <View style={styles.imgtopic}>
                                <View style={styles.Line1}>
                                    <View style={styles.borderLine1}>
                                        <Image style={{ width: 100, height: 100 }} source={itemtopic.itemchaged.item.imgproduct} />
                                        <Image style={{ position: "absolute", top: 90, right: 10 }} source={require('../Assets/speaker.png')} />
                                    </View>
                                    <View style={styles.borderLine1}>
                                        <Image style={{ width: 100, height: 100 }} source={itemtopic.itemchaged.item.imgproduct} />
                                    </View>
                                </View>
                                <View style={styles.Line2}>
                                    <View style={styles.borderLine2}>
                                        <Image style={{ width: 100, height: 100 }} source={itemtopic.itemchaged.item.imgproduct} />
                                    </View>
                                    <View style={styles.borderLine2}>
                                        <Image style={{ width: 100, height: 100 }} source={itemtopic.itemchaged.item.imgproduct} />
                                    </View>
                                    <View style={styles.borderLine3}>
                                        <Text style={{ color: 'white', position: "absolute", zIndex: 999 }}>+5</Text>
                                        <Image style={{ width: 100, height: 100 }} source={itemtopic.itemchaged.item.imgproduct} />
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
                </View>

            );
        }
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
        return (
            <View style={{ flex: 1, }}>
                <View>
                    <FlatList
                        style={{ flex: 1 }}
                        data={item.Data3}
                        renderItem={rendercreatetopic}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.ProSame}>
                    <Text style={styles.texthot}>BÀI VIẾT CÙNG DANH MỤC</Text>
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
                <View style={styles.AddtoCartView}>
                    <View style={styles.ViewBtn}>
                        <View style={styles.btncreatetopicBord}>
                            <Text style={styles.texthot2}>Thêm vào giỏ</Text>
                        </View>
                    </View>
                    <View style={styles.ViewBtn}>
                        <View style={styles.btncreatetopicBord}>
                            <Text style={styles.texthot2}>Tạo bài viết mẫu</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };



    return (
        <View style={styles.container}>
            <View style={styles.headerbar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={itemtopic.itemchaged.item.nameproduct} />
            </View>
            <View style={styles.viewfull}>
                <FlatList
                    data={detailproData}
                    renderItem={FlatlistrenderDetail}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    AddtoCartView: {
        width:WidthScreen * 0.898,//345
        height: HeightScreen * 0.1,
        flexDirection: 'row',
        marginTop : 70,
        marginLeft: 20,
        //backgroundColor: 'pink',
        justifyContent:"space-between",
    },
    btncreatetopicBord: {
        backgroundColor: '#000000',
        justifyContent: "center",
        alignItems: "center",
        width: 163,
        height: 50,
        borderRadius: 10
    },
    ViewBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#FBAE35',
        alignItems: "center",
    },
    viewfull: {
        flex: 1,
        alignItems: 'center',
        //backgroundColor: 'red',
    },
    ProSame: {
        width: WidthScreen,
        height: 70,
        justifyContent: "center",
    },

    headerbar: {
        width: WidthScreen,
        justifyContent: "center",
        height: HeightScreen * 0.09,
    },
    InfoPro: {
        flex: 1,
        width: WidthScreen,
        alignItems: "center",
    },
    texthot: {
        fontSize: 18,
        fontWeight: "600",
        margin: 20,
        color: 'black'
    },
    texthot2: {
        fontSize: 15,
        fontWeight: "600",
        color: 'white'
    },
    srollInffo: {
        // width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
    },
    ViewNameInfo: {
        marginLeft:20,
        width:WidthScreen * 0.75,
        height:HeightScreen * 0.082,
        // backgroundColor: 'pink'
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
        flexDirection: "row",
        alignItems: "center",
       // backgroundColor: 'pink',
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
    flex1: {
        flex: 5,
        alignItems: 'center',
        justifyContent: "center"
    },
    flex2: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    flex3: {
        flex: 2,
    }
});

export default CreateTopicScreen;
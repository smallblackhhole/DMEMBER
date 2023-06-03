import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, FlatList, ScrollView, TextInput, Image, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import shopData from "../dataShopScreen/shopData";
import CarousellphoneS from 'react-native-reanimated-carousel';
const { height: screenHeight } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');


const ShopScreen = () => {
    const navigation = useNavigation();
    const [currentPage, setCurrentPage] = useState(0)
    const Flatlistrender = ({ item }) => {
        const renderBanner = ({ item }) => (
            <View style={styles.containerSlide}>
                <Image style={styles.custombanner} source={item.banner} />
            </View>
        );
        const renderOption = ({ item }) => {
            return (
                <View style={styles.itemOption}>
                    <View style={styles.viewLineOption}>
                        <View style={styles.itemback}>
                            <Image source={item.imgoption} />
                        </View>
                        <Text style={styles.nameoption}>{item.nameoption}</Text>
                    </View>
                </View>
            )
        }
        const renderTopProduct = ({ item }) => {
            return (
                <View style={styles.borderTopProduct}>
                    <View>
                        <Image source={item.imgtoppro} />
                        <Image style={{ width: 27, height: 30, position: "absolute", left: 110, top: 10 }}
                            source={item.tag} />
                    </View>
                    <Text style={styles.textTopProduct}>{item.nametoppro}</Text>
                    <View style={styles.priceanddiscount}>
                        <Text style={styles.textpridis}>Giá bán : </Text>
                        <Text style={styles.pricenum}>{item.price}</Text>
                    </View>
                    <View style={styles.priceanddiscount}>
                        <Text style={styles.textpridis}>Chiết khấu : </Text>
                        <Text style={styles.disnum}>{item.dis}</Text>
                        <Image style={{ width: 30, height: 30, marginLeft: 8 }} source={require('../Assets/addbtn.png')} />
                    </View>
                </View>
            );
        }
        const renderBanner2 = ({ item }) => (
            <View style={styles.containerSlide2}>
                <SafeAreaView style={styles.Viewbanner}>
                    <Image style={styles.custombanner} source={item.banner} />
                </SafeAreaView>
            </View>
        );

        const renderOption2 = ({ item }) => {
            return (
                <View style={styles.borderOptionPro}>
                    <Image style={{ marginTop: 20, width: 39, height: 38, }} source={item.imgoption} />
                    <Text style={styles.textTopProduct2}>{item.nameoption}</Text>
                </View>
            )
        }

        const renderProduct = ({ item }) => {
            return (
                <TouchableOpacity onPress={() => { navigation.navigate('Detail', { item }) }}>
                    <View style={styles.ViewBorderPro}>
                        <View style={styles.borderPro}>
                            <View>
                                <Image style={styles.img_sp} source={item.imgproduct} />
                                <Image style={{ width: 27, height: 30, position: "absolute", left: 95, top: -1 }}
                                    source={item.tag} />
                            </View>
                            <Text style={styles.name_sp}>{item.nameproduct}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flexDirection: "column" }}>
                                    <View style={styles.priceanddiscount}>
                                        <Text style={styles.textpridis}>Giá bán : </Text>
                                        <Text style={styles.pricenum}>{item.price}</Text>
                                    </View>
                                    <View style={styles.priceanddiscount}>
                                        <Text style={styles.textpridis}>Chiết khấu : </Text>
                                        <Text style={styles.disnum}>{item.dis}</Text>
                                    </View>
                                </View>
                                <Image style={{ marginLeft: 24, marginTop: 9, width: 30, height: 30 }} source={require('../Assets/addbtn.png')} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
        return (
            <View>
                <View style={{ alignItems: "center" }}>
                    <CarousellphoneS
                        data={item.Data}
                        renderItem={renderBanner}
                        width={WidthScreen}
                        height={screenHeight * 0.25}
                        loop={true}
                        autoPlayInterval={3000}
                        autoPlay={true}
                        onSnapToItem={(index) => setCurrentPage(index)}
                    />
                    <View style={styles.indicatorContainer}>
                        {item.Data.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.indicator,
                                    index === currentPage ? styles.aciveindicator : null,
                                    { backgroundColor: 'white' },
                                ]}
                            />
                        ))}
                    </View>
                </View>
                <View style={styles.SelectOption}>
                    <SafeAreaView style={styles.borderOption}>
                        <FlatList
                            data={item.Data2}
                            renderItem={renderOption}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </SafeAreaView>
                </View>
                {/* text sản phẩm bán chạy  */}
                <View style={styles.textProductHot}>
                    <View style={styles.textProductHot2}>
                        <Text style={styles.texthot}>SẢN PHẨM BÁN CHẠY</Text>
                        <Image style={{ top: 5 }} source={require('../Assets/Vector.png')} />
                    </View>
                </View>
                <View style={styles.ProductTop}>
                    <FlatList
                        data={item.Data3}
                        renderItem={renderTopProduct}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                {/* text mỹ phẩm milkdress */}
                <View style={styles.textProductHot1}>
                    <View style={styles.textProductHot2}>
                        <Text style={styles.texthot}>MỸ PHẨM MILKYDRESS</Text>
                        <Image style={{ top: 5 }} source={require('../Assets/Vector.png')} />
                    </View>
                </View>
                <FlatList
                    data={item.Data4}
                    renderItem={renderBanner2}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={styles.ProductOption}>
                    <FlatList
                        data={item.Data5}
                        renderItem={renderOption2}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </View>
                <View style={styles.ProView}>
                    <FlatList
                        data={item.Data6}
                        renderItem={renderProduct}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                    />
                    <TouchableOpacity style={styles.ItemSeeAll}>
                        <Image source={require('../Assets/SeeAll.png')} />
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: "400" }}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <TouchableOpacity style={styles.borderSearch} onPress={() => { navigation.navigate('Search') }}>
                    <Image style={styles.customsearchicon} source={require('../Assets/search.png')} />
                    <Text>TÌm kiếm...</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('News')}}>
                    <Image style={styles.iconheader} source={require('../Assets/Notification.png')} />
                    <View style={styles.customnumbernotification}></View>
                </TouchableOpacity>
                {/* cart */}
                <TouchableOpacity onPress={() => { navigation.navigate('Cart') }}>
                    <Image style={styles.iconheader} source={require('../Assets/Cart.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.viewfull}>
                <FlatList
                    data={shopData}
                    renderItem={Flatlistrender}
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
        alignItems: "center",
        flexDirection: "column"
    },
    //header search, thông báo, cart
    headerBar: {
        flexDirection: "row",
        width: WidthScreen,
        height: screenHeight * 0.070,//60
        justifyContent: "space-between",
        //backgroundColor: 'green',
        alignItems: "center",
    },
    borderSearch: {
        flexDirection: "row",
        borderWidth: 0,
        borderRadius: 7,
        width: WidthScreen * 0.70,
        height: screenHeight * 0.050,//43
        marginLeft: 17,
        backgroundColor: '#FFFFFF',
        alignItems: "center",

    },
    iconheader: {
        width: WidthScreen * 0.070,//26
        height: screenHeight * 0.032,//25
        position: "relative",
        left: -15,
        //backgroundColor: 'red',
    },
    //icon search
    customsearchicon: {
        margin: 5,
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems :  "center"
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 10,
        marginHorizontal: 3,
    },
    aciveindicator: {
        width: 14,
        height: 14,
        borderRadius: 10,
        marginHorizontal: 3,
    },
    customnumbernotification: {
        backgroundColor: 'red',
        width: WidthScreen * 0.025,//10
        height: screenHeight * 0.012,//10
        borderRadius: 50,
        position: "absolute",
        top: 14,

    },
    //view slide
    containerSlide: {
        width: WidthScreen,
        height: screenHeight * 0.25,
        alignItems: "center",
        justifyContent: "center",
    },
    containerSlide2: {
        width: WidthScreen,
        height: screenHeight * 0.25,
        alignItems: "center",
        justifyContent: "center",
    },

    custombanner: {
        width: WidthScreen * 0.91,//350
        height: screenHeight * 0.239,
        resizeMode: "stretch",
        borderRadius: 20,

    },
    SelectOption: {
        width: WidthScreen * 1,
        height: screenHeight * 0.1,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 30,
        //backgroundColor: 'green',
    },
    // VIEW item danh sách ngang
    borderOption: {
        width: WidthScreen * 0.91,//365
        justifyContent: "center",
        alignItems: "center",
        height: screenHeight * 0.135,//106
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 10,
    },
    itemback1: {
        justifyContent: "center",
        alignItems: "center",
    },
    //icon trong danh sách nằm ngang
    itemback: {
        width: WidthScreen * 0.122,//46
        height: screenHeight * 0.060,//46
        borderRadius: 50,
        backgroundColor: 'rgba(17, 81, 245, 0.1)',
        justifyContent: "center",
        alignItems: "center",

    },
    //item ngang
    itemOption: {
        marginHorizontal: 10,
        //backgroundColor: 'green',
    },
    //TEXT item ngang
    nameoption: {
        width: WidthScreen * 0.132,//46
        height: screenHeight * 0.039,//30
        textAlign: "center",
        fontSize: 11,
        fontWeight: "500",
        color: 'black',
        //backgroundColor:'green'
    },
    viewLineOption: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,

    },
    textProductHot: {
        marginTop: 40,
        //backgroundColor:'pink',
        justifyContent: 'center',
        marginBottom: 18
    },
    textProductHot1: {
        marginTop: 18,
        //backgroundColor:'pink',
        justifyContent: 'center',
        marginBottom: 15
    },
    //VIEW sản phẩm bán chạy và icon >
    textProductHot2: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 20,
        //backgroundColor:'green'
    },
    //full screen
    viewfull: {
        flex: 1,
        alignItems: 'center',
        //backgroundColor: 'green',
    },
    texthot: {
        fontSize: 18,
        fontWeight: "600",
        color: 'black'
    },
    //VIEW sản phẩm ngang 
    ProductTop: {
        width: WidthScreen,
        height: screenHeight * 0.30,
        justifyContent: "space-between",
        alignItems: "center",
        //backgroundColor: 'blue',

    },
    borderTopProduct: {
        backgroundColor: '#FFFFFF',
        flexDirection: "column",
        width: WidthScreen * 0.385,//143
        height: screenHeight * 0.298,//229
        borderRadius: 10,
        marginLeft: 17,
    },
    textTopProduct: {
        color: 'black',
        fontSize: 13,
        fontWeight: "500",
        textAlign: "center",
        margin: 5,
        paddingBottom: 7,

    },
    textTopProduct2: {
        color: 'black',
        fontSize: 10,
        fontWeight: "400",
        textAlign: "center",
        margin: 5,
        paddingBottom: 7
    },
    priceanddiscount: {
        flexDirection: "row",
        marginLeft: 15
    },
    textpridis: {
        color: 'black',
        fontSize: 10,
        fontWeight: "400"
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
    ProductOption: {
        marginTop: 10,
        width: WidthScreen,
        height: screenHeight * 0.1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    borderOptionPro: {
        width: WidthScreen * 0.21,//80
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginLeft: 17,
        backgroundColor: '#FFFFFF',
    },
    ProView: {
        width: WidthScreen,
        marginTop: 17,
        flex: 1,
        flexDirection: "column",
        //backgroundColor: 'red',
    },
    // ViewBorderPro: {
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     width: WidthScreen * 0.5,
    //     height: screenHeight * 0.33,
    //     alignItems: "center",
    //     //  backgroundColor: 'red',
    // },
    //VIEW sản phẩm
    borderPro: {
        width: WidthScreen * 0.433,
        height: screenHeight * 0.295,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: 'pink',
        marginLeft: 16,
        marginBottom: 17
    },
    //image item
    img_sp: {
        width: WidthScreen * 0.265,//100
        height: screenHeight * 0.162,//125
        //backgroundColor: 'pink',
    },
    //name item
    name_sp: {
        width: WidthScreen * 0.343,
        height: screenHeight * 0.055,
        color: 'black',
        fontSize: 10,
        fontWeight: "500",
        textAlign: "center",
        margin: 5,
        paddingBottom: 7,
        // backgroundColor: 'pink',
    },
    ItemSeeAll: {
        right: '20%',
        bottom: '20%',
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "column",
        // backgroundColor: 'pink',
    }

});

export default ShopScreen;
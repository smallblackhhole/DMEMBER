import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, FlatList, ScrollView, TextInput, Image, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import shopData from "../dataShopScreen/shopData";
const { height: screenHeight } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const ShopScreen = () => {
    const navigation = useNavigation();
    const Flatlistrender = ({ item }) => {
        const renderBanner = ({ item }) => (
            <View style={styles.containerSlide}>
                <SafeAreaView style={styles.Viewbanner}>
                    <Image style={styles.custombanner} source={item.banner} />
                </SafeAreaView>
                <View style={{ alignItems: "center", marginTop: 10 }}>
                    <Image source={require('../Assets/dotCircle.png')} />
                </View>
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
                        <Image style={{ marginBottom: 2 }} source={require('../Assets/addbtn.png')} />
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
                    <Image style={{ marginTop: 5 }} source={item.imgoption} />
                    <Text style={styles.textTopProduct}>{item.nameoption}</Text>
                </View>
            )
        }

        const renderProduct = ({ item }) => {
            return (
                <TouchableOpacity onPress={() => { navigation.navigate('Detail', { item }) }}>
                    <View style={styles.ViewBorderPro}>
                        <View style={styles.borderPro}>
                            <View>
                                <Image source={item.imgproduct} />
                                <Image style={{ width: 27, height: 30, position: "absolute", left: 110, top: 10 }}
                                    source={item.tag} />
                            </View>
                            <Text style={styles.textTopProduct}>{item.nameproduct}</Text>
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
                                <Image style={{ marginLeft: 20 }} source={require('../Assets/addbtn.png')} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }


        return (
            <View>
                <FlatList
                    data={item.Data}
                    renderItem={renderBanner}
                    keyExtractor={(item, index) => index.toString()}
                />
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
                <View style={styles.textProductHot}>
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
                    <View style={styles.ItemSeeAll}>
                        <Image source={require('../Assets/SeeAll.png')} />
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: "400" }}>Xem tất cả</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <TouchableOpacity style={styles.borderSearch} onPress={() => {navigation.navigate('Search')}}>
                    <Image style={styles.customsearchicon} source={require('../Assets/search.png')} />
                    <Text>TÌm kiếm...</Text>
                </TouchableOpacity>
                <View>
                    <Image style={styles.iconheader} source={require('../Assets/Notification.png')} />
                    <View style={styles.customnumbernotification}></View>
                </View>
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
    headerBar: {
        flexDirection: "row",
        width: '100%',
        height: 60,
        justifyContent: "space-between",
    },
    borderSearch: {
        flexDirection: "row",
        borderWidth: 0,
        borderRadius: 7,
        alignItems: "center",
        width: '70%',
        backgroundColor: 'white',
        margin: 10,

    },
    iconheader: {
        position: "relative",
        marginTop: 15,
        left: -15,
    },
    customsearchicon: {
        margin: 5
    },
    customnumbernotification: {
        backgroundColor: '#EE2525',
        width: 10,
        height: 10,
        borderRadius: 10,
        position: "absolute",
        top: 30
    },
    containerSlide: {
        width: WidthScreen,
        height: screenHeight * 0.25,
        alignItems: "center",
        justifyContent: "center",
    },
    containerSlide2: {
        width: WidthScreen,
        height: screenHeight * 0.20,
        alignItems: "center",
        justifyContent: "center",
    },
    Viewbanner: {
        width: '90%',
        height: '90%',
        borderRadius: 20,
    },
    custombanner: {
        width: '100%',
        height: '100%',
        resizeMode: "stretch"
    },
    SelectOption: {
        width: '100%',
        height: screenHeight * 0.1,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
    },
    borderOption: {
        width: '90%',
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10
    },
    itemback1: {
        justifyContent: "center",
        alignItems: "center",
    },
    itemback: {
        width: 45,
        height: 45,
        borderRadius: 20,
        backgroundColor: 'rgba(17, 81, 245, 0.1)',
        justifyContent: "center",
        alignItems: "center",

    },
    itemOption: {
        marginHorizontal: 5,
        justifyContent: 'space-between',
    },
    nameoption: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "500",
        color: 'black'
    },
    viewLineOption: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    textProductHot: {
        width: '100%',
        height: 40,
        marginTop: 10,
    },
    textProductHot2: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 15,
        margin: 10
    },
    viewfull: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    texthot: {
        fontSize: 18,
        fontWeight: "600",
        color: 'black'
    },
    ProductTop: {
        width: WidthScreen,
        height: screenHeight * 0.30,
        justifyContent: "space-between",
        alignItems: "center",
    },
    borderTopProduct: {
        backgroundColor: 'white',
        flexDirection: "column",
        width: WidthScreen * 0.35,
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
    ProductOption: {
        marginTop: 10,
        width: WidthScreen,
        height: screenHeight * 0.1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    borderOptionPro: {
        backgroundColor: 'white',
        width: WidthScreen * 0.2,
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginLeft: 7.5,
        marginRight: 7.5
    },
    ProView: {
        width: WidthScreen,
        height: '100%',
        marginTop: 10,
        flex: 1,
        flexDirection: "column"
    },
    ViewBorderPro: {
        flexDirection: "row",
        justifyContent: "center",
        width: WidthScreen * 0.5,
        height: screenHeight * 0.33,
        alignItems: "center"
    },
    borderPro: {
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    ItemSeeAll: {
        right: '20%',
        bottom: '20%',
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "column"
    }

});

export default ShopScreen;
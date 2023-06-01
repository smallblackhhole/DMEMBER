import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
import shopData from '../dataShopScreen/shopData';
import { useNavigation } from '@react-navigation/native';

const { height: HeightScreen, width: WidthScreen } = Dimensions.get('window');

const SearchScreen = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const searchInputRef = useRef(null);

    const clearSearch = () => {
        setSearch('');
        searchInputRef.current.clear();
    };
    const filterSearch = shopData[0].Data6.filter((item) => {
        const nameProduct = item.nameproduct;
        return nameProduct.toLowerCase().includes(search.toLowerCase());
    });

    const renderItem = ({ item }) => {
        return (
            <View style={styles.ViewBorderPro}>
                <View style={styles.borderPro}>
                    <View>
                        <Image style={styles.img_sp} source={item.imgproduct} />
                        <Image
                            style={{ width: 27, height: 30, position: "absolute", left: 95, top: -1 }}
                            source={item.tag}
                        />
                    </View>
                    <Text style={styles.textTopProduct}>{item.nameproduct}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
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
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.hearder}>
                <TouchableOpacity style={{ marginRight : 10 }} onPress={() => {navigation.goBack()}}>
                    <Image source={require('../Assets/Back.png')} />
                </TouchableOpacity>
                <View style={styles.viewSearchbar}>
                    <Image style={{ marginLeft: 10 }} source={require('../Assets/search.png')} />
                    <TextInput
                        style={{ color: '#000000', marginLeft: 10 }}
                        ref={searchInputRef}
                        placeholder='Tìm kiếm sản phẩm...'
                        placeholderTextColor='color: rgba(0, 0, 0, 0.5);'
                        value={search}
                        autoFocus
                        onChangeText={setSearch}
                    />
                </View>
                <TouchableOpacity style={styles.btndeleteText} onPress={clearSearch}>
                    <Image source={require('../Assets/icondeleteText.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <View style={{ flexDirection: 'row', height: HeightScreen * 0.04, width: WidthScreen }}>
                    <View style={{ flex: 9, justifyContent: 'center' }}>
                        <Text style={styles.texttitle}>Sản phẩm chọn mua</Text>
                    </View>
                    <View style={{ flex: 1.3, justifyContent: 'center' }}>
                        <Text style={{ color: '#EE2525', fontSize: 15, fontWeight: '500' }}>Xóa</Text>
                    </View>
                </View>

                <View style={styles.ViewsearchNear}>
                    <View style={styles.Bordersearchnear}>
                        <Image style={{ margin: 10 }} source={require('../Assets/searchnear.png')} />
                        <Text style={styles.text1}>Nước hoa hồng</Text>
                    </View>
                    <View style={styles.Bordersearchnear}>
                        <Image style={{ margin: 10 }} source={require('../Assets/searchnear.png')} />
                        <Text style={styles.text1}>Kem nền</Text>
                    </View>
                    <View style={styles.Bordersearchnear}>
                        <Image style={{ margin: 10 }} source={require('../Assets/searchnear.png')} />
                        <Text style={styles.text1}>Viên uống giảm mỡ</Text>
                    </View>
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.texttitle2}>Kết quả liên quan</Text>
                </View>
                {search !== '' ? (
                    <FlatList
                        data={filterSearch}
                        renderItem={renderItem}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                    />
                ) : (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#000000', marginBottom: 70 }}>Chưa có sản phẩm nào cần tìm...</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBAE35',
    },
    hearder: {
        flexDirection: 'row',
        height: HeightScreen * 0.1,
        marginLeft: 20,
        alignItems: 'center',
    },
    viewSearchbar: {
        width: 300,
        height: HeightScreen * 0.072,//56
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    btndeleteText: {
        height: 17,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red',
        marginLeft: 17,
    },
    contentContainer: {
        width: WidthScreen,
        flex: 1,
        flexDirection: 'column',
        //backgroundColor: 'green',
    },
    titleView: {
        flexDirection: 'row',
        height: HeightScreen * 0.04,
        width: WidthScreen,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    texttitle: {
        fontSize: 15,
        color: 'black',
        fontWeight: '500',
        marginLeft: 20
    },
    texttitle2: {
        fontSize: 17,
        color: 'black',
        fontWeight: '500',
    },
    ViewsearchNear: {
        width: WidthScreen,
        height: HeightScreen * 0.2,
        alignItems: 'center',
    },
    Bordersearchnear: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 2,
        width: '90%',
        height: '25%',
        borderRadius: 10,
    },
    text1: {
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
    },
    ViewBorderPro: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: WidthScreen * 0.5,
        height: HeightScreen * 0.33,
        alignItems: 'center',

    },
    //view sản phẩm
    borderPro: {
        width: WidthScreen * 0.433,
        height: HeightScreen * 0.295,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: 'pink',
    },
    //image item
    img_sp: {
        width: WidthScreen * 0.265,//100
        height: HeightScreen * 0.162,//125
        //backgroundColor: 'pink',
    },
    //tên sp
    textTopProduct: {
        width: WidthScreen * 0.343,
        height: HeightScreen * 0.055,
        color: 'black',
        fontSize: 10,
        fontWeight: "500",
        textAlign: "center",
        margin: 5,
        paddingBottom: 7,
        // backgroundColor: 'pink',
    },
    priceanddiscount: {
        flexDirection: 'row',
        marginLeft: 20
    },
    textpridis: {
        color: 'black',
        fontSize: 10,
        fontWeight: "400"
    },
    pricenum: {
        color: '#BE7229',
        fontSize: 10,
        fontWeight: "400"
    },
    disnum: {
        color: '#1151F5',
        fontSize: 10,
        fontWeight: "400"
    },
    clearButton: {
        flex: 1,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SearchScreen;

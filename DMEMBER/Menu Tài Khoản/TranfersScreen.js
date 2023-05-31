import React from "react";
import { Text, View, StyleSheet, Dimensions, Image, TextInput, ScrollView } from 'react-native'
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const TranfersScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <View style={styles.flexhead1}>
                    <Text style={styles.title}>Đổi điểm</Text>
                </View>
                <View style={styles.flexhead2}>
                    <View style={styles.moneyborder}>
                        <Text style={styles.moneytext}>245,975</Text>
                        <Image source={require('../Assets/wallet.png')} />
                    </View>
                </View>
            </View>
            <View style={styles.searchBar}>
                <View style={styles.borderSearch}>
                    <Image style={styles.customsearchicon} source={require('../Assets/search.png')} />
                    <TextInput placeholder="TÌm kiếm..." />
                </View>
                <Image style={styles.iconheader} source={require('../Assets/Cart.png')} />
            </View>
            <View style={styles.ViewtextTitle2}>
                <Text style={styles.TextTitle2}>Có thể đổi</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ViewBor}>
                    <View style={styles.ViewBorItem}>
                        <View style={{ flex: 4 }}>
                            <Image style={styles.Imagesty} source={require('../Assets/ima1.png')} />
                        </View>
                        <View style={{ flex: 6, flexDirection: "column", marginLeft: 16, }}>
                            <Text style={styles.name}>Immune Boost </Text>
                            <Text style={styles.disre}>Siêu phẩm tăng cường sức đề kháng toàn diện </Text>
                            <View style={styles.pointS}>
                                <Text style={styles.text_pointS} >1,790,000 Dpoint </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ViewBorItem}>
                        <View style={{ flex: 4 }}>
                            <Image style={styles.Imagesty} source={require('../Assets/ima2.png')} />
                        </View>
                        <View style={{ flex: 6, flexDirection: "column", marginLeft: 16, }}>
                            <Text style={styles.name}>Dfix</Text>
                            <Text style={styles.disre}>Trà giảm cân thiên nhiên</Text>
                            <View style={styles.pointS}>
                                <Text style={styles.text_pointS} >1,790,000 Dpoint </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ViewBorItem}>
                        <View style={{ flex: 4 }}>
                            <Image style={styles.Imagesty} source={require('../Assets/ima3.png')} />
                        </View>
                        <View style={{ flex: 6, flexDirection: "column", marginLeft: 16, }}>
                            <Text style={styles.name}>Brilliant Cell Mask</Text>
                            <Text style={styles.disre}>Mặt nạ tinh chất cô đặc trắng da, mờ thâm </Text>
                            <View style={styles.pointS}>
                                <Text style={styles.text_pointS} >1,790,000 Dpoint </Text>
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
        backgroundColor: '#FBAE35',
        flexDirection: "column"
    },
    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.06,
        flexDirection: "row",
        justifyContent: 'center',
        //backgroundColor: 'red',
    },
    flexhead1: {
        flex: 1.6,
        justifyContent: "center",
    },
    flexhead2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: 'black',
        fontWeight: "500",
        fontSize: 21,
        textAlign: "right",
        // backgroundColor: 'red',
    },
    moneyborder: {
        width: WidthScreen * 0.29,
        height: HeightScreen * 0.045,
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    customsearchicon: {
        margin: 5
    },
    moneytext: {
        color: '#19A538',
        fontWeight: "600",
        fontSize: 14,
        marginRight: 5,

    },
    iconheader: {
        position: "relative",
        marginTop: 15,
        marginLeft: 15
    },
    searchBar: {
        width: WidthScreen * 0.958,//370
        height: HeightScreen * 0.07,
        flexDirection: "row",
        marginLeft: 10,
        //backgroundColor: 'red',
    },
    ViewtextTitle2: {
        marginTop: 15,
        justifyContent: "center",
        //backgroundColor: 'red',
    },
    TextTitle2: {
        color: 'black',
        fontSize: 17,
        fontWeight: "500",
        marginLeft: 20
    },

    borderSearch: {
        flexDirection: "row",
        borderWidth: 0,
        borderRadius: 7,
        width: WidthScreen * 0.76,
        backgroundColor: 'white',
        margin: 10,
    },
    ViewBor: {
        width: WidthScreen,
        height: HeightScreen,
        flexDirection: "column",
        alignItems: "center"
    },
    ViewBorItem: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.143,//112
        borderRadius: 10,
        marginTop: 22,
        backgroundColor: 'white'
    },
    // Imagesty: {
    //     width: '100%',
    //     height: '100%',
    //     resizeMode: "stretch"
    // },
    pointS: {
        width: '55%',
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        height: 30,
        backgroundColor: '#E3721E'
    },
    name: {
        color: 'black',
        fontWeight: "600",
        fontSize: 15,
        // marginLeft : 10,
        // marginBottom : 10,
        // backgroundColor: 'blue'
    },
    disre: {
        height: 35,
        color: 'black',
        fontWeight: "500",
        fontSize: 13,
        // marginLeft : 10,
        // marginBottom : 10,
        // backgroundColor: 'red'
    },
    text_pointS: {
        color: '#FFFFFF',
        fontWeight: "600",
        fontSize: 13,
    }
});

export default TranfersScreen;
import React from 'react-native';
import { useState } from "react";
import {
    Text, View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, Switch, TextInput,
    SafeAreaView
} from 'react-native'
import ButtonBack from '../Component/ButtonBack';
import Revenue from '../Component/Revenue';
import SelectDropdown from 'react-native-select-dropdown'


const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');
const Time = ["Tháng", "Tuần", "Năm", "Ngày"]
const Report = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Báo cáo "}
                />
            </View>
            <View style={styles.ViewtextTitle2}>
                <Text style={styles.TextTitle2}>Tháng 1 - 2022</Text>
            </View>
            <View style={styles.ViewRevenue}>
                <SafeAreaView>
                    <Revenue />
                </SafeAreaView>
            </View>
            <View style={styles.ViewtextTitle2}>
                <Text style={styles.TextTitle2}>Doanh thu phòng ban</Text>
            </View>
            <View style={styles.ViewFull}>
                <View style={styles.BordView}>
                    <View style={styles.flex1}>
                        <View style={styles.headerReport}>
                            <Text style={styles.titleReport}>Lọc kết quả</Text>
                            <View style={styles.DropdownBord}>
                                <SelectDropdown
                                    data={Time}
                                    defaultButtonText={Time[0]}
                                    buttonStyle={styles.ViewOption}
                                    buttonTextStyle={{ fontSize: 13, fontWeight: "400" }}
                                />
                                <Image style={styles.imgdrop} source={require('../Assets/Vector.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.flex2}>
                        <Image style={{ marginTop: 20 }} source={require('../Assets/Chart.png')} />
                    </View>
                </View>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    ViewtextTitle2: {
        marginTop: 10,
        width: WidthScreen,
        height: HeightScreen * 0.05,
        justifyContent: "center",
    },
    TextTitle2: {
        color: 'black',
        fontSize: 18,
        fontWeight: "500",
        marginLeft: 20
    },
    ViewRevenue: {
        width: WidthScreen,
        height: HeightScreen * 0.25,
    },
    ViewFull: {
        width: WidthScreen,
        height: HeightScreen * 0.37,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    BordView: {
        width: '90%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10
    },
    flex1: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex2: {
        flex: 8.5,
    },
    headerReport: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleReport: {
        color: 'black',
        fontSize: 16,
        fontWeight: "400"
    },
    DropdownBord: {
        borderWidth: 1,
        width: '30%',
        marginLeft: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#0AB5AB',
        backgroundColor: 'white',
        borderRadius: 20
    },
    ViewOption: {
        width: '70%',
        height: '70%',
        backgroundColor: 'white'
    },
    imgdrop: {
        transform: [{ rotate: '90deg' }]
    }
});

export default Report;

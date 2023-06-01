import React from 'react-native';
import { useState } from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, Switch, TextInput } from 'react-native'
import ButtonBack from '../Component/ButtonBack';
import MapBorder from '../Component/MapBorder';
import { useNavigation } from '@react-navigation/native';

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Map = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Quản lý địa chỉ"} />
            </View>
            <View style={styles.addCustomer}>
                <TouchableOpacity style={styles.addCustomerBord} onPress={() => {navigation.navigate('Addaddress')}}>
                    <Text style={styles.text1}>Thêm khách hàng mới</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ViewtextTitle2}>
                <Text style={styles.TextTitle2}>Danh sách khách hàng</Text>
            </View>
            <View style={{ width: '100%', height: '100%' }}>
                <ScrollView>
                    <View style={styles.ViewFull}>
                        <MapBorder
                        name={"Chị Hồng - 01234567889"}
                        address={"Địa chỉ: 256 Bạch Đằng, Phường 24, Bình Thạnh, TPHCM"}/>
                        <MapBorder
                        name={"Chị Mai - 124398690"}
                        address={"Địa chỉ: 256 Bạch Đằng, Phường 24, Bình Thạnh, TPHCM"}/>
                        <MapBorder
                        name={"Chị Huệ - 01234567889"}
                        address={"Địa chỉ: 256 Bạch Đằng, Phường 24, Bình Thạnh, TPHCM"}/>
                    </View>
                </ScrollView>
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
        alignItems: 'center'
    },
    addCustomer: {
        width: WidthScreen,
        height: HeightScreen * 0.08,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addCustomerBord: {
        width: '90%',
        height: '90%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    text1: {
        color: 'white',
        fontSize: 16,
        fontWeight: "500"
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
    ViewFull: {
        width: WidthScreen,
        height: HeightScreen,
        alignItems : 'center',
        
    }
});

export default Map;
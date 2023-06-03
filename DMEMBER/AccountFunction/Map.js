import React from 'react-native';
import { useState } from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, Switch, TextInput } from 'react-native'
import ButtonBack from '../Component/ButtonBack';
import MapBorder from '../Component/MapBorder';
import { useNavigation } from '@react-navigation/native';

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Map = ({ route }) => {
    const data = route.params;

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <ButtonBack icon={require('../Assets/Back.png')} title={"Quản lý địa chỉ"} />
            </View>
            <View style={styles.addCustomer}>
                <TouchableOpacity style={styles.addCustomerBord} onPress={() => { navigation.navigate('Addaddress') }}>
                    <Text style={styles.text1}>Thêm khách hàng mới</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ViewtextTitle2}>
                <Text style={styles.TextTitle2}>Danh sách khách hàng</Text>
            </View>
            <View>
                <ScrollView>
                    <View style={styles.ViewFull}>
                        {!data ? (
                            <>
                                <MapBorder
                                    name={"Chị Hồng"}
                                    phone={"01234567889"}
                                    city={"TPHCM"}
                                    ward={"Phường 24"}
                                    district={"Bình Thạnh"}
                                    address={"256 Bạch Đằng"} />
                                <MapBorder
                                    name={"Chị Mai"}
                                    phone={"124398690"}
                                    city={"TPHCM"}
                                    ward={"Phường 24"}
                                    district={"Bình Thạnh"}
                                    address={"256 Bạch Đằng"} />
                                <MapBorder
                                    name={"Chị Huệ"}
                                    phone={"01234567889"}
                                    city={"TPHCM"}
                                    ward={"Phường 24"}
                                    district={"Bình Thạnh"}
                                    address={"256 Bạch Đằng"} />
                            </>
                        ) : (
                            <MapBorder
                                name={data.name}
                                phone={data.phone}
                                address={data.address}
                                city={data.selectedCity}
                                district={data.selectedDistrict}
                                ward={data.selectedWard}
                            />
                        )}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBAE35'
    },
    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        // backgroundColor:'red'
    },
    addCustomer: {
        width: WidthScreen,
        height: HeightScreen * 0.071,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        // backgroundColor:'red'
    },
    addCustomerBord: {
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.065,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    text1: {
        color: 'white',
        fontSize: 15,
        fontWeight: "600"
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
        alignItems: 'center',


    }
});

export default Map;
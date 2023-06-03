import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Touchable, TouchableOpacity, Dimensions } from "react-native";
import BorderViewWallet from "../Component/BorderView";
import ButtonBack from "../Component/ButtonBack";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');
import React, { useState } from 'react';

const WithdrawDcash = () => {
    const [cash, setcash] = useState('');

    const handleCash = (option) => {
        if (option === 'cash1') {
            setcash('500.000');
        } else if (option === 'cash2') {
            setcash('50.000');
        } else if (option === 'cash3') {
            setcash('5.000');
        }
    };
    return (
        <View style={style.container}>
            <View style={style.headerbar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Rút Dcash"} />
                <Image style={{ right: 20, position: 'absolute', bottom: 10, width: 25, height:20 }} resizeMode="contain" source={require('../Assets/Re.png')} />
            </View>
            <View>
                <Text style={style.text}>Bạn cần rút bao nhiêu?</Text>
                <View style={{ paddingTop: '5%'  , alignItems : "center" , justifyContent : "center"}}>
                    <View style={style.homebuy}>
                        <TextInput
                            style={{ fontSize: 24 }}
                            onChangeText={text => {
                                const cleanedText = text.replace(/[^0-9]/g, '');
                                const groups = cleanedText.match(/\d{1,3}/g);
                                const formattedText = groups ? groups.join('.') : '';
                                setcash(formattedText);
                            }}
                            value={cash}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={style.tien}>
                        <TouchableOpacity style={style.homeee} onPress={() => handleCash('cash1')}>
                            <Text style={{ fontSize: 20, fontWeight: '400', color: 'black', }}>500.000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.homeee} onPress={() => handleCash('cash2')}>
                            <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>50.000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.homeee} onPress={() => handleCash('cash3')}>
                            <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>5.000</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.ViewBanner}>
                        <BorderViewWallet />
                    </View>

                </View>
                <TouchableOpacity style={style.loginn}>
                    <Text style={{ color: 'white' }}>Rút tiền </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default WithdrawDcash;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    backk: {
        left: '5%',
    },
    retangle: {
        backgroundColor: 'white',
        borderRadius: 5,
        top: '30%',
    },
    loginn: {
        top: '320%',
        width: '50%',
        height: '30%',
        left: '30%',
        color: 'white',
        position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center',
    },
    homee: {
        backgroundColor: '#FFCC66',
        borderRadius: 5,
        width: WidthScreen * 0.25,
        height: HeightScreen * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    homeee: {
        backgroundColor: '#FFCC66',
        borderRadius: 5,
        width: WidthScreen * 0.25,
        height: HeightScreen * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15

    },
    homeeee: {
        backgroundColor: '#FFCC66',
        borderRadius: 5,
        width: WidthScreen * 0.25,
        height: HeightScreen * 0.05,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: '65%'
    },
    homebuy: {
        backgroundColor: 'white',
        top: '160%',
        left: '5%',
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.09,
        position: 'absolute',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewBanner: {
        width: WidthScreen,
        height: HeightScreen * 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        width: WidthScreen,
        height: HeightScreen * 0.03,
        color: 'black',
        fontWeight: '600',
        left: '5%',
        fontSize: 18,
        top: '120%',
        justifyContent: 'space-evenly',
        position: 'absolute',
    },
    tien: {
        width: WidthScreen,
        height: HeightScreen * 0.06,
        justifyContent: 'center',
        top: '215%',
        position: 'absolute',
        flexDirection :  "row"
    },
    headerbar: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        flexDirection: "row",
    }
});
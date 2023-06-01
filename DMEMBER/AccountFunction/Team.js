import React from 'react-native';
import { useState } from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, Switch, TextInput } from 'react-native'
import ButtonBack from '../Component/ButtonBack';
import MapBorder from '../Component/MapBorder';
import { useNavigation } from '@react-navigation/native';
import TeamBorder from '../Component/BorderTeam';


const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Team = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Danh sách thành viên"}
                />
            </View>
            <View style={styles.searchView}>
                <View style={styles.flexsearch1}>
                    <View style={styles.searchBord}>
                        <Image style={styles.customsearchicon} source={require('../Assets/search.png')} />
                        <TextInput placeholder="TÌm kiếm thành viên" />
                    </View>
                </View>
                <TouchableOpacity style={styles.flexsearch2} onPress={() => {navigation.navigate('CreateAccount')}}>
                    <Image source={require('../Assets/addmem.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.ViewtextTitle2}>
                <Text style={styles.TextTitle2}>Danh sách thành viên</Text>
            </View>
            <View style={styles.ViewFull}>
                <TeamBorder
                    img={require('../Assets/teamimg1.png')}
                    name={"Nguyễn Văn A"}
                    congno={"Công nợ: 0đ"}
                    damua={"Đã mua: 0đ"}
                />
                <TeamBorder
                    img={require('../Assets/teamimg2.png')}
                    name={"Nguyễn Văn B"}
                    congno={"Công nợ: 0đ"}
                    damua={"Đã mua: 0đ"}
                />
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
    customsearchicon: {
        margin: 10
    },
    searchView: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        flexDirection: 'row',
    },
    flexsearch1: {
        flex: 9,
        alignItems: "center",
        justifyContent: 'center',
    },
    flexsearch2: {
        flex: 1,
        marginRight: 10,
        alignItems: "center",
        justifyContent: 'center',
    },
    searchBord: {
        width: '90%',
        height: '80%',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'white'
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

export default Team;

import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity } from "react-native";
import ButtonBack from '../Component/ButtonBack';
import { useNavigation } from '@react-navigation/native';
import Avatar2 from '../Component/Avata2';
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const DcashTransfer_2 = ({ route }) => {
    const navigation = useNavigation();
    const memberList = route.params;
    const [selectedMembers, setSelectedMembers] = useState(memberList.selectedMembers);
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
    const handleRemoveMember = (name) => {
        const updatedMembers = selectedMembers.filter(member => member.member !== name);
        setSelectedMembers(updatedMembers);
    };

    return (
        <View style={style.container}>
            <View style={style.headerBar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Chuyển Dcash"}
                />
            </View>
            <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Người nhận</Text>
            </View >
            <View style={{ flexDirection: 'row', width: WidthScreen, height: HeightScreen * 0.1, alignItems: 'center', margin: 10 }}>
                {selectedMembers.map((member, index) => (
                    <Avatar2 key={index} img={member.img} name={member.member} onRemoveMember={handleRemoveMember} />
                ))}
            </View>

            <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Nhập số tiền muốn chuyển </Text>
            </View>
            <View style={{ width: WidthScreen, height: HeightScreen * 0.2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={style.homeee} onPress={() => handleCash('cash1')}>
                        <Text style={{ fontSize: 20, fontWeight: '400', color: 'black', }}>500.000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.homeee} onPress={() => handleCash('cash2')}>
                        <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>50.000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.homeeee} onPress={() => handleCash('cash3')}>
                        <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>5.000</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.text}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Lời nhắn</Text>
            </View>
            <View style={style.note}>
                <View style={style.bordernote}>
                    <TextInput />
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={style.loginn} onPress={() =>{navigation.navigate('InforTransfer')}}>
                    <Text style={{ color: 'white' }}>Chuyển</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DcashTransfer_2;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
        flexDirection: 'column'
    },
    text: {
        justifyContent: 'center',
        width: WidthScreen,
        height: HeightScreen * 0.03,
        marginTop: 10
    },
    thanhvien: {
        width: WidthScreen,
        height: HeightScreen * 0.40,
        justifyContent: 'center'
    },
    homee: {
        backgroundColor: '#FFCC66',
        borderRadius: 5,
        width: WidthScreen * 0.25,
        height: HeightScreen * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15

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
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15

    },
    homebuy: {
        backgroundColor: 'white',
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.09,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginn: {
        width: WidthScreen * 0.4,
        height: HeightScreen * 0.07,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        flexDirection: "row",
    },
    note: {
        width: WidthScreen,
        height: HeightScreen * 0.1,
        alignItems: "center",
    },
    bordernote: {
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'black'
    },
});
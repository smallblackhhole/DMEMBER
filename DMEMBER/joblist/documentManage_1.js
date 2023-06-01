import React, { useState } from 'react';
import { StyleSheet, View, Text,  Image,    } from "react-native";

import Document from '../Component/Document';
import Search from '../Component/Search';
const documentManage_1 = () => {
    return (
        <View style={style.container}>
            <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'center', alignContent: 'center' }}>
                <View style={{ flex: 3 }}>
                    <Image source={require('../image/back.png')} />
                </View>
                <View style={{ flex: 7 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Chuyển Dcash</Text>
                </View>
            </View>
            <View style={style.searchh}>
                <Search
                    img={require('../image/search.png')}
                    text={"Tên tài liệu/Mã KH/Người tạo"}
                    add={require('../image/chucnang.png')}
                />
            </View>
            <View style={{justifyContent:'center'}}>
                <Document 
                address={"Bình Thạnh"}
                date={"03/10/2022"}
                time={"12:34"}
                documenttest={"Tài liệu test 03102022"}
                people={"Người tạo"}
                name={"Lê Huỳnh Bá Toàn"}
                />
                   <Document 
                address={"Bình Thạnh"}
                date={"03/10/2022"}
                time={"12:34"}
                documenttest={"Tài liệu test 03102022"}
                people={"Người tạo"}
                name={"Lê Huỳnh Bá Toàn"}
                />
            </View>
        </View>
    );
};

export default documentManage_1;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
        flexDirection: 'column'
    },


});
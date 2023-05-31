import React, { useState } from 'react';
import { StyleSheet, View, Text,  Image,  Dimensions, TouchableOpacity } from "react-native";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Thongtin_diachi = ({ name, sđt, address }) => {
    return (
        <View style={style.container}>
                <View style={{ backgroundColor: 'white', width: WidthScreen * 0.9, height: HeightScreen * 0.1, borderRadius: 5, flexDirection: 'row', alignItems: 'center', }}>
                    <View >
                        <Image style={{ width: 50, height: 50, margin: 20 }} source={require('../image/ngoinha.png')} />
                    </View>
                    <View >
                        <View style={{ flexDirection: 'row' }}>
                            <View >
                                <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>{name}</Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <Image source={require('../image/l.png')} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>{sđt}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: 'black' }}>{address}</Text>
                        </View>
                    </View>
                </View>
        </View>
    );
};

export default Thongtin_diachi;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
});
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity } from "react-native";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Thongtin1 = ({ text, info, setinfo }) => {
    const handleTextChange = (value) => {
        setinfo(value);
    };

    return (
        <View style={{ with: WidthScreen, justifyContent: 'center', height: HeightScreen * 0.08, alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', width: WidthScreen * 0.9, height: HeightScreen * 0.07, borderRadius: 5, flexDirection: 'row', alignItems: 'center', }}>
                <View style={{ marginLeft: 20 }}>
                    <TextInput
                        placeholder={text}
                        value={info}
                        onChangeText={handleTextChange}
                        style={{ fontSize: 16, color: 'black' }} />
                </View>
            </View>
        </View>
    );
};

export default Thongtin1;

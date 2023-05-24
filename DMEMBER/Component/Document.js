import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Dimensions } from "react-native";


const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Document = ({address, date,time, documenttest, people,name}) => {
    return (
        <View style={{ width: WidthScreen, height: HeightScreen * 0.10, justifyContent: 'center', alignItems: 'center', }}>
            <View style={style.homee}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', margin: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{flex:6.5}}>
                            <Text>{address}</Text>
                        </View>
                        <View style={{flexDirection:'row',flex:3.5}}>
                            <View style={{flex:7}}>
                                <Text>{date}</Text>
                            </View>
                            <View style={{flex:3}}>
                                <Text>{time}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', color: 'black', }} >{documenttest}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{flex:6.5}}>
                            <Text>{people}</Text>
                        </View>
                        <View style={{flex:3.5}}>
                            <Text>{name}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default Document;
const style = StyleSheet.create({
    homee: {
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.09
    },
    reangle62: {
        width: 50,
        height: 51,
    }
});
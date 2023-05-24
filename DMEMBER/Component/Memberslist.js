import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Dimensions } from "react-native";
import CheckBox from 'react-native-check-box'


const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Memberslist = ({ name, img, sđt }) => { 
    const [isChecked, setIsChecked] = useState(false);
    return (
        <View style={{ width: WidthScreen, height: HeightScreen * 0.1,justifyContent: 'center', alignItems: 'center'}}>
            <View style={style.homee}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 2 ,margin:20}}>
                        <Image style={style.reangle62} source={img} />
                    </View>
                    <View style={{ flex: 8, flexDirection: 'column' }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>{name}</Text>
                        <Text>{sđt}</Text>
                    </View>
                    <View style={{margin:20}}>
                    <CheckBox isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                    </View>
                </View>
            </View>
        </View>
    );
};
export default Memberslist;
const style = StyleSheet.create({
    homee: {
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        width: '90%',
        height: '90%',
    },
    reangle62: {
        width: 50,
        height: 51,
    }
});
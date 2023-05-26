import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import React, { useEffect } from 'react';

import { useNavigation } from "@react-navigation/native";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Screnn = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Login'); // Chuyển đến màn hình khác (ví dụ: 'MainScreen')
        }, 2000); // 2 giây
    
        return () => clearTimeout(timer); // Hủy bỏ timer nếu màn hình bị unmount trước khi kết thúc 3 giây
      }, []);
    return (
        <View style={style.container}>
                <View style={{flex:8,marginTop:300}}>
                    <Image  source={require('../image/rectangle.png')} />
                </View>
                <View style={{alignItems:'center',flex:2}}>
                    <Image  source={require('../image/easytosell.png')} />
                    <Image  source={require('../image/tim.png')} />
                </View>
        </View>

    );  
};

export default Screnn;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },


});
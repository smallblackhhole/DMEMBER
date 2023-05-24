import React from "react";
import { Text, View, Image, useWindowDimensions } from "react-native";


const ButtonBack = () => {
    return(
        <View style={{padding : 20 }}>
            <Image source={require('../Assets/Back.png')}/>
        </View>
    );
}


export default ButtonBack;
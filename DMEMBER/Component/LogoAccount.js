import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
const LogoAccount =  ({img}) => {
    return(
        <View style={styles.viewContainer}>
                <View style={styles.viewradius}></View>
                <Image style={styles.imagelogo} source={img}/>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer : {
        alignItems : "center",
        justifyContent : "flex-start"
    },
    viewradius : {
        position: "relative", 
        alignItems: "center",
        bottom: 40,
        width: 110,
        height: 110,
        backgroundColor: 'white',
        borderRadius: 55
    },
    imagelogo : {
        width : 100,
        height : 100,
        bottom : 45,
        position : "absolute"
    }
});
export default LogoAccount;
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
const LogoAccount =  () => {
    return(
        <View style={styles.viewContainer}>
                <View style={styles.viewradius}></View>
                <Image style={styles.imagelogo} source={require('../Assets/ImageAccount.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer : {
        alignItems : "center",
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
        bottom : 45,
        position : "absolute"
    }
});
export default LogoAccount;
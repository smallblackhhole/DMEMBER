import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');


const ButtonBack = ({ icon, title }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerBar}>
                <TouchableOpacity onPress={() => { navigation.goBack()}}>
                    <Image source={icon} />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            <View style={{ width:30, height:30}}></View>
        </View>
    );
}
const styles = StyleSheet.create({

    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 20,
        //backgroundColor: 'pink',
    },
    // Viewtitle : {
    //     height:29,
    //     justifyContent : "center" , 
    //     alignItems : "center",
    //   // backgroundColor: 'red',
    // },
    title: {
        color: 'black',
        fontSize:21,
        fontWeight: "500",
    },
})

export default ButtonBack;
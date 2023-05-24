import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');


const ButtonBack = ({ icon, title }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerBar}>
            <View style={{ flex: 3, backgroundColor: 'red' , zIndex : 100 }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image source={icon} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 7, backgroundColor: 'blue' }}>
            </View>
            <View style={styles.Viewtitle}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 20
    },
    title: {
        color: 'black',
        fontSize: 22,
        fontWeight: "500",
        maxWidth : '50%',
        maxHeight: '70%'
    },
    Viewtitle : {
        width : '100%',
        height : '100%',
        justifyContent : "center" , 
        alignItems : "center",
    }
})

export default ButtonBack;
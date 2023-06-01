
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity,Dimensions } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const BorderAccount = ({ icon, name, navi }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.Opa} onPress={() => { navigation.navigate(navi) }}>
            <View style={styles.container}>
                <View style={{ flex: 1, margin: 10 }}>
                    <Image source={icon} />
                </View>
                <View style={{ flex: 9 }}>
                    <Text style={styles.textname}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: WidthScreen * 0.9,
        backgroundColor:'#FFFFFF',
        borderRadius: 10,
    },
    Opa: {
        elevation : 5,
        borderRadius: 10,
        backgroundColor : '#FFFFFF',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.05,
    },
    textname: {
        color: 'black',
        fontWeight: '400',
        fontSize: 15
    }
});
export default BorderAccount;
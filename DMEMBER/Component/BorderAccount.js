import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    Opa: {
        elevation : 5,
        borderRadius: 10,
        backgroundColor : 'white',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        width: '90%',
        height: '5%',
    },
    textname: {
        color: 'black',
        fontWeight: '400',
        fontSize: 15
    }
});
export default BorderAccount;
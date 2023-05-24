import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');


const Carticon = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate('Cart')}}>
                <Image style={styles.imgheader} source={require('../Assets/Cart.png')} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    imgheader: {
        width: 25,
        height: 25,
        marginRight: 15
    },
})

export default Carticon;
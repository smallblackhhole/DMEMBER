import React from "react";
import { View, StyleSheet } from "react-native";

const Line = () => {
    return (
        <View style={{alignItems : "center"}}>
            <View style={styles.line}></View>
        </View>

    );
}

const styles = StyleSheet.create({
    line: {
        borderWidth: 0.2,
        color: 'black',
        width: '90%',
        opacity : 0.4
    }
});
export default Line;
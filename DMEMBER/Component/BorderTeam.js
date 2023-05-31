
import React from "react";
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

const { width: WidthScreen } = Dimensions.get('window');
const BorderTeam = ({ img, name, congno, damua }) => {
    const navigation = useNavigation();
    const RightSwipe = () => {
        return (
            <View style={styles.OptionBox}>
                <TouchableOpacity style={styles.sua}>
                    <Image source={require('../Assets/sua.png')} />
                    <Text style={styles.text3}>Sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.xoa}>
                    <Image source={require('../Assets/xoa.png')} />
                    <Text style={styles.text3}>Xóa</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.cnotainer}>
            <Swipeable renderRightActions={RightSwipe}>
                <TouchableOpacity onPress={() => {navigation.navigate('DetailTeam')}}>
                    <View style={styles.borderView}>
                        <Image style={{ margin: 10 }} source={img} />
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.text1}>{name}</Text>
                            <Text style={styles.text2}>{congno}</Text>
                            <Text style={styles.text2}>{damua}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        </View>
    );
};

const styles = StyleSheet.create({
    cnotainer: {
        justifyContent: "center",
        width: '90%',
        height: 100,
        marginTop: 15
    },
    borderView: {
        width: '100%',
        alignItems: "center",
        flexDirection: "row",
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10
    },
    text1: {
        color: 'black',
        fontSize: 18,
        marginLeft: 20,
        fontWeight: "500"
    },
    text2: {
        color: 'black',
        fontSize: 16,
        marginLeft: 20,
        opacity: 0.5,
        fontWeight: "500"
    },
    OptionBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: '100%',
        flexDirection: "row"
    },
    sua: {
        flexDirection: "column",
        margin: 5
    },
    xoa: {
        flexDirection: "column",
        margin: 5
    },
    text3: {
        fontSize: 15,
        fontWeight: "500",
        color: 'black'
    },
});

export default BorderTeam;
import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

const { width: WidthScreen } = Dimensions.get('window');

const Revenue = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.borderView}>
                    <Text style={styles.text1}>0đ</Text>
                    <Text style={styles.texttitle}>Doanh thu phòng ban</Text>
                </View>
                <View style={styles.borderView}>
                    <Text style={styles.text2}>0đ</Text>
                    <Text style={styles.texttitle}>Doanh số cá nhân</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.borderView}>
                    <Text style={styles.text3}>0đ</Text>
                    <Text style={styles.texttitle}>Hoa hồng phòng ban</Text>
                </View>
                <View style={styles.borderView}>
                    <Text style={styles.text4}>0đ</Text>
                    <Text style={styles.texttitle}>Hoa hồng huấn luyện</Text>
                </View>
            </View>
        </View>



    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: '100%',
        height: '100%',
        alignItems: "center",
    },
    borderView: {
        width: '40%',
        flexDirection: "column",
        height: '90%',
        margin: 20,
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    text1: {
        color: '#5EC7C1',
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: "500"
    },
    text2: {
        color: '#D7232D',
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: "500"
    },
    text3: {
        color: '#098825',
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: "500"
    },
    text4: {
        color: '#1151F5',
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: "500"
    },
    texttitle: {
        color: '#505050',
        fontSize: 14,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: "500"
    },
});

export default Revenue;

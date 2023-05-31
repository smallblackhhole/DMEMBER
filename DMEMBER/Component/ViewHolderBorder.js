import React from 'react-native';
import { View, StyleSheet, Image, Text ,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const BorderViewHolder = ({icon, name, icon2 , navi}) => {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity style={styles.ListWalletBord} onPress={() => {navigation.navigate(navi)}}>
            <View style={styles.flexList1}>
                <View style={styles.borderListWal}>
                    <Image style={styles.ImgList} source={icon} />
                </View>
            </View>
            <View style={styles.flexList2}>
                <Text style={styles.textList}>{name}</Text>
            </View>
            <View style={styles.flexList3}>
                <Image source={icon2} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    ListWalletBord: {
        width: '90%',
        height: '20%',
        backgroundColor: 'white',
        flexDirection: "row",
        borderRadius: 10,
        margin: 10,
    },
    borderListWal: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(17, 81, 245, 0.1)',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 15,
    },
    ImgList: {
        width: 45,
        height: 45
    },
    textList: {
        fontSize: 18,
        fontWeight: "500",
        color: 'black'
    },
    textList1: {
        fontSize: 18,
        fontWeight: "600",
        color: '#F55B00'
    },
    textList2: {
        fontSize: 18,
        fontWeight: "600",
        color: '#1D83D4'
    },
    textList3: {
        fontSize: 18,
        fontWeight: "600",
        color: '#19A538'
    },
    flexList1: {
        flex: 2
    },
    flexList2: {
        flex: 7,
        flexDirection: "column",
        justifyContent: "center"
    },
    flexList3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
export default BorderViewHolder;
import React from "react";
import { View, StyleSheet, Dimensions, Text , TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonBack from "../Component/ButtonBack";
import BorderViewWallet from "../Component/BorderView";
import BorderViewHolder from "../Component/ViewHolderBorder";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const WalletDcash = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <ButtonBack 
                icon={require('../Assets/Back.png')}
                title={"Ví Dcash"}/>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '70%' }}>
                    <Text style={styles.title}>Ví Dcash</Text>
                </View>
            </View>
            <View style={styles.ViewBanner}>
                <BorderViewWallet />
            </View>
            <View style={styles.ViewtextTitle2}>
                <Text style={styles.TextTitle2}>Chức năng ví</Text>
            </View>
            <View style={styles.ViewFull}>
                <BorderViewHolder
                    icon={require('../Assets/Dcash1.png')}
                    name={'Nạp tiền vào ví'}
                    icon2={require('../Assets/Vector.png')}
                    
                />
                <BorderViewHolder
                    icon={require('../Assets/Dcash2.png')}
                    name={'Rút tiền'}
                    icon2={require('../Assets/Vector.png')}
                    navi={'WithdrawDcash'}
                />
                <BorderViewHolder
                    icon={require('../Assets/Dcash3.png')}
                    name={'Chuyển tiền'}
                    icon2={require('../Assets/Vector.png')}
                    navi={'DcashTransfer1'}
                />
                <BorderViewHolder
                    icon={require('../Assets/Dcash4.png')}
                    name={'Lịch sử giao dịch'}
                    icon2={require('../Assets/Vector.png')}
                    navi={'Lichsu_ruttien'}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffbb00'
    },
    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        flexDirection: "row",
    },
    title: {
        color: 'black',
        fontSize: 22,
        fontWeight: "500",
    },
    ViewBanner: {
        width: WidthScreen,
        height: HeightScreen * 0.25,
        justifyContent: "center",
        alignItems: "center"
    },
    ViewtextTitle2: {
        marginTop: 10,
        width: WidthScreen,
        height: HeightScreen * 0.05,
        justifyContent: "center",
    },
    TextTitle2: {
        color: 'black',
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 20
    },
    ViewFull: {
        width: WidthScreen,
        height: HeightScreen * 0.35,
        alignItems : "center",
    }
});
export default WalletDcash;
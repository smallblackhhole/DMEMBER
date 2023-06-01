import React from "react";
import { Text, View, Image, useWindowDimensions, StyleSheet ,ScrollView } from "react-native";
import ButtonBack from "../Component/ButtonBack";
import LogoAccount from "../Component/LogoAccount";

const InfomationScreen = () => {
    const WidthScreen = useWindowDimensions().width

    return (
        <View style={styles.container}>
            <View><ButtonBack 
            icon={require('../Assets/Back.png')}
            title={""}/></View>
            <View style={styles.viewLogoAccount}>
                <LogoAccount
                img={require('../Assets/ImageAccount.png')} />
                <View style={styles.changedImage}>
                    <Image source={require('../Assets/ei_camera.png')} />
                </View>
                <Text style={styles.textName}>LÊ HUỲNH BÁ TOÀN</Text>
            </View>
            <View>
                <Image style={{ width: WidthScreen, height: WidthScreen * 0.284 }}
                    source={require('../Assets/FontInfomationScreen.png')} />
            </View>
            <View style={styles.viewcontainerInffo}>
                <ScrollView style={styles.viewInfo} showsVerticalScrollIndicator={false}>
                <View style={styles.borderInfomation}>
                    <Text style={styles.textInfo}>Mã thành viên</Text>
                    <Text style={styles.textInfo}>121</Text>
                </View>
                <View style={styles.borderInfomation}>
                    <Text style={styles.textInfo}>Email</Text>
                    <Text style={styles.textInfo}>vinazapo@gmail.com</Text>
                </View>
                <View style={styles.borderInfomation}>
                    <Text style={styles.textInfo}>Điện thoại</Text>
                    <Text style={styles.textInfo}>0908314344</Text>
                </View>
                <View style={styles.borderInfomation}>
                    <Text style={styles.textInfo}>Ngày sinh</Text>
                    <Text style={styles.textInfo}>11/06/1975</Text>
                </View>
                <View style={styles.borderInfomation}>
                    <Text style={styles.textInfo}>Giới tính</Text>
                    <Text style={styles.textInfo}>Nam</Text>
                </View>
                <View style={styles.borderInfomation}>
                    <Text style={styles.textInfo}>CMND</Text>
                    <Text style={styles.textInfo}>123456789</Text>
                </View>
                <View style={styles.borderInfomation}>
                    <Text style={styles.textInfo}>Website</Text>
                    <Text style={styles.textInfo}>123</Text>
                </View>
                <View style={styles.viewcompany}>
                    <Text style={styles.companyInfo}>Thông tin công ty</Text>
                    <Image style={{marginTop : 10 , marginLeft : 10}} source={require('../Assets/Vector.png')}/>
                    <Image style={{marginTop : 10 , marginLeft : 5}} source={require('../Assets/Vector.png')}/>
                </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBAE35',
        flexDirection: "column"
    },
    viewLogoAccount: {
        alignItems: "center",
    },
    changedImage: {
        position: "absolute",
        backgroundColor: '#16C7BD',
        width: 35,
        height: 35,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        top: 30,
        left: 235
    },
    textName: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 18,
        bottom: 20
    },
    viewcontainerInffo : {
        flex : 1 ,
        alignItems : "center" ,
        backgroundColor : 'white'
    },
    viewInfo: {
        flex: 1,
        width : '90%',
        marginBottom : 20
    },
    borderInfomation: {
        borderWidth: 1,
        borderEndWidth: 0,
        borderStartWidth: 0,
        borderTopWidth: 0,
        borderBottomColor: 'black',
        justifyContent: "space-between",
        marginHorizontal: 0,
        opacity: 0.8,
        flexDirection: "row",
        width: '100%',
        padding: 10,
        marginBottom: 15
    },
    textInfo: {
        color: 'black',
        fontSize: 16,
        fontWeight: "500",
        marginBottom : 10
    },
    viewcompany : {
        flexDirection : "row",
        justifyContent : "center"
    },
    companyInfo : {
        color : 'black',
        fontSize : 18,
        fontWeight : "500"
    }
});

export default InfomationScreen;
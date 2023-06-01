import React, { Text } from 'react-native';
import { View, StyleSheet, Dimensions, Image, ScrollView ,} from 'react-native';
import ButtonBack from '../Component/ButtonBack';
import Line from '../Component/Line';

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const CreateAccount = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <ButtonBack 
                icon={require('../Assets/Back.png')}
                title={"Tạo thành viên"}/>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '70%' }}>
                    <Text style={styles.title}>Tạo thành viên</Text>
                </View>
                <Text style={{ top: 30, fontSize: 13, fontWeight: "400", color: 'black' }}>Lưu</Text>
            </View>
            <View style={styles.viewLogoAccount}>
                <View style={styles.viewContainer}>
                    <View style={styles.viewradius}></View>
                    <View style={styles.imagelogo}></View>
                </View>
                <View style={styles.changedImage}>
                    <Image source={require('../Assets/ei_camera.png')} />
                </View>
                <Text style={styles.textName}>NGUYỄN VĂN C</Text>
            </View>
            <View>
                <Image style={{ width: WidthScreen, height: WidthScreen * 0.284 }}
                    source={require('../Assets/FontInfomationScreen.png')} />
            </View>
            <View style={styles.viewcontainerInffo}>
                <ScrollView style={styles.viewInfo} showsVerticalScrollIndicator={false}>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.textInfo}>Mã thành viên</Text>
                        <Text style={styles.textInfo2}>183984455</Text>
                    </View>
                    <Line />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.textInfo}>Email</Text>
                        <Text style={styles.textInfo2}>vinazapo@gmail.com</Text>
                    </View>
                    <Line />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.textInfo}>Điện thoại</Text>
                        <Text style={styles.textInfo2}>0908314344</Text>
                    </View>
                    <Line />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.textInfo}>Ngày sinh</Text>
                        <Text style={styles.textInfo2}>11/06/1975</Text>
                    </View>
                    <Line />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.textInfo}>Giới tính</Text>
                        <Text style={styles.textInfo2}>Nam</Text>
                    </View>
                    <Line />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.textInfo}>CMND</Text>
                        <Text style={styles.textInfo2}>183984455</Text>
                    </View>
                    <Line />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.textInfo}>Website</Text>
                        <Text style={styles.textInfo2}>vinagroup.com</Text>
                    </View>
                    <Line />
                </ScrollView>
                <View style={styles.viewcompany}>
                    <View style={styles.DeleteAccount}>
                        <Image style={{ width: 20, height: 20 }} source={require('../Assets/bin.png')} />
                        <Text style={styles.TextDelete}>Yêu cầu xóa tài khoản</Text>
                    </View>
                </View>
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
        top: 55,
        left: 240
    },
    textName: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 18,
    },
    viewcontainerInffo: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white'
    },
    viewInfo: {
        flex: 1,
        width: '90%',
        marginBottom: 20
    },

    textInfo: {
        color: 'black',
        fontSize: 16,
        fontWeight: "400",
        marginBottom: 5
    },
    textInfo2: {
        color: 'black',
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10
    },
    viewcompany: {
        flexDirection: "row",
        width: '100%',
        height: HeightScreen * 0.1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    companyInfo: {
        color: 'black',
        fontSize: 18,
        fontWeight: "500"
    },
    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 22,
        fontWeight: "500",
    },
    viewContainer: {
        alignItems: "center",
    },
    viewradius: {
        position: "relative",
        alignItems: "center",
        bottom: 10,
        width: 110,
        height: 110,
        backgroundColor: 'white',
        borderRadius: 55
    },
    imagelogo: {
        width: 100,
        height: 100,
        borderRadius: 55,
        bottom: 15,
        position: "absolute",
        backgroundColor: '#C4C4C4'
    },
    DeleteAccount: {
        width: '80%',
        height: '60%',
        backgroundColor: 'white',
        borderRadius: 12,
        borderColor: 'red',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextDelete : {
        color : '#EE2525',
        fontWeight : "600",
        fontSize : 15,
        paddingLeft : 10
    }
});



export default CreateAccount;
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Touchable, TouchableOpacity, Dimensions } from "react-native";
import BorderViewWallet from "../Component/BorderView";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const withdrawDcash = () => {

    return (
        <View style={style.container}>
            <Image style={{ left: '5%', top: '2%', }} source={require('../image/back.png')} />
            <Image style={{ left: '90%', position: 'absolute', top: '3%' }} source={require('../image/Group.png')} />

            <Text style={{ fontSize: 20, fontWeight: 'bold', left: '40%', position: 'absolute', top: '2%' }}>Rút Dcash</Text>
            <View>
                <Text style={style.text}>Bạn cần rút bao nhiêu?</Text>

                <View style={{ paddingTop: '5%' }}>
                    <View style={style.homebuy}>
                        <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>50,000</Text>
                    </View>
                    <View style={style.tien}>
                        <View style={style.homee}>
                           
                                <Text style={{ fontSize: 20, fontWeight: '400', color: 'black', }}>500.000</Text>
                       
                        </View>
                        <View style={style.homeee}>
                            
                                <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>50.000</Text>
                           
                        </View>
                        <View style={style.homeeee}>
                          
                                <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>5.000</Text>
                          
                        </View>
                    </View>
                    <View style={style.ViewBanner}>
                        <BorderViewWallet />
                    </View>
                    <TouchableOpacity style={style.loginn}>
                        <Text style={{ color: 'white' }}>Rút tiền </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};
export default withdrawDcash;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    backk: {
        left: '5%',
    },
    retangle: {
        backgroundColor: 'white',
        borderRadius: 5,
        top: '30%',
    },
    loginn: {
        top: '320%',
        width: '50%',
        height: '30%',
        left: '30%',
        color: 'white',
        position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center',
    },
    homee: {
        backgroundColor: '#FFCC66',
        borderRadius: 5,
        width: WidthScreen * 0.25,
        height: HeightScreen * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    homeee: {
        left:'33%',
        backgroundColor: '#FFCC66',
        borderRadius: 5,
        width: WidthScreen * 0.25,
        height: HeightScreen * 0.05,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeeee: {
        backgroundColor: '#FFCC66',
        borderRadius: 5,
        width: WidthScreen * 0.25,
        height: HeightScreen * 0.05,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left:'65%'
    },
    homebuy: {
        backgroundColor: 'white',
        top: '160%',
        left: '5%',
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.09,
        position: 'absolute',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewBanner: {
        width: WidthScreen,
        height: HeightScreen * 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        width: WidthScreen,
        height: HeightScreen * 0.03,
        left: '5%',
        fontSize: 16,
        top: '120%',
        justifyContent: 'space-evenly',
        position: 'absolute',
    },
    tien: {
        width:WidthScreen,
        height:HeightScreen*0.06,
        justifyContent:'center',
        top:'215%',
        left:'5%',
        position:'absolute',
    }
});
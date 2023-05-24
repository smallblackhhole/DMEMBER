import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Touchable, TouchableOpacity } from "react-native";

const Walletdcredit = () => {

    return (
        <View style={style.container}>
            <Image style={{ left: '5%', top: '2%' }} source={require('../image/back.png')} />
            <Image style={{ left: '90%',position:'absolute',top:'3%' }} source={require('../image/Group.png')} />

            <Text style={{ fontSize: 20, fontWeight: 'bold', left: '30%', position: 'absolute', top: '2%' }}>Thanh toán Dcredit</Text>
            <View>
                <Text style={{ fontSize: 16,  left: '5%', position: 'absolute', top: '10%' ,color:'black'}}>Ví thanh toán</Text>
                <Text style={{ fontSize: 16, left: '5%', position: 'absolute', top: '40%' ,color:'black'}}>Số tiền thanh toán</Text>
                <Text style={{ fontSize: 16, left: '5%', position: 'absolute', top: '70%' ,color:'black'}}>Lời nhắn</Text>

                <View style={{ paddingTop: '5%', padding: '5%', }}>
                    <View style={style.homee}>  
                        <View>
                            <Text style={{ left: '10%',top:'45%', fontSize:20,fontWeight:'400',color:'black' }}>Dcash</Text>
                            <Text style={{ left: '70%', fontSize:20,fontWeight:'400',color:'#8ABF3D' }}>434.000</Text>

                        </View>
                    </View>
                    <View style={style.homebuy}>
                            <Text style={{ left: '10%',top:'30  %', fontSize:20,fontWeight:'400',color:'black'}}>300,000</Text>
                    </View>
                    <View style={{position:'absolute',top:'200%',left:'6%'}}>
                      <Image source={require('../image/note.png')}/>
                    </View>
                    <TouchableOpacity style={style.loginn}>
                    <Text style={{ color: 'white' }}>Thanh toán ngay</Text>
                </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};
export default Walletdcredit;
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
        top: '280%',
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
        backgroundColor: 'white',
        borderRadius: 7,
        width: '100%',
        top: '45%',
        height: '45%',
        position: 'absolute',
        left: '5%'
    },
    homebuy: {
        backgroundColor: 'white',
        top: '110%',
        width: '100%',
        height: '45%',
        borderRadius: 10,
    },
});
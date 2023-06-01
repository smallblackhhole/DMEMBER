import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Touchable, TouchableOpacity } from "react-native";

const Address = () => {

    return (
        <View style={style.container}>
            <Image style={{ left: '5%', top: '2%' }} source={require('../image/back.png')} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', left: '30%', position: 'absolute', top: '2%' }}>Danh sách địa chỉ</Text>
            <View>
                <View style={{ height: '200%', width: '100%', position: 'absolute' }}>
                    <TouchableOpacity style={style.loginnn}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Văn phòng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.loginn}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Showroom</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingTop: '5%', padding: '5%', }}>
                    <View style={style.homee}>
                        <Image style={style.reangle62} source={require('../Assets/paycomfirmHomelogo.png')} />
                        <View style={{ position: 'absolute', }}>

                            <Text style={{ left: '30%', top: '20%', fontWeight: 'bold', position: 'relative', color: 'black' }} >HN</Text>
                            <Text style={{ left: '45%', top: '20%', fontWeight: 'bold', position: 'absolute', color: 'black' }}>0909078111</Text>
                            <Text style={{ left: '30%', top: '20%' }}>
                                {'1196 đường 3/2, Phường 8, Quận 11,Thành\nphố Hồ Chí Minh'}</Text>
                        </View>
                    </View>
                    <View style={style.homebuy}>
                        <Image style={style.reangle62} source={require('../Assets/paycomfirmHomelogo.png')} />
                        <View style={{ position: 'absolute', }}>
                            <Text style={{ left: '30%', top: '20%', fontWeight: 'bold', position: 'relative', color: 'black' }} >Thùy Linh</Text>
                            <Text style={{ left: '60%', top: '20%', fontWeight: 'bold', position: 'absolute', color: 'black' }}>0909078111</Text>
                            <Text style={{ left: '30%', top: '20%' }}>
                                {'256 Bạch Đằng, Phường 24, Q.Bình Thạnh,\nThành phố Hồ Chí Minh'}</Text>
                        </View>
                    </View>
                    <View style={style.homebuyy}>
                        <Image style={style.reangle62} source={require('../Assets/paycomfirmHomelogo.png')} />
                        <View style={{ position: 'absolute', }}>
                            {/* <Image style={{ left: '66%', top: '25%', position: 'absolute' }} source={require('../image/Line40.png')} /> */}
                            <Text style={{ left: '30%', top: '20%', fontWeight: 'bold', position: 'relative', color: 'black' }} >Showroom 3/2</Text>
                            <Text style={{ left: '70%', top: '20%', fontWeight: 'bold', position: 'absolute', color: 'black' }}>0909078111</Text>
                            <Text style={{ left: '30%', top: '20%' }}>
                                {'1196 đường 3/2, Phường 8, Quận 11, Thành\nphố Hồ Chí Minh'}</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
};

export default Address;
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
        top: '7%',
        width: '50 %',
        height: '7%',
        left: '45%',
        color: 'white',
        position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center',
        zIndex: 999,
    },
    loginnn: {
        top: '7%',
        width: '50%',
        height: '7%',
        left: '5%',
        color: 'white',
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center',
    },
    homee: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
        top: '80%',
        height: '47%',
        position: 'absolute',
        left: '5%'
    },
    homebuy: {
        position: 'absolute',
        backgroundColor: 'white',
        top: '135%',
        width: '100%',
        height: '47%',
        borderRadius: 10,
        left: '5%'


    },
    homebuyy: {
        backgroundColor: 'white',
        top: '180%',
        width: '100%',
        height: '47%',
        borderRadius: 10,

    },


    reangle62: {
        width: '12%',
        height: '60%',
        left: '5%',
        top: '15%'


    },



});
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Touchable, TouchableOpacity } from "react-native";

const payment = () => {

    return (
        <SafeAreaView style={style.container}>
            <View>
                <Image style={{ left: '5%' }} source={require('../image/back.png')} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', left: '30%', position: 'absolute' }}>Thông tin đặt hàng</Text>
                <Image style={{ top: '25%', left: '92%' }} source={require('../image/Vector2.png')} />
                <View style={{ paddingTop: '5%', padding: '5%', }}>
                    <View style={{ position: 'absolute', left: '5%' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Địa chỉ nhận hàng </Text>
                        <View style={style.homee}>
                            <Image style={style.reangle62} source={require('../image/Rectangle62.png')} />
                            <View style={{ position: 'absolute' }}>
                                <Image style={{ left: '55%', top: '25%', position: 'absolute' }} source={require('../image/Line40.png')} />
                                <Text style={{ left: '30%', top: '20%', fontWeight: 'bold', position: 'relative' }} >Thùy Linh</Text>
                                <Text style={{ left: '60%', top: '20%', fontWeight: 'bold', position: 'absolute' }}>0909078111</Text>
                                <Text style={{ left: '30%', top: '20%' }}>
                                    {'256 Bạch Đằng, Phường 24, Q.Bình Thạnh,\nThành phố Hồ Chí Minh'}</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', top: '115%', }}>Hình Thức Thanh Toán </Text>
                        <View style={style.homebuy}>
                            <Image style={{ left: '5%', width: '6%', height: '35%', top: '30%', position: 'absolute' }} source={require('../image/Ellipse86.png')} />
                            <Text style={{ fontWeight: 'bold', left: '15%', top: '15%' }}>Thanh toán bằng ví Dcash</Text>
                            <Text style={{ left: '15%', top: '15%' }}>Số dư hiện tại: <Text style={{ color: 'blue' }}>434,403</Text></Text>
                        </View>
                        <View style={style.homebuyy}>
                            <Image style={{ left: '5%', width: '6%', height: '34%', top: '30%', position: 'absolute' }} source={require('../image/Ellipse85.png')} />
                            <Text style={{ fontWeight: 'bold', left: '15%', top: '15%' }}>Thanh toán bằng ví Dpoint</Text>
                            <Text style={{ left: '15%', top: '15%' }}>Số dư hiện tại: <Text style={{ color: 'blue' }}>43,403</Text></Text>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', top: '350%', position: 'absolute' }}>Sản phẩm chọn mua </Text>
                        <Image style={{ top: '360%', left: '220%', position: 'absolute' }} source={require('../image/Vector2.png')} />
                        <View style={style.homebuyyy}>
                            <Image style={{ left: '5%', width: '5%', height: '35%', top: '30%', position: 'absolute' }} source={require('../image/Rectangle53.png')} />
                            <Text style={{ fontWeight: 'bold', left: '15%', top: '5%' }}>
                                {'Dearanchy-Purifying Pure - Cleasing Water - Nước\ntẩy trang làm sạch, khỏe da'}</Text>
                            <Text style={{ left: '15%', top: '7%', }}>Giá bán: <Text style={{ color: '#BE7229' }}>412,500</Text></Text>
                            <Text style={{ left: '15%', top: '8%', }}>Chiết khấu: <Text style={{ color: '#0F47D7' }}>412,500</Text></Text>
                            <Text style={{ left: '70%', top: '70%', position: 'absolute' }}>số lượng: 1</Text>
                        </View>
                        <View style={style.homebuyyyy}>
                            <Image style={{ left: '5%', width: '5%', height: '35%', top: '30%', position: 'absolute' }} source={require('../image/Rectangle54.png')} />
                            <Text style={{ fontWeight: 'bold', left: '15%', top: '5%' }}>
                                {'Dearanchy-Purifying Oil to - Foarm Cleanser - Dầu\ntẩy trang làm sạch sâu.'}</Text>
                            <Text style={{ left: '15%', top: '7%', }}>Giá bán: <Text style={{ color: '#BE7229' }}>412,500</Text></Text>
                            <Text style={{ left: '15%', top: '8%', }}>Chiết khấu: <Text style={{ color: '#0F47D7' }}>412,500</Text></Text>
                            <Text style={{ left: '70%', top: '70%', position: 'absolute' }}>số lượng: 1</Text>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', top: '595%', position: 'absolute' }}>Ghi chú</Text>
                        <View >
                            <Image style={{ top: '625%', position: 'absolute', width: '225%', height: '80%', borderRadius: 10 }} source={require('../image/Rectangle233.png')} />
                        </View>
                        <View >
                            <Image style={{ top: '545%', width: '225%', height: '90%', borderRadius: 10 }} source={require('../image/Rectangle233.png')} />
                            <TextInput style={{ top: '550%', left: '5%', position: 'absolute' }} placeholder='...' placeholderTextColor='#000' />
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', top: '705%', position: 'absolute' }}>Thanh toán</Text>
                        <Image style={{ top: '730%', position: 'absolute', width: '230%', height: '150%' }} source={require('../image/Rectangle224.png')} />

                        
                        <Text style={{ fontSize: 16, fontWeight: 'bold', top: '760%', position: 'absolute', left: '10%' }}>Tổng cộng: </Text><Text style={{ color: '#BE7229',position:'absolute',top:'765%',left:'150%' }}>3,580,000</Text>
                        <Text style={{ fontSize: 16, top: '790%', position: 'absolute', left: '10%' }}>Chiết khấu:</Text><Text style={{ color: '#0F47D7',position:'absolute',top:'795%',left:'150%' }}>790,000</Text>
                        <Text style={{ fontSize: 16, top: '820%', position: 'absolute', left: '10%' }}>Hoa hồng:</Text><Text style={{ color: '#8ABF3D',position:'absolute',top:'825%',left:'150%' }}>79,000</Text>

                    </View>
                </View>
                <TouchableOpacity style={style.loginn}>
                    <Text style={{ color: 'white' }}>Đặt hàng</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
};

export default payment;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    backk: {
        left: '5%',
    },
    name: {
        top: '20%',
        fontSize: 16,
    },
    retangle: {
        backgroundColor: 'white',
        borderRadius: 5,
        top: '30%',
    },
    textt: {
        left: '5%',
        top: '5%'

    },
    loginn: {
        width: '30%',
        height: '50%',
        left: '35%',
        color: 'white',
        position: 'absolute',
        backgroundColor: 'black',
        top: '900%',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center',
    },
    homee: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 10,
        top: '40%',
        height: '100%',
        width: '225%',
    },
    homebuy: {
        backgroundColor: 'white',
        top: '120%',
        width: '225%',
        height: '80%',
        borderRadius: 10,

    },
    homebuyy: {
        position: 'absolute',
        backgroundColor: 'white',
        top: '270%',
        width: '225%',
        height: '80%',
        borderRadius: 10,
    },
    homebuyyy: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 10,
        top: '380%',
        height: '100%',
        width: '225%',
    },
    homebuyyyy: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 10,
        top: '495%',
        height: '100%',
        width: '225%',

    },
    reangle62: {
        width: '12%',
        height: '60%',
        left: '5%',
        top: '15%'


    },



});
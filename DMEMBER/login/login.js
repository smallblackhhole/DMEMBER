import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import ButtonBack from "../Component/ButtonBack";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        // Kiểm tra tài khoản và mật khẩu
        if (username === ('1') && password === ('1')) {
            // Đăng nhập thành công, điều hướng sang màn hình HomeScreen
            navigation.navigate('AccountScreen', { data: { isLogin: true, username: '1' } });
        } else if ((username === ('2') && password === ('2'))) {
            navigation.navigate('AccountScreen', { data: { isLogin: true, username: '2' } });
        } else {
            // Hiển thị thông báo lỗi
            alert('Tài khoản hoặc mật khẩu không chính xác.');
        }
    };

    return (
        <View style={style.container}>
            <View style={style.headerbar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={""} />
            </View>
             <View style={{ justifyContent: 'center' ,  flex: 1, }}>
                <Text style={{ fontSize: 37, fontWeight: 'bold', color: '#000000', marginLeft: 20 }}>Xin chào!</Text>
                <View style={{ width: '100%',flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                    <View style={{ flexDirection: 'column', flex: 1}}>
                        <View style={{ backgroundColor: 'white', width: WidthScreen * 0.7, height: HeightScreen * 0.08, borderRadius: 10, alignItems: 'center', flexDirection: 'row', paddingLeft: 15 }}>
                            <Image style={{ width: WidthScreen * 0.06, height: HeightScreen * 0.03, }} resizeMode="contain" source={require('../image/phone.png')} />
                            <Image style={{ marginLeft: 17 }} source={require('../image/gach.png')} />
                            <TextInput style={{ color: "#000000", marginLeft: 5 }} placeholder='Số điện thoại' placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                value={username}
                                onChangeText={text => setUsername(text)} />
                        </View>
                        <View style={{ backgroundColor: 'white', marginTop: 18, width: WidthScreen * 0.7, height: HeightScreen * 0.08, borderRadius: 10, alignItems: 'center', flexDirection: 'row', paddingLeft: 15 }}>
                            <Image style={{ width: WidthScreen * 0.06, height: HeightScreen * 0.03, }} resizeMode="contain" source={require('../image/Lock.png')} />
                            <TextInput style={{ marginLeft: 17, color: "#000000" }} placeholder='Mật khẩu' placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                value={password}
                                onChangeText={text => setPassword(text)} />
                        </View>
                    </View>
                    <Image style={{ width: 120, height: 240, marginTop:  -50}} resizeMode="contain" source={require('../image/Frame.png')} />
                </View>


            <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                <TouchableOpacity style={style.loginn} onPress={handleLogin}>
                    <Text style={{ color: 'white',fontSize: 15, fontWeight: '600', }}>Đăng nhập</Text>
                </TouchableOpacity>
                <Image style={{ width: WidthScreen * 0.1, height: HeightScreen * 0.05, margin: 10 }} source={require('../image/vantay.png')} />
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Quenmatkhau') }}>
                <Text style={{ fontSize: 15, fontWeight: '500', color: 'black', marginLeft: 30, marginTop: 10 }}>Quên mật khẩu?</Text>
            </TouchableOpacity>
            </View>

            <View style={{ marginBottom: 60, alignItems: "center" }}>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                    <Text style={{ fontWeight: '400', color: 'black',fontSize: 17 }}>Tôi chưa có tài khoản? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                        <Text style={{ fontWeight: '500', color: 'black',fontSize: 17 }}>Đăng kí</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    );

};

export default Login;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    

    },
    headerbar: {
        height: HeightScreen * 0.07,
        justifyContent: 'center',
    },
    loginn: {
        width: WidthScreen * 0.4,
        height: HeightScreen * 0.07,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
}); 
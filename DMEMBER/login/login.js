import { StyleSheet, View, Text,  Image, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        // Kiểm tra tài khoản và mật khẩu
        if (username === ('') && password === ('')) {
          // Đăng nhập thành công, điều hướng sang màn hình HomeScreen
          navigation.navigate('MenuScreen');
        } else {
          // Hiển thị thông báo lỗi
          alert('Tài khoản hoặc mật khẩu không chính xác.');
        }
      };
    
    return (
        <View style={style.container}>
            <View style={{ width: WidthScreen, height: HeightScreen * 0.3, flexDirection: 'row', marginTop: 150, }}>
                <View>
                    <View>
                        <Image style={{ width: WidthScreen * 0.55, height: HeightScreen * 0.04, margin: 20 }} source={require('../image/xinchao.png')} />
                    </View>
                    <View style={{ left: 20, }}>
                        <View style={{ backgroundColor: 'white', width: WidthScreen * 0.7, height: HeightScreen * 0.08, borderRadius: 10, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
                                <View style={{ flex: 2 }}>
                                    <Image style={{ width: WidthScreen * 0.1, height: HeightScreen * 0.05, }} source={require('../image/phone.png')} />
                                </View>
                                <View style={{ flexDirection: 'row', flex: 8 }}>
                                    <Image style={{ marginTop: 12 }} source={require('../image/gach.png')} />
                                    <TextInput placeholder='0839020007' placeholderTextColor='#000'
                                     value={username}
                                     onChangeText={text => setUsername(text)} />
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white', width: WidthScreen * 0.7, height: HeightScreen * 0.08, borderRadius: 10, marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
                                <View style={{ flex: 2 }}>
                                    <Image style={{ width: WidthScreen * 0.1, height: HeightScreen * 0.05, }} source={require('../image/Lock.png')} />
                                </View>
                                <View style={{ flexDirection: 'row', flex: 8 }}>
                                    <TextInput placeholder='Mật khẩu' placeholderTextColor='#000' 
                                    secureTextEntry
                                    value={password}
                                    onChangeText={text => setPassword(text)}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Image style={{ width: WidthScreen * 0.3, height: HeightScreen * 0.3, zIndex: 999, }} source={require('../image/Frame.png')} />
                </View>
            </View>
            <View style={{ width: WidthScreen * 0.6 }}>
                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <View >
                        <TouchableOpacity style={style.loginn} onPress={handleLogin}>
                            <Text style={{ color: 'white' }}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image style={{ width: WidthScreen * 0.1, height: HeightScreen * 0.05, margin: 10 }} source={require('../image/vantay.png')} />

                    </View>
                </View>
                <View style={{ marginLeft: 20, }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Quenmatkhau') }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Quên mật khẩu?</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ marginTop: 250, alignItems: "center" }}>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                    <Text>Tôi chưa có tài khoản? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                        <Text style={{ fontWeight: '500', color: 'black' }}>Đăng kí</Text>
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
    loginn: {
        width: WidthScreen * 0.4,
        height: HeightScreen * 0.07,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },








}); 2
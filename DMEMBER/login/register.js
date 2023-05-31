import { Image, StyleSheet, Text, TextInput, View,  TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import React from 'react'
import styles from './style_register'
const Register = () => {
    const navigation = useNavigation();
    const handlePress = (username,password) => {
        // Xử lý logic khi nút được nhấn
        console.log("Nút Đăng kí đã được nhấn!");
        // if (!username || !password) {
        //     console.log("Vui lòng nhập tên người dùng và mật khẩu.");
        //     return;
        // }
    };
   
    return (
        <View style={styles.container}>
            <View style={styles.view_dk}>
                {/* //text đầu  */}
                <Text style={styles.text_ttdk}>Thông tin đăng kí</Text>
                {/* text input */}
                <View style={styles.input_dk}>
                    <Image source={require('../image/Person.png')} style={styles.img_icon} />
                    <TextInput color='#000000' placeholder='Họ và tên' autoCapitalize="characters" placeholderTextColor='color: rgba(0, 0, 0, 0.5);'></TextInput>
                </View>

                <View style={styles.input_dk2}>
                    <Image source={require('../image/Mail.png')} style={styles.img_icon2} />
                    <TextInput color='#000000' placeholder='Email' placeholderTextColor='color: rgba(0, 0, 0, 0.5);'></TextInput>
                </View>

                <View style={styles.input_dk3}>
                    <Image source={require('../image/Groupphone.png')} style={styles.img_icon3} />
                    <TextInput color='#000000' placeholder='Số điện thoại' placeholderTextColor='color: rgba(0, 0, 0, 0.5);'></TextInput>
                </View>

                <View style={styles.input_dk4}>
                    <Image source={require('../image/Lock.png')} style={styles.img_icon4} />
                    <TextInput color='#000000' placeholder='Mật khẩu' placeholderTextColor='color: rgba(0, 0, 0, 0.5);'></TextInput>
                </View>

                <View style={styles.input_dk5}>
                    <Image source={require('../image/Lock.png')} style={styles.img_icon5} />
                    <TextInput color='#000000' placeholder='Xác nhận mật khẩu' placeholderTextColor='color: rgba(0, 0, 0, 0.5);'></TextInput>
                </View>

                <View style={styles.input_dk6}>
                    <Image source={require('../image/la_user-friends.png')} style={styles.img_icon6} />
                    <TextInput color='#000000' placeholder='Mã giới thiệu' placeholderTextColor='color: rgba(0, 0, 0, 0.5);'></TextInput>
                </View>
                {/* button đăng kí */}
                <TouchableOpacity style={styles.button_dk} onPress={handlePress}>
                    <Text style={styles.buttonText}>Đăng kí</Text>
                </TouchableOpacity>
                {/* Tôi đã có tài khoản? Đăng Nhập */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                    <Text style={{ color: '#000000' }}>Tôi đã có tài khoản? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>

                    <Text style={{ fontWeight: '600', color: '#000000' }}>Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Register


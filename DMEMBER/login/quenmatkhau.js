import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native'
import Modal from 'react-native-modal';
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');



const Quenmatkhau = ({  onConfirm }) => {
    const [password, setPassword] = useState('');


    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleConfirm = () => {
        onConfirm(password);
        setPassword('123');
    };
    const handlePress = () => {
        // Xử lý logic khi nút được nhấn
        console.log("Nút Đăng kí đã được nhấn!");
    };
    return (
        <View style={styles.container}>
            <View style={styles.view_qkm}>
                {/* text */}
                <Text style={styles.text_llmk}>Lấy lại mật khẩu</Text>
                {/* text 2 */}
                <Text style={{ color: '#000000', fontSize: 20, marginTop: '30%', width: '100%' }}>
                    Vui lòng nhập{' '}
                    <Text style={{ fontWeight: '600' }}>email</Text>{' '}
                    <Text style={{ fontWeight: '600' }}>hoặc số điện thoại</Text>{' '}
                    để lấy lại mật khẩu
                </Text>
                {/* //input */}
                <View style={styles.input_qkm}>
                    <Image source={require('../image/Mail.png')} style={styles.img_icon} />
                    <TextInput
                        color='#000000'
                        placeholder='Email'
                        placeholderTextColor='rgba(0, 0, 0, 0.5)'
                        style={{ flex: 1 }}
                    />
                    <TouchableOpacity style={styles.ItemOption} onPress={toggleModal}>
                        <View style={styles.borderOption}>
                            <Image source={require('../image/Arrow2.png')} style={styles.img_icon2} />
                        </View>
                        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <View style={styles.modalContentt}>
                                        <Text style={{ fontSize: 16, color: 'black' }}>Vui lòng xác nhận mật khẩu</Text>
                                    </View>
                                    <View>
                                        <TextInput
                                            secureTextEntry
                                            value={password}
                                            onChangeText={setPassword}
                                            style={styles.input}
                                        />
                                    </View>

                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity onPress={toggleModal} style={styles.loginn}>
                                            <Text style={{ color: 'black' }}>Hủy</Text>
                                        </TouchableOpacity >
                                        <TouchableOpacity onPress={handleConfirm} style={styles.login}>
                                            <Text style={{ color: 'white' }}>
                                                Xác nhận
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.button_back}
                    onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.buttonText}>Trở về trang đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Quenmatkhau

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    view_qkm: {
        flex: 1,
        width: '88%',
        height: '100%',
        marginLeft: '6%',
        alignItems: 'center',
        //backgroundColor:'pink'
    },
    text_llmk: {
        color: '#000000',
        fontSize: 21,
        fontWeight: '600',
        width: '50%',
        height: '4%',
        position: 'absolute',
        marginTop: '15%',
        fontStyle: 'normal',
    },
    // ICON input
    img_icon: {
        width: 23,
        height: 17,
        marginLeft: 20,
        marginRight: 20,
    },
    img_icon2: {
        width: 30,
        height: 17,
        marginRight: '5%',
    },
    //input
    input_qkm: {
        width: '100%',
        height: 62,
        backgroundColor: '#FFFFFF',
        marginTop: '5%',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        color: '#000000',
    },
    //button 
    button_back: {
        width: '60%',
        height: 56,
        backgroundColor: '#000000',
        marginTop: '15%',
        borderRadius: 50,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '600',
    },
    title: {
        fontSize: 180,
        fontWeight: 'bold',
        color: 'black',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        elevation: 5,
        width: WidthScreen * 0.8,
        height: HeightScreen * 0.25,
        alignItems: 'center'
    },

    modalContentt: {

        padding: 10,

    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 30,
        width: WidthScreen * 0.7,
        height: HeightScreen * 0.06,
        margin: 10
    },
    buttonContainer: {
        width: WidthScreen * 0.6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    loginn: {
        width: WidthScreen * 0.2,
        height: HeightScreen * 0.07,
        backgroundColor: '#C4C4C4',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    login: {
        width: WidthScreen * 0.3,
        height: HeightScreen * 0.07,
        backgroundColor: 'black',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

});
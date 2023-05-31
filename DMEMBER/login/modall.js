import React, { useState } from 'react';
import { View, Modal, TextInput, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');


const PasswordConfirmationModal = ({ visible, onClose, onConfirm }) => {
    const [password, setPassword] = useState('');

    const handleConfirm = () => {
        onConfirm(password);
        setPassword('123');
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
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
                        <TouchableOpacity onPress={onClose} style={styles.loginn}>
                            <Text style={{ color: 'black' }}>Hủy</Text>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={handleConfirm}   style={styles.login}>
                            <Text style={{ color: 'white' }}>
                                Xác nhận
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
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
        width:WidthScreen*0.6,
        flexDirection: 'row',
        justifyContent:'space-between'
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

export default PasswordConfirmationModal;

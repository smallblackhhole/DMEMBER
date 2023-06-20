import React, { useState } from "react";
import { TouchableOpacity, View, Image, StyleSheet, Text, Dimensions } from "react-native";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import Modal from 'react-native-modal';
const { height: HeightScreen, width: WidthScreen } = Dimensions.get('window');

const LogoAccount = ({ img, isLoggedIn }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleCameraPress = () => {
        setModalVisible(true);
    };

    const handleOptionPress = (option) => {
        setModalVisible(false);
        const options = {
            title: "Select Image",
            storageOptions: {
                skipBackup: true,
                path: "images",
            },
        };

        if (option === "camera") {
            launchCamera(options, handleImagePickerResponse);
        } else {
            launchImageLibrary(options, handleImagePickerResponse);
        }
    };

    const handleImagePickerResponse = (response) => {
        if (response.didCancel) {
            console.log("User cancelled image picker");
        } else if (response.error) {
            console.log("ImagePicker Error: ", response.error);
        } else if (response.customButton) {
            console.log("User tapped custom button: ", response.customButton);
        } else {
            // Image selected successfully, update selectedImage state
            setSelectedImage(response.assets[0].uri);
        }
    };

    if (isLoggedIn) {
        return (
            <View style={styles.viewContainer}>
                <View style={styles.viewradius}>
                    <Image style={styles.imagelogo} source={selectedImage ? { uri: selectedImage } : img} />
                    <TouchableOpacity style={styles.changedImage} onPress={handleCameraPress}>
                        <Image source={require("../Assets/ei_camera.png")} />
                    </TouchableOpacity>
                </View>
                <Modal
                    isVisible={isModalVisible}
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    backdropOpacity={0.5}
                    backdropColor="#000"
                    avoidKeyboard={true}
                    style={styles.modalContainer}
                    onBackdropPress={() => setModalVisible(false)}
                >
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.modalOption} onPress={() => handleOptionPress("camera")}>
                            <Text style={styles.modalOptionText}>Take Picture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalOption} onPress={() => handleOptionPress("library")}>
                            <Text style={styles.modalOptionText}>Choose from Library</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalCancel} onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalCancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    } else {
        return (
            <View style={styles.viewContainer}>
                <View style={styles.viewradius}>
                    <Image style={styles.imagelogo} source={img} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    viewContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    viewradius: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        bottom: 40,
        width: 110,
        height: 110,
        backgroundColor: "white",
        borderRadius: 55,
    },
    imagelogo: {
        width: 100,
        height: 100,
        position: "absolute",
        borderRadius: 50,
    },
    changedImage: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#16C7BD",
        width: 35,
        height: 35,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    modalContainer: {
        width : WidthScreen,
        margin: 0,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    modalContent: {
        width: "100%",
        height: HeightScreen * 0.25,
        justifyContent : "center",
        backgroundColor: "#fff",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    modalOption: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        width : '100%',
        alignItems : "center",
        borderBottomColor: "#ccc",
    },
    modalOptionText: {
        fontSize: 22,
        color: "black",
    },
    modalCancel: {
        paddingVertical: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    modalCancelText: {
        fontSize: 22,
        color: "black",
        textAlign: "center",
    },
});

export default LogoAccount;

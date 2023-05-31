import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Memberslist from '../Component/Memberslist';
import Avatar from '../Component/Avata';
import ButtonBack from '../Component/ButtonBack';

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const DcashTransfer_1 = () => {
    const navigation = useNavigation();
    const [selectedMembers, setSelectedMembers] = useState([]);
    const shouldShowBorder = selectedMembers.length > 2;

    const handleMemberSelection = (member) => {
        const isSelected = selectedMembers.some((item) => item.member === member.member);
        if (isSelected) {
            setSelectedMembers(selectedMembers.filter((item) => item.member !== member.member));
        } else {
            setSelectedMembers([...selectedMembers, member]);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Chuyển Dcash"}
                />
            </View>
            <View style={styles.members}>
                <Memberslist
                    selectedMembers={selectedMembers}
                    handleMemberSelection={handleMemberSelection}
                />
            </View>

            <View style={styles.bottomBar}>
                <View style={styles.avatarsContainer}>
                    {selectedMembers.slice(0, 2).map((member, index) => (
                        <Avatar key={index} img={member.img} name={member.member} />
                    ))}
                    {shouldShowBorder && (
                            <View style={styles.bordSelected}>
                                <Text>+{selectedMembers.length - 2}</Text>
                            </View>
                    )}
                </View>
                <View style={styles.continueButtonContainer}>
                    <TouchableOpacity
                        style={styles.continueButton}
                        onPress={() => {
                            navigation.navigate('DcashTransfer2', { selectedMembers });
                        }}
                    >
                        <Text style={{ color: 'white' }}>Tiếp tục</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default DcashTransfer_1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        flexDirection: "row",
    },

    members: {
        flex: 1,
        justifyContent: 'center'
    },
    bottomBar: {
        backgroundColor: 'white',
        width: WidthScreen,
        height: HeightScreen * 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarsContainer: {
        flexDirection: 'row',
        flex: 6.5,
        justifyContent: 'center',
    },
    continueButtonContainer: {
        flex: 3.5
    },
    continueButton: {
        width: WidthScreen * 0.3,
        height: HeightScreen * 0.07,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bordSelected: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#C4C4C4',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 5
    },

});

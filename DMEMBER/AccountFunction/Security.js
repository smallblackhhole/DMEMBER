import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, Switch , TextInput } from 'react-native'
import ButtonBack from '../Component/ButtonBack';

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Security = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Thiết lập bảo mật"} />
            </View>
            <View style={styles.FingerprintView}>
                <View style={styles.FingerprintBord}>
                    <View style={styles.flex1}>
                        <Text style={styles.text1}>Sử dụng vân tay</Text>
                    </View>
                    <View style={styles.flex2}>
                        <Switch
                            trackColor={{ false: 'black', true: '#00CC33' }}
                            thumbColor={isEnabled === 'white'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.changedPassView} >
                <View style={styles.changedPassBord}>
                    <View style={styles.passflex1}>
                        <Text style={styles.text2}>Đổi mật khẩu</Text>
                    </View>
                    <View style={styles.passflex2}>
                        <View style={styles.borderPass}>
                            <TextInput
                                placeholder="Mật khẩu cũ"
                                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                                style={styles.textinput}
                            />
                        </View>
                        <View style={styles.borderPass}>
                            <TextInput
                                placeholder="Mật khẩu mới"
                                 placeholderTextColor="rgba(0, 0, 0, 0.5)"
                                style={styles.textinput}
                            />
                        </View>
                    </View>
                    <View style={styles.passflex3}>
                        <View style={styles.btnchaged}>
                            <Text style={styles.text3}>Thay đổi</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBAE35'
    },
    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
       // backgroundColor:'red'
    },
    FingerprintView: {
        width: WidthScreen,
        height: HeightScreen * 0.09,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
       // backgroundColor:'red'
    },
    FingerprintBord: {
        flexDirection: "row",
        width: WidthScreen * 0.9,
        height: HeightScreen * 0.084,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',

    },
    flex1: {
          flex: 1,
        // marginLeft:20,
        justifyContent: "center",
        padding:20,
        //backgroundColor: 'red'
    },
    flex2: {
        flex: 1,
        // marginLeft:143,
         justifyContent: "center",
         padding:20,
         //backgroundColor: 'pink'
    },
    text1: {
        color: 'black',
        fontSize: 17,
        fontWeight: "500"
    },
    changedPassView : {
        width : WidthScreen,
        marginTop : 10,
        height : HeightScreen*0.35,
        justifyContent : "center",
        alignItems : "center",
    },
    changedPassBord :{
        width : WidthScreen * 0.9,
        height : HeightScreen * 0.315,
        backgroundColor : 'white',
        borderRadius : 10,
        flexDirection : "column",
       // backgroundColor: 'red'
    },
    passflex1 : {
        flex : 2,
        justifyContent : "center",
    },
    passflex2 : {
        flex : 5,
        flexDirection :"column",
        alignItems : "center"
    },
    passflex3 : {
        flex : 2.5,
        flexDirection : "row",
        justifyContent : "flex-end"
    },
    text2 : {
        color : 'black',
        fontSize : 18,
        fontWeight : "500",
        marginLeft : 20
    },
    borderPass : {
        width : WidthScreen * 0.81,
        height : HeightScreen * 0.059,
        borderWidth : 1,
        marginTop : 10,
        borderColor : 'black',
        borderRadius : 50,
         // backgroundColor :'red',
    },
    textinput : {
        color : 'black',
        fontSize : 15,
        fontWeight :"400",
        opacity : 0.5,
        marginLeft : 10
    },
    btnchaged : {
        marginRight : 30,
        width : WidthScreen * 0.25  ,
        height : HeightScreen * 0.053,
        borderRadius : 10,
        backgroundColor :'#000000',
        justifyContent : "center",
        alignItems : "center",
    },
    text3 : {
        color : 'white',
        fontSize : 16,
        fontWeight : "400"
    }
});

export default Security;
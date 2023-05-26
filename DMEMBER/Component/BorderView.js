
import React from 'react-native';
import { View, StyleSheet, Image, Text } from 'react-native';
const BorderViewWallet = () => {
    return (
        <View style={styles.BorderView}>
            <View >
                <View style={{justifyContent : 'center' , alignItems : 'center'}}>
                    <Image style={styles.img} source={require('../Assets/BorderViewImg.png')} />
                <View style={{flexDirection : 'column' , alignItems : 'center' , position : 'absolute'}}>
                    <Image source={require('../Assets/tuitien.png')} />
                    <Text style={styles.textBorder}>434,403</Text>
                </View>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    BorderView: {
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        borderRadius: 10
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    textBorder : {
        color : 'white',
        fontWeight : "600",
        fontSize : 28,
    
    }
});
export default BorderViewWallet;
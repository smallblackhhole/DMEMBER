import React, { Image, Text } from 'react-native';
import {View , StyleSheet} from 'react-native';
import ButtonBack from '../Component/ButtonBack';

const CartScreen = () => {
    return(
        <View style={styles.container}>
            <ButtonBack 
                icon={require('../Assets/Back.png')}
                title={"Giỏ hàng"}/>
            <View style={styles.ViewFull}>
                <View style={styles.Viewbor}>
                <Image style={styles.img} source={require('../Assets/CartImg.png')}/>
                <Text style={styles.text}>Giỏ hàng của bạn đang trống!</Text>
                <View style={styles.btnaddCart}>
                    <Text style={styles.text2}>Thêm vào giỏ</Text>
                </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor :'#ffbb00'
    },
    ViewFull : {
        width : '100%',
        height : '100%',
        justifyContent : 'center' , 
        alignItems : 'center'
    },
    Viewbor : {
        width : '90%',
        height : '70%',
        flexDirection : 'column',
        alignItems : 'center' , 
        justifyContent : 'flex-start'
    },
    img : {
        width : 100,
        height  :100
    },
    text : {
        color  :'black',
        fontSize : 18 , 
        fontWeight : "500"
    },
    btnaddCart : {
        backgroundColor : '#041F44',
        width : '60%',
        height : '10%',
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 20
    },
    text2 : {
        color : 'white',
        fontSize : 16,
        fontWeight : "600"
    }
});


export default CartScreen;
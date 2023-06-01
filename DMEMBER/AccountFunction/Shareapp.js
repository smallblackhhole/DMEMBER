import React from 'react-native';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import ButtonBack from '../Component/ButtonBack';

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Shareapp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerbar}>
                <ButtonBack
                    icon={require('../Assets/X.png')}
                    title={""} />
            </View>
            <View style={styles.LogoShare}>
                <Image source={require('../Assets/ShareAppImg.png')} />
            </View>
            <View style={styles.ViewFull}>
                <View style={styles.flex1}>
                    <Image source={require('../Assets/getStarted.png')} />
                    <Text style={styles.text}>Mời bạn bè bằng mã giới thiệu của bạn</Text>
                    <View style={styles.numberShareView}>
                        <View style={styles.numberShareBord}>
                            <Text style={styles.Snum1}>09337910161</Text>
                            <Text style={styles.Snum2}>Sao chép</Text>
                        </View>
                    </View>
                    <View style={styles.ViewSaveText}>
                        <View style={styles.TextLine}>
                            <Text style={styles.textShare}>Link chia sẻ: </Text>
                        </View>
                    </View>
                    <View style={styles.LinkView}>
                        <View style={styles.LinkViewFLex}>
                            <View style={styles.LinkViewBord}>
                                <Text style={styles.Snum1}>https://sees.asia/70jg1w</Text>
                            </View>
                            <Image source={require('../Assets/copy.png')} />
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
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    headerbar: {
        width: WidthScreen,
        height: HeightScreen * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LogoShare: {
        height: HeightScreen * 0.33,
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor:'red'
        
    },
    ViewFull: {
       // backgroundColor:'green'
       alignItems: 'center',
    },
    flex1: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 17,
        maxWidth: '60%',
        fontWeight: "500",
        textAlign: 'center',
        marginTop: 10
    },
    numberShareView: {
        width: WidthScreen,
        height: HeightScreen * 0.06,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberShareBord: {
        width: '60%',
        height: '90%',
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        flexDirection: 'row',
        backgroundColor: 'rgba(17, 81, 245, 0.26)'
    },
    Snum1: {
        color: 'black',
        fontSize: 15,
        fontWeight: "400",
        marginLeft: 15
    },
    Snum2: {
        color: 'black',
        opacity: 0.5,
        fontSize: 16,
        fontWeight: "400",
        marginRight: 15
    },
    ViewSaveText: {
        width: WidthScreen,
        height: HeightScreen * 0.05,
        alignItems: 'center',
        marginTop: 10,
        //backgroundColor:'red'
    },
    TextLine: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
       
    },
    textShare: {
        color: 'black',
        fontWeight: "500",
        fontSize: 17
    },
    LinkView: {
        flexDirection: 'row',
        width: WidthScreen,
        height: HeightScreen * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    LinkViewBord: {
        width: '50%',
        height: '60%',
        backgroundColor: 'rgba(17, 81, 245, 0.26)', 
        justifyContent : 'center',
        borderRadius: 20,
        marginRight:10,
        // margin : 10,
       
    },
    LinkViewFLex: {
        width: '100%',
        flexDirection: 'row',
        height: '100%',
        alignItems : 'center',
        justifyContent :'center',
        
    }

});
export default Shareapp;
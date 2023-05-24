import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions } from "react-native";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Screnn = () => {
    return (
        <View style={style.container}>
                <View style={{flex:8,marginTop:300}}>
                    <Image style={style.Dmember} source={require('../image/rectangle.png')} />
                </View>
                <View style={{alignItems:'center',flex:2}}>
                    <Image style={style.easytosell} source={require('../image/easytosell.png')} />
                    <Image style={style.tim} source={require('../image/tim.png')} />
                </View>
        </View>

    );
};

export default Screnn;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },


});
import { StyleSheet, View, Text, Dimensions, Image, TextInput, Touchable, TouchableOpacity } from "react-native";
const { height: screenHeight } = Dimensions.get('window');
import ButtonBack from "../Component/ButtonBack";
const { width: WidthScreen } = Dimensions.get('window');
const News = () => {

    return (
        <View style={style.container}>
             <View style={style.headerbar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Tin Tức"} />
            </View>
            <View>
                <Text style={{ fontSize: 22, fontWeight: 'bold', left: '5%', position: 'absolute', top: '10%' }}>Tin mới nhất</Text>
                <Text style={{ fontSize: 22, fontWeight: 'bold', left: '5%', position: 'absolute', top: '90%' }}>Tin khác</Text>

                <View style={{ paddingTop: '5%', padding: '5%', }}>
                    <View style={style.homee}>
                        <Image source={require('../image/unsplash_1.png')} />
                        <View style={{ position: 'absolute', }}>
                            <Text style={{ left: '10%', top: '380%', fontSize: 20, fontWeight: '500', color: 'black' }}>
                                {'DSTORE - Startup 32 chi nhánh Hồ\nChí Minh'}</Text>
                            <Text style={{ left: '10%', top: '530%', position: 'absolute' }}>22:46 12/03/2022</Text>
                        </View>
                    </View>
                    <View style={style.homebuy}>
                        <Image style={{ left: '72%' }} source={require('../image/unsplash_2.png')} />
                        <View style={{ position: 'absolute', }}>
                            <Text style={{ left: '15%',fontSize:15, top: '20%',fontWeight:'500',color:'black' }}>
                                {'DSTORE Hồ Chí Minh tổng kế\nvà vinh danh tháng 2/2022'}</Text>
                            <Text style={{ left: '15%', top: '180%', position: 'absolute' }}>22:46 12/03/2022</Text>
                        </View>
                    </View>
                    <View style={style.homebuyy}>
                        <Image style={{left: '72%' }} source={require('../image/unsplash_3.png')} />
                        <View style={{ position: 'absolute', }}>
                            <Text style={{ left: '15%',fontSize:15, top: '20%',fontWeight:'500',color:'black' }}>
                                {'Nâng cấp chất lượng nhân sự\nphục vụ vận hành “bộ máy”\nkinh doanh của doanh nghiệp'}</Text>
                            <Text style={{ left: '15%', top: '130%', position: 'absolute' }}>22:46 12/03/2022</Text>
                        </View>
                    </View>
                    <View style={style.homebuyyy}>
                    <Image style={{left: '72%' }} source={require('../image/unsplash_4.png')} />
                        <View style={{ position: 'absolute', }}>
                        <Text style={{ left: '15%',fontSize:15, top: '20%',fontWeight:'500',color:'black' }}>
                                {'Hồ Huỳnh Duy - Chủ tịch\nHĐQT Công ty Dstore - Đột phá\nkinh doanh trực tuyến'}</Text>
                            <Text style={{ left: '15%', top: '130%', position: 'absolute' }}>22:46 12/03/2022</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
};

export default News;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    headerbar : {
        height : screenHeight*0.07,
        justifyContent : 'center',
    },
    backk: {
        left: '5%',
    },
    retangle: {
        backgroundColor: 'white',
        borderRadius: 5,
        top: '30%',
    },
    loginn: {
        top: '7%',
        width: '50 %',
        height: '7%',
        left: '45%',
        color: 'white',
        position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center',
        zIndex: 999,
    },
    loginnn: {
        top: '7%',
        width: '50%',
        height: '7%',
        left: '5%',
        color: 'white',
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center',
    },
    homee: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: '98.9%',
        top: '40%',
        height: '150%',
        position: 'absolute',
        left: '6%'
    },
    homebuy: {
        position: 'absolute',
        backgroundColor: 'white',
        top: '220%',
        width: '98.9%',
        height: '50%',
        borderRadius: 10,
        left: '6%'


    },
    homebuyy: {
        position: 'absolute',
        backgroundColor: 'white',
        top: '280%',
        width: '98.9%',
        height: '50%',
        borderRadius: 10,
        left: '6%'


    },
    homebuyyy: {
        backgroundColor: 'white',
        top: '330%',
        width: '98.9%',
        height: '50%',
        borderRadius: 10,
        left: '0.5%'

    },


    reangle62: {
        width: '12%',
        height: '60%',
        left: '5%',
        top: '15%'


    },



});
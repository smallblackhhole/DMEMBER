import { StyleSheet, View, Text,  Image,  Dimensions, TouchableOpacity } from "react-native";
import Thongtin_diachi from "../Component/Thongtin_diachi";
import Checbox_radio from "../Component/checbox_radio";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');
const Payment = () => {

    return (
        <View style={style.container}>
            <View>
                <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center', left: 10, }}>
                    <View style={{ flex: 3 }}>
                        <Image source={require('../image/back.png')} />
                    </View>
                    <View style={{ flex: 7 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Thông tin đặt hàng</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', height: HeightScreen * 0.04 }}>
                    <View style={{ flex: 9, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', left: 20 }}>Địa chỉ nhận hàng</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Image source={require('../image/Vector2.png')} />
                    </View>
                </View>
                <View style={{ with: WidthScreen, justifyContent: 'center', height: HeightScreen * 0.1, alignItems: 'center'}}>
                      <Thongtin_diachi
                        name={"Thùy Linh"}
                        sđt={"0909078111"}
                        address={'256 Bạch Đằng, Phường 24, Q.Bình Thạnh,\nThành phố Hồ Chí Minh'}
                    />
                </View>
                
                <View style={{ flexDirection: 'row', height: HeightScreen * 0.04 }}>
                    <View style={{ flex: 9, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', left: 20 }}>Hình thức thanh toán</Text>
                    </View>
                </View>

                <View style={{ with: WidthScreen, justifyContent: 'center', height: HeightScreen * 0.1, alignItems: 'center'}}>
                 <Checbox_radio
                 pay={"Thanh toán bằng ví Dcash"}
                 money={"434,403"}
                 />
                </View>
                
                <View style={{ with: WidthScreen, justifyContent: 'center', height: HeightScreen * 0.1, alignItems: 'center'}}>
                 <Checbox_radio
                 pay={"Thanh toán bằng ví Dcash"}
                 money={"434,403"}
                 />
                </View>
            </View>

        </View>

    );
};

export default Payment;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
 


});
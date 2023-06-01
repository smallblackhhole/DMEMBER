import { StyleSheet, View, Text, SafeAreaView, Dimensions, value, renderItem,TouchableOpacity } from "react-native";
import CheckBox from 'react-native-check-box'
import React, { useState } from 'react';
import { Dropdown } from "react-native-element-dropdown";
import ButtonBack from "../Component/ButtonBack";
import Thongtin1 from "../Component/Thongtin_1";
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Addaddress = () => {
    const data = [
        { label: 'Tất cả chi nhánh', value: '1' },
        { label: 'Item 2', value: '2' },
    ];

    const [isChecked, setIsChecked] = useState(false);

    return (
        <SafeAreaView style={style.container}>
            <View style={{ flexDirection: 'column' }}>
                <View style={style.headerBar}>
                    <ButtonBack
                        icon={require('../Assets/Back.png')}
                        title={"Thêm địa chỉ mới"}
                    />
                </View >

                <View>
                    <Text style={style.textt}>Tên người nhận</Text>
                </View>
                <View >
                    <Thongtin1
                        text={"Hiền Hòa"} />
                </View>

                <View>
                    <Text style={style.textt}>Số điện thoại</Text>
                </View>
                <View>
                    <Thongtin1
                        text={"Nhập số điện thoại"} />
                </View>
                <View>
                    <Text style={style.textt}>Địa chỉ nhận hàng</Text>
                </View>
                <View>
                    <Thongtin1
                        text={"Nhập số nhà, tên đường "} />
                </View>
                <View>
                    <Text style={style.textt}>Tỉnh/ Thành phố</Text>
                </View>
                <View>
                    <Thongtin1
                        text={"Thành phố Hồ Chí Minh"} />
                </View>
                <View>
                    <Text style={style.textt}>Quận/ Huyện</Text>
                </View>
                <View style={{alignItems: 'center',}}>
                    <Dropdown
                        style={style.dropdown}
                        placeholderStyle={style.placeholderStyle}
                        selectedTextStyle={style.selectedTextStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Vui lòng chọn"
                        searchPlaceholder="Tìm kiếm..."
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                        }}
                        renderItem={renderItem}/>
                </View>
                <View style={{top:5}}>
                    <Text style={style.textt}>Phường/ Xã</Text>
                </View>
                <View style={{alignItems: 'center',top:5}}>
                    <Dropdown
                        style={style.dropdown}
                        placeholderStyle={style.placeholderStyle}
                        selectedTextStyle={style.selectedTextStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Vui lòng chọn"
                        searchPlaceholder="Tìm kiếm..."
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                        }}
                        renderItem={renderItem}/>
                </View>
                <View style={{left:20,flexDirection:'row',top:20 }}>
                    <CheckBox isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                    <Text style={{fontSize:16,color:'black'}}>Đặt làm địa chỉ mặc định</Text>
                </View>

                <View style={{ alignItems: 'center', marginTop: 40 }}>
                <TouchableOpacity style={style.loginn}>
                    <Text style={{ color: 'white' }}>Thêm</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>

    );
};

export default Addaddress;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textt: {
        fontSize: 20,
        color: 'black',
        marginLeft: 20
    },
    dropdown: {

        height: HeightScreen * 0.07,
        width: WidthScreen * 0.9,
        borderRadius: 5,
        padding: 20,
        top:5,
        backgroundColor: '#FFFFFF'
    }
    ,
    //text ở dropdown ngoài
    placeholderStyle: {
        fontSize: 15,
        color: '#000000'
    },
    //text khi chọn xuất hiện ngoài dropdown
    selectedTextStyle: {
        fontSize: 16,
        color: '#000000'
    },
    loginn: {
        width: WidthScreen * 0.4,
        height: HeightScreen * 0.07,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
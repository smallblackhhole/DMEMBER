import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native';
import CheckBox from 'react-native-check-box';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown'
import ButtonBack from '../Component/ButtonBack';
import Thongtin1 from '../Component/Thongtin_1';
import { useNavigation } from '@react-navigation/native';

const { height: HeightScreen, width: WidthScreen } = Dimensions.get('window');

const Addaddress = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');
    const [districtOptions, setDistrictOptions] = useState([]);
    const [wardOptions, setWardOptions] = useState([]);
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');

    useEffect(() => {
        const getAPI = async () => {
            try {
                const response = await axios.get(
                    'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json'
                );
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getAPI();
    }, []);


    const handleCityChange = (value) => {
        // set giá trị khi thay đổi thành phố 
        setSelectedCity(value);
        // tạo biến để tìm dữ liệu bên trong của tên Thành phố đã chọn
        const selectedCityData = data.find((item) => item.Name === value);
        // tạo hàm chứa Quận Huyện bên trong thành phố đã chọn và set vào trong mảng
        const filteredDistrictOptions = selectedCityData ? selectedCityData.Districts.map((item) => item.Name) : [];
        setDistrictOptions(filteredDistrictOptions);
        setSelectedDistrict('');
        setSelectedWard('');
    };

    const handleDistrictChange = (value) => {
        // set giá trị khi thay đổi Quận Huyện
        setSelectedDistrict(value);
        // tạo biến để tìm dữ liệu bên trong của tên Thành phố đã chọn
        const selectedCityData = data.find((item) => item.Name === selectedCity);
        // tạo biến để tìm dữ liệu bên trong của tên Quận Huyện đã chọn sau khi chọn xong Thành phố
        const selectedDistrictData = selectedCityData ? selectedCityData.Districts.find((item) => item.Name === value) : null;
        // tạo hàm chứa Phường Xã bên trong Quận Huyện đã chọn và set vào trong mảng
        const filteredWardOptions = selectedDistrictData ? selectedDistrictData.Wards.map((item) => item.Name) : [];
        setWardOptions(filteredWardOptions);
        setSelectedWard('');
    };

    const handleWardChange = (value) => {
        setSelectedWard(value);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.headerBar}>
                    <ButtonBack icon={require('../Assets/Back.png')} title={'Thêm địa chỉ mới'} />
                </View>

                <View>
                    <Text style={styles.text}>Tên người nhận</Text>
                </View>
                <Thongtin1
                    text={'Nhập tên'}
                    info={name}
                    setinfo={setname}
                />

                <View>
                    <Text style={styles.text}>Số điện thoại</Text>
                </View>
                <Thongtin1
                    text={'Nhập số điện thoại'}
                    info={phone}
                    setinfo={setphone} />

                <View>
                    <Text style={styles.text}>Địa chỉ nhận hàng</Text>
                </View>
                <Thongtin1
                    text={'Nhập địa chỉ nhận hàng'}
                    info={address}
                    setinfo={setaddress} />

                <View>
                    <Text style={styles.text}>Tỉnh/ Thành phố</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { }}>
                        <SelectDropdown
                            data={data.map((item) => item.Name)}
                            defaultValue={selectedCity}
                            onSelect={(value) => handleCityChange(value)}
                            buttonTextAfterSelection={(selectedItem) => {
                                return selectedItem;
                            }}
                            defaultButtonText='Chọn Tỉnh/Thành phố'
                            rowTextForSelection={(item) => item}
                            buttonStyle={styles.dropdown}
                            search={true}
                            buttonTextStyle={{ fontSize: 16, right: 15, position: 'absolute' }}
                            searchInputTxtColor='black'
                            searchPlaceHolder='Tìm kiếm thành phố...'
                            searchPlaceHolderColor='black'
                            searchInputTxtStyle={{ fontSize: 18 }}
                            searchInputStyle={{ borderWidth: 1, borderColor: 'black' }}
                        />
                        <View style={styles.imgdrop}>
                            <Image source={require('../Assets/Vector.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.text}>Quận/ Huyện</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { }}>
                        <SelectDropdown
                            data={districtOptions}
                            defaultValue={selectedDistrict}
                            onSelect={(value) => handleDistrictChange(value)}
                            buttonTextAfterSelection={(selectedItem) => {
                                return selectedItem;
                            }}
                            defaultButtonText='Chọn Quận/Huyện'
                            rowTextForSelection={(item) => item}
                            buttonStyle={styles.dropdown}
                            buttonTextStyle={{ fontSize: 16, right: 15, position: 'absolute' }}
                            search={true}
                            searchInputTxtColor='black'
                            searchPlaceHolder='Tìm kiếm quận huyện...'
                            searchPlaceHolderColor='black'
                            searchInputTxtStyle={{ fontSize: 18 }}
                            searchInputStyle={{ borderWidth: 1, borderColor: 'black' }}
                        />
                        <View style={styles.imgdrop}>
                            <Image source={require('../Assets/Vector.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.text}>Phường/ Xã</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{}} onPress={() => { }}>
                        <SelectDropdown
                            data={wardOptions}
                            defaultValue={selectedWard}
                            onSelect={(value) => handleWardChange(value)}
                            buttonTextAfterSelection={(selectedItem) => {
                                return selectedItem;
                            }}
                            defaultButtonText='Chọn Phường/Xã'
                            rowTextForSelection={(item) => item}
                            buttonStyle={styles.dropdown}
                            searchInputTxtColor='black'
                            buttonTextStyle={{ fontSize: 16, right: 15, position: 'absolute' }}
                            searchPlaceHolder='Tìm kiếm phường xã...'
                            searchPlaceHolderColor='black'
                            searchInputTxtStyle={{ fontSize: 18 }}
                            searchInputStyle={{ borderWidth: 1, borderColor: 'black' }}
                        />
                        <View style={styles.imgdrop}>
                            <Image source={require('../Assets/Vector.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <CheckBox isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                    <Text style={styles.checkBoxText}>Đặt làm địa chỉ mặc định</Text>
                </View>

                <View style={styles.addButtonContainer}>
                    <TouchableOpacity style={styles.addButton} onPress={() => { navigation.navigate('Map', {name , phone , address, selectedCity, selectedDistrict, selectedWard }) }}>
                        <Text style={styles.addButtonText}>Thêm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Addaddress;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBAE35',
    },
    headerBar: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginLeft: 20,
    },
    dropdown: {
        height: HeightScreen * 0.07,
        width: WidthScreen * 0.9,
        borderRadius: 5,
        padding: 20,
        marginTop: 5,
        backgroundColor: '#FFFFFF',
    },
    checkBoxText: {
        fontSize: 16,
        color: 'black',
    },
    addButtonContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    addButton: {
        width: WidthScreen * 0.4,
        height: HeightScreen * 0.07,
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
    },
    imgdrop: {
        transform: [{ rotate: '90deg' }],
        position: 'absolute',
        right: '10%',
        top: '45%'
    }
});

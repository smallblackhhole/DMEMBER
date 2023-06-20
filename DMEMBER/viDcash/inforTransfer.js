import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import ButtonBack from '../Component/ButtonBack';
import Thongtin1 from '../Component/Thongtin_1';
import { useNavigation } from '@react-navigation/native';
const { height: HeightScreen, width: WidthScreen } = Dimensions.get('window');

const InforTransfer = ({ route }) => {
  const bankData = route.params ? route.params : null;
  // console.log(bankData.item.name);
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('');
  const copyToClipboard = () => {
    Clipboard.setString(selectedValue);
    ToastAndroid.show('Đã sao chép văn bản!', ToastAndroid.SHORT);
  };



  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.headerBar}>
          <ButtonBack icon={require('../Assets/Back.png')} title={'Thông tin chuyển khoản'} />
        </View>
        <View>
          <Text style={styles.textt}>Ngân hàng</Text>
        </View>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate('ChooseBank') }}>
          <View style={styles.dropdown}>
            {bankData === null ? (
              <Text style={{ fontSize: 15 , marginLeft : 10 }}>Chọn Ngân Hàng</Text>
            ) : (
              <View>
                <Text numberOfLines={1} style={{ fontSize: 18 , color : 'black', marginLeft : 10}}>{bankData.item.name}</Text>
                <Text  numberOfLines={1} style={{ fontSize: 14 , color : 'black', marginLeft : 10}}>{`(`+bankData.item.short_name+`)`}</Text>
              </View>
            )}
             {/* <Text style={{ fontSize: 15 }}>{bankData.item.name}</Text> */}
          </View>
          <View style={styles.imgdrop}>
            <Image source={require('../Assets/Vector.png')} />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.textt}>Chi nhánh</Text>
        </View>
        <Thongtin1 text={'Tân Bình'} />
        <View>
          <Text style={styles.textt}>Số tài khoản</Text>
        </View>
        <Thongtin1 text={'19036252454018'} />
        <View>
          <Text style={styles.textt}>Tên người thụ hưởng</Text>
        </View>
        <Thongtin1 text={'Nguyễn Vũ Linh'} />
        <View>
          <Text style={styles.textt}>Số tiền chuyển khoản</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="50.000" style={styles.input} />
          </View>
        </View>
        <View>
          <Text style={styles.textt}>Nội dung chuyển khoản</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Nhập nội dung chuyển khoản"
              style={styles.input}
              value={selectedValue}
              onChangeText={setSelectedValue}
            />
            <TouchableOpacity onPress={copyToClipboard} style={styles.copyIcon}>
              <Image source={require('../image/saochep.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <TouchableOpacity style={styles.loginn}>
            <Text style={{ color: 'white' }}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InforTransfer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBAE35',
  },
  dropdown: {
    height: HeightScreen * 0.07,
    width: WidthScreen * 0.9,
    justifyContent : 'center',
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
  },
  imgdrop: {
    transform: [{ rotate: '90deg' }],
    position: 'absolute',
    right: '10%',
    top: '45%',
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
    marginLeft: 20,
  },
  bankLogo: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  inputContainer: {
    width: WidthScreen,
    justifyContent: 'center',
    flexDirection: 'row',
    height: HeightScreen * 0.08,
    alignItems: 'center',
  },
  inputWrapper: {
    backgroundColor: 'white',
    width: WidthScreen * 0.9,
    height: HeightScreen * 0.07,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    color: 'black',
    flex: 8.5
  },
  copyIcon: {
    flex: 1.5,
  },
  loginn: {
    width: WidthScreen * 0.4,
    height: HeightScreen * 0.07,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

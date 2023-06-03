import React from "react";
import { Text, View, StyleSheet, Dimensions, Image ,TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';


const { width: WidthScreen } = Dimensions.get('window');
const { height: HeightScreen } = Dimensions.get('window');

const MapBorder = ({ name, address , phone , city , ward , district }) => {
  const RightSwipe = () => {
    return (
      <View style={styles.OptionBox}>
        <TouchableOpacity style={styles.sua}>
          <Image source={require('../Assets/sua.png')} />
          <Text style={styles.text3}>Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.xoa}>
          <Image source={require('../Assets/xoa.png')} />
          <Text style={styles.text3}>Xóa</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.cnotainer}>
      <Swipeable renderRightActions={RightSwipe}>
        <View style={styles.borderView}>
          <Text style={styles.text1}>{name} - {phone}</Text>
          <Text style={styles.text2}>Địa chỉ : {address} , {ward} , {district} , {city} </Text>
        </View>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  cnotainer: {
    justifyContent: "center",
    alignItems: "center",
    width: WidthScreen,
    height: HeightScreen * 0.134,
    marginTop: 15,
    // backgroundColor: 'red',
  },
  borderView: {
    width: WidthScreen * 0.9,
    height: HeightScreen * 0.134,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
  text1: {
    color: '#000000',
    fontSize: 17,
    marginLeft: 20,
    fontWeight: "500"
  },
  text2: {
    color: 'black',
    fontSize: 15,
    marginLeft: 20,
    opacity: 0.5,
    fontWeight: "500"
  },
  OptionBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WidthScreen * 0.25,
    height: HeightScreen * 0.134,
    flexDirection :  "row",
    backgroundColor: 'red',
  },
  sua : {
    flexDirection : "column",
    margin : 15
  },
  xoa : {
    flexDirection : "column" , 
    margin : 5
  },
  text3 : {
    fontSize : 15,
    fontWeight : "500",
    color : 'black'
  },
});

export default MapBorder;

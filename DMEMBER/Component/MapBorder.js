import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';


const { width: WidthScreen } = Dimensions.get('window');

const MapBorder = ({ name, address }) => {
  const RightSwipe = () => {
    return (
      <View style={styles.OptionBox}>
        <View style={styles.sua}>
          <Image source={require('../Assets/sua.png')} />
          <Text style={styles.text3}>Sửa</Text>
        </View>
        <View style={styles.xoa}>
          <Image source={require('../Assets/xoa.png')} />
          <Text style={styles.text3}>Xóa</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.cnotainer}>
      <Swipeable renderRightActions={RightSwipe}>
        <View style={styles.borderView}>
          <Text style={styles.text1}>{name}</Text>
          <Text style={styles.text2}>{address}</Text>
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
    height: 100,
    marginTop: 15
  },
  borderView: {
    width: '100%',
    justifyContent: "center",
    flexDirection: "column",
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10
  },
  text1: {
    color: 'black',
    fontSize: 18,
    marginLeft: 20,
    fontWeight: "500"
  },
  text2: {
    color: 'black',
    fontSize: 16,
    marginLeft: 20,
    opacity: 0.5,
    fontWeight: "500"
  },
  OptionBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
    flexDirection :  "row"
  },
  sua : {
    flexDirection : "column",
    margin : 5
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

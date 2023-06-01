import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, FlatList, TextInput } from 'react-native';
import CheckBox from 'react-native-check-box';
import dataTransfer from '../viDcash/dataTransfer';

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Memberslist = ({ selectedMembers, handleMemberSelection }) => {
  const [data, setData] = useState(dataTransfer);
  const [searchText, setSearchText] = useState('');

  const handleCheckboxClick = (member) => {
    const updatedData = data.map((item) => {
      if (item.member === member.member) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      }
      return item;
    });
    setData(updatedData);
    handleMemberSelection(member);
  };

  const filteredData = data.filter((item) => {
    const memberName = item.member.toLowerCase();
    return memberName.includes(searchText.toLowerCase());
  });


  const renderItem = ({ item }) => {
    const isChecked = item.isChecked || false;
    return (
      <View style={{ width: WidthScreen, height: HeightScreen * 0.1, alignItems: 'center' }}>
        <View style={styles.homee}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 2, margin: 20 }}>
              <Image style={styles.reangle62} source={item.img} />
            </View>
            <View style={{ flex: 8, flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>{item.member}</Text>
              <Text>{item.sdt}</Text>
            </View>
            <View style={{ margin: 20 }}>
              <CheckBox isChecked={isChecked} onClick={() => handleCheckboxClick(item)} />
            </View>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    const updatedData = data.map((item) => ({
      ...item,
      isChecked: selectedMembers.some((selectedMembers) => selectedMembers.member === item.member),
    }));
    setData(updatedData);
  }, [selectedMembers]);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View style={{ width: WidthScreen, height: HeightScreen * 0.07, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <View style={styles.searchh}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 5 }}>
              <Image source={require('../image/search.png')} />
              <TextInput
                style={{
                  width: WidthScreen * 0.7,
                  marginLeft: 10,
                  height: HeightScreen * 0.05,
                  borderColor: 'gray',
                  borderRadius: 5,
                }}
                placeholder={"Nhập tên, sđt, email người nhận"}
                onChangeText={setSearchText}
                value={searchText}
              />
            </View>
          </View >
          <View style={{ flex: 1, marginLeft: 10, }}>
            <Image style={{ width: 30, height: 30, }} source={require('../image/add.png')} />
          </View>
        </View>
      </View>
      <View style={styles.text}>
        <Text style={{ fontSize: 16, color: 'black', marginLeft: 20 }}>Danh sách thành viên</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

    </View>
  );
};
export default Memberslist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBAE35',
  },
  searchInput: {
    height: 40,
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  homee: {
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    width: '90%',
    height: '90%',
  },
  reangle62: {
    width: 50,
    height: 51,
  },
  searchh: {
    marginLeft: 20,
    flex: 9,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  search: {
    marginTop: 10
  },
  text: {
    justifyContent: 'center',
    width: WidthScreen,
    height: HeightScreen * 0.04,
  },
});
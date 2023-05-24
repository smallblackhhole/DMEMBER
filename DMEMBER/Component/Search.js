import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Dimensions } from "react-native";

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Search = ({ img, text, add }) => {
    const [searchText, setSearchText] = useState('');


    const handleSearch = (text) => {
        setSearchText(text);
    };

    return (
        <View style={{ width: WidthScreen, height: HeightScreen * 0.07, justifyContent: 'center', alignItems: 'center',flexDirection:'row'}}>
            <View style={style.searchh}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                    <Image source={img} />
                    <TextInput
                        style={{
                            width: WidthScreen * 0.7,
                            marginLeft:10,
                            height: HeightScreen * 0.05,
                            borderColor: 'gray',
                            borderRadius: 5,
                        }}
                        placeholder={text}
                        onChangeText={handleSearch}
                        value={searchText}
                    />
                </View>
            </View >
                <View style={{flex:1,marginLeft:10,}}>
                    <Image style={{width:30,height:30,}} source={add} />
                </View>
        </View>
    );
};

export default Search;
const style = StyleSheet.create({
    searchh: {
        marginLeft:20,
        flex:9,
        backgroundColor: 'white',
        borderRadius: 5,
    },

});
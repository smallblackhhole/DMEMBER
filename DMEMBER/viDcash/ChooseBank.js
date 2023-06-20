import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import ButtonBack from "../Component/ButtonBack";
import { useNavigation } from "@react-navigation/native";
const { height: HeightScreen, width: WidthScreen } = Dimensions.get('window');
const ChooseBank = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.vietqr.io/v2/banks');
                setData(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const filterSearch = data.filter((item) => {
        const searchTerm = search.toLowerCase();
        return (
            item.shortName.toLowerCase().includes(searchTerm) ||
            item.name.toLowerCase().includes(searchTerm)
        );
    });

    const handleClickBank = (item) => {
        setSelected(item); 
        // console.log(item);
        navigation.navigate('InforTransfer',{item});
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.4 ,borderColor : 'gray', height: 80 }}
                onPress={() => handleClickBank(item)}
            >
                <Image style={{ width: 120, height: 50, marginRight: 5 }} source={{ uri: item.logo }} />
                <Text numberOfLines={1} style={{ color: 'black', fontSize: 16 }}>{ "(" + item.shortName + ") " + item.name }</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerSearch}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Chọn Ngân Hàng"}
                />
            </View>
            <View style={styles.ViewChoose}>
                <View style={styles.viewSearchbar} >
                    <Image style={{ marginLeft: 10 }} source={require('../Assets/search.png')} />
                    <TextInput
                        style={{ color: '#000000', marginLeft: 10 }}
                        placeholder='Tìm kiếm ngân hàng...'
                        placeholderTextColor='color: rgba(0, 0, 0, 0.5);'
                        value={search}
                        autoFocus
                        onChangeText={setSearch}
                    />
                </View>
                <FlatList
                    data={filterSearch}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBAE35',
    },
    dropdown: {
        height: HeightScreen * 0.07,
        width: WidthScreen * 0.9,
        borderRadius: 5,
        padding: 20,
        marginTop: 5,
        backgroundColor: '#FFFFFF',
    },
    headerSearch: {
        width: WidthScreen,
        height: HeightScreen * 0.07,
        alignItems: 'center',
        justifyContent: "center"
    },
    viewSearchbar: {
        width: '100%',
        height: HeightScreen * 0.07,
        alignItems: 'center',
        borderBottomWidth: 0.4 ,
        borderColor : 'gray',
        flexDirection: 'row',
    },
    ViewChoose : {
        flex : 1,
        backgroundColor : 'white',
        borderTopLeftRadius : 25 ,
        borderTopRightRadius : 25
    }
})

export default ChooseBank;
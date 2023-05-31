import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import RadioForm from 'react-native-simple-radio-button'

const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

export default function Checbox_radio({pay,money}) {
    const [value, setValue] = useState(0);
    const items = [
        { value: 0 },
        { value: 1 },

        
    ]

    return (
        <View style={style.container}>
            <View style={{ backgroundColor: 'white', width: WidthScreen * 0.9, height: HeightScreen * 0.08, borderRadius: 5, flexDirection: 'row', alignItems: 'center', }}>
                <View style={{margin:10}}>
                    <RadioForm
                        radio_props={items}
                        initial={value}
                        onPress={(value) => setValue(value)}
                        buttonColor="black"
                        labelColor="black"
                        selectedButtonColor="black"
                        selectedLabelColor="black"
                    />
                </View>
                <View >
                    <View style={{ flexDirection: 'row', }}>
                 
                        <View>
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>{pay}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}> 
                        <View>
                            <Text style={{ color: 'black' }}>Số dư hiện tại:</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#19A538' }}>{money}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
});
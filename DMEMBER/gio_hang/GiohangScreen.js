import { Image, Dimensions, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style_giohang'
import { Swipeable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ButtonBack from '../Component/ButtonBack';
const GiohangScreen = ({ route }) => {
    const navigation = useNavigation();
    const itemcart = route.params;
    const soluong = route.params;
    const [numberCart, setnumberCart] = useState(soluong.numberCart);
    const [activenumberCart] = useState(false);
    const total = parseFloat(itemcart.itemchaged.item.price) * parseFloat(numberCart);
    const formattedTotal = parseFloat(total).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 3
    });
    const RightSwipe = () => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 30, marginLeft: 17 }}>
                <View style={styles.OptionBox}>
                    <Image style={styles.xoa}
                        source={require('../Assets/binCart.png')} />
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            {/* view tổng nội dung */}
            <View style={styles.view_gh}>
                {/* view header */}
                <View style={styles.headerbar}>
                    <ButtonBack
                        icon={require('../Assets/Back.png')}
                        title={""} />
                </View>
                {/* san pham gio hang */}

                {/* item */}
                <Swipeable renderRightActions={RightSwipe}>
                    <View style={styles.view_sp}>

                        {/* image sản phẩm */}
                        <View style={styles.img_all}>
                            <Image source={itemcart.itemchaged.item.imgproduct} style={styles.img_item} />
                            <View style={styles.img_corner}>
                                <Image source={itemcart.itemchaged.item.tag} style={styles.img_cornerIcon} />
                            </View>
                        </View>
                        {/* view colum  */}
                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                            {/* tên sản phẩm */}
                            <Text style={styles.ten_sp}>{itemcart.itemchaged.item.nameproduct}</Text>
                            {/* view row */}
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    {/* giá sản phẩm */}
                                    <Text style={styles.gia_chietkhau}>Giá bán:{' '}
                                        <Text style={{ fontWeight: '600', color: '#BE7229' }}>{itemcart.itemchaged.item.price}</Text>
                                    </Text>
                                    {/* chiết khấu sản phẩm */}
                                    <Text style={styles.gia_chietkhau}>Chiết khấu:{' '}
                                        <Text style={{ fontWeight: '600', color: '#1151F5' }}>{itemcart.itemchaged.item.dis}</Text>
                                    </Text>
                                </View>
                                {/* // tăng giảm số lượng sản phẩm */}
                                <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 5 }}>
                                    <TouchableOpacity style={styles.giam_sl} onPress={() => {
                                        setnumberCart(numberCart - 1)
                                        if (numberCart <= 1) {
                                            setnumberCart(1)
                                        }
                                    }}>
                                        <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 17 }}>-</Text>
                                    </TouchableOpacity>
                                    {activenumberCart == false ? (
                                        <Text style={{ color: '#000000', fontWeight: '600', fontSize: 17, marginLeft: 13, marginRight: 13 }}>{numberCart}</Text>
                                    ) : (
                                        <Text style={{ color: '#000000', fontWeight: '600', fontSize: 17, marginLeft: 13, marginRight: 13 }}>{soluong.numberCart}</Text>
                                    )}
                                    <TouchableOpacity style={styles.giam_sl} onPress={() => { setnumberCart(numberCart + 1) }}>
                                        <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 17 }}>+</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </Swipeable>

                {/* thanh toán */}
            </View>
            <View style={styles.tongtien_gh}>
                {/* //image bag */}
                <View style={styles.img_all}>
                    {/* <Image source={require('../../image/Bag.png')} style={styles.img_bag} /> */}
                    <View style={styles.img_corner}>
                        {/* <Image source={require('../../image/br_red.png')} style={styles.img_cornerIcon2} ></Image> */}
                    </View>
                </View>
                {/* text thanh toán */}
                <Text style={styles.text_tt}>{formattedTotal},000</Text>
                {/* button tiep tuc */}
                <TouchableOpacity style={styles.button_tt} onPress={() => { navigation.navigate('PayComfirm', { itemcart, soluong }) }}>
                    <Text style={styles.buttonText}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GiohangScreen


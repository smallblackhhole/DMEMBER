import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style_ttkhachang'
const Thongtin_khachang = () => {
    return (
        <View style={styles.container}>
            {/* view tổng thông tin khách hàng */}
            <View style={styles.view_ttkh}>
                {/* text thông tin khác hàng */}
                <Text style={styles.text_ttkh}>Thông tin khách hàng</Text>
                {/* thanh search */}
                <View style={styles.view_thanhsearch}>
                    {/* icon search */}
                    <Image source={require('../../image/icon_search.png')} style={styles.icon_search} />
                    {/* input search */}
                    <TextInput style={styles.input_search}
                        placeholder="Chọn/ thêm khách hàng"
                        placeholderTextColor='color: rgba(0, 0, 0, 1);'
                    />
                </View>
                {/* text thông tin khác hàng */}
                <Text style={styles.text_spdm}>Sản phẩm đặt mua</Text>
                {/* sản phẩm item */}
                <View style={styles.view_sp}>
                    {/* image sản phẩm */}
                    <View style={styles.img_all}>
                        <Image source={require('../../image/img_sp.png')} style={styles.img_item} />
                        <View style={styles.img_corner}>
                            <Image source={require('../../image/red_sale.png')} style={styles.img_cornerIcon} />
                        </View>
                    </View>
                    {/* view colum  */}
                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                        {/* tên sản phẩm */}
                        <Text style={styles.ten_sp}>Dearanchy-Purifying Pure - Cleasing Water -
                            Nước tẩy trang làm sạch, khỏe da</Text>
                        {/* view row */}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                {/* giá sản phẩm */}
                                <Text style={styles.gia_chietkhau}>Giá bán:{' '}
                                    <Text style={{ fontWeight: '600', color: '#BE7229' }}>420,500</Text>
                                </Text>
                                {/* chiết khấu sản phẩm */}
                                <Text style={styles.gia_chietkhau}>Chiết khấu:{' '}
                                    <Text style={{ fontWeight: '600', color: '#1151F5' }}>420,500</Text>
                                </Text>
                            </View>
                            {/* // tăng giảm số lượng sản phẩm */}
                            <View style={{ flexDirection: 'row', marginLeft: 40, marginTop: 5 }}>
                                <TouchableOpacity style={styles.giam_sl}>
                                    <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 17 }}>-</Text>
                                </TouchableOpacity>
                                <Text style={{ color: '#000000', fontWeight: '600', fontSize: 17, marginLeft: 13, marginRight: 13 }}>1</Text>
                                <TouchableOpacity style={styles.giam_sl}>
                                    <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 17 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                {/* sản phẩm item */}
                <View style={styles.view_sp}>
                    {/* image sản phẩm */}
                    <View style={styles.img_all}>
                        <Image source={require('../../image/img_sp.png')} style={styles.img_item} />
                        <View style={styles.img_corner}>
                            <Image source={require('../../image/red_sale.png')} style={styles.img_cornerIcon} />
                        </View>
                    </View>
                    {/* view colum  */}
                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                        {/* tên sản phẩm */}
                        <Text style={styles.ten_sp}>Dearanchy-Purifying Pure - Cleasing Water -
                            Nước tẩy trang làm sạch, khỏe da</Text>
                        {/* view row */}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                {/* giá sản phẩm */}
                                <Text style={styles.gia_chietkhau}>Giá bán:{' '}
                                    <Text style={{ fontWeight: '600', color: '#BE7229' }}>420,500</Text>
                                </Text>
                                {/* chiết khấu sản phẩm */}
                                <Text style={styles.gia_chietkhau}>Chiết khấu:{' '}
                                    <Text style={{ fontWeight: '600', color: '#1151F5' }}>420,500</Text>
                                </Text>
                            </View>
                            {/* // tăng giảm số lượng sản phẩm */}
                            <View style={{ flexDirection: 'row', marginLeft: 40, marginTop: 5 }}>
                                <TouchableOpacity style={styles.giam_sl}>
                                    <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 17 }}>-</Text>
                                </TouchableOpacity>
                                <Text style={{ color: '#000000', fontWeight: '600', fontSize: 17, marginLeft: 13, marginRight: 13 }}>1</Text>
                                <TouchableOpacity style={styles.giam_sl}>
                                    <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 17 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Thongtin_khachang

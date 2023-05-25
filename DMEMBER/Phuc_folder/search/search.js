import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style_search'
const Search = () => {
    const handlePress = () => {
        // Xử lý logic khi nút được nhấn
        console.log("Nút Đăng kí đã được nhấn!");
    };
    return (
        <View style={styles.container}>
            {/* view tổng search */}
            <View style={styles.view_sreach}>
                {/* thanh search */}
                <View style={styles.view_thanhsearch}>
                    {/* icon search */}
                    <Image source={require('../../image/icon_search.png')} style={styles.icon_search} />
                    {/* input search */}
                    <TextInput style={styles.input_search}
                        placeholder="Tìm kiếm..."
                        placeholderTextColor='color: rgba(0, 0, 0, 0.5);'
                    />
                    {/* icon delete */}
                    <Image source={require('../../image/X_delete.png')} style={styles.icon_delete} />
                </View>
                {/* view tìm kiếm gần đây */}
                <View style={styles.view_tkgd}>
                    {/* text tìm kiếm gần đây */}
                    <Text style={styles.text_tkgd}>Tìm kiếm gần đây</Text>
                    <Text style={styles.text_xoa}>Xóa</Text>
                </View>
                {/* các text đã tìm kiếm gần đây */}
                <View style={styles.lichsu_search}>
                    <Image source={require('../../image/fa6-solid_clock-rotate-left.png')} style={styles.icon_lichsu} />
                    <Text style={styles.text_lichsu}>Nước hoa hồng</Text>
                </View>
                {/* các text đã tìm kiếm gần đây */}
                <View style={styles.lichsu_search}>
                    <Image source={require('../../image/fa6-solid_clock-rotate-left.png')} style={styles.icon_lichsu} />
                    <Text style={styles.text_lichsu}>Nước hoa hồng</Text>
                </View>
                {/* các text đã tìm kiếm gần đây */}
                <View style={styles.lichsu_search}>
                    <Image source={require('../../image/fa6-solid_clock-rotate-left.png')} style={styles.icon_lichsu} />
                    <Text style={styles.text_lichsu}>Nước hoa hồng</Text>
                </View>
                {/* text kết quả liên */}
                <Text style={styles.text_kqlq}>Kết quả liên quan</Text>
                {/* sản phẩm tìm kiếm */}
                <View style={styles.sp_search}>
                    {/* hình ảnh sản phẩm */}
                    <View style={styles.img_all}>
                        <Image source={require('../../image/img_sp.png')} style={styles.img_sp} />
                        <View style={styles.img_corner}>
                            <Image source={require('../../image/red_sale.png')} style={styles.img_cornerIcon} />
                        </View>
                    </View>
                    {/* tên sản phẩm */}
                    <Text style={styles.ten_sp}>Nước tẩy trang Dearanchy Purifying Pure Cleansing 30ml</Text>
                    {/* view tổng 2 text 1 button */}
                    <View style={styles.view_text_btn}>
                        {/* view giá bán , giá khấu */}
                        <View style={{ flexDirection: 'column' }}>
                            {/* giá bán */}
                            <Text style={styles.gia_ban}>Giá bán:{' '}
                                <Text style={{ fontWeight: '600', color: '#BE7229' }}>523,000</Text>
                            </Text>
                            {/* giá khấu */}
                            <Text Text style={styles.gia_chietkhau}>Chiếu khấu:{' '}
                                <Text style={{ fontWeight: '600', color: '#1151F5' }}>103,000</Text>
                            </Text>
                        </View>
                        {/* view button add */}
                        <View>
                            {/* button thêm vào giỏ hàng */}
                            <TouchableOpacity style={styles.add_cart} onPress={handlePress}>
                                <Text style={{ color: '#FFFFFF', fontWeight: '500', fontSize: 20 }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Search


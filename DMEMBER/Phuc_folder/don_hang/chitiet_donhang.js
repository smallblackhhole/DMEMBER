import { Image, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style_chitiet_donhang'
const Chitiet_donhang = () => {

    const {
        height: height_screen,
        width: width_screen
    } = Dimensions.get('window');

    const handlePress = () => {
        // Xử lý logic khi nút được nhấn
        console.log("Nút Đăng kí đã được nhấn!");
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.view_chitiet_thontin}>
                    {/* text */}
                    {/* view header */}
                    <View style={{ flexDirection: 'row', marginTop: width_screen * 0.055 }}>
                        <Image source={require('../../image/back_p.png')} style={styles.icon_back} />
                        <Text style={styles.textgiohang}>Chi tiết đơn hàng</Text>
                    </View>
                    {/* view tổng chi tiết và thông tin */}

                    {/* view mã đơn và ghi chú */}
                    <View style={styles.view_madon}>
                        {/* tên mã đơn */}
                        <Text style={styles.ten_madon}>Mã đơn hàng:{''}
                            <Text> 002220321D9M</Text>
                        </Text>
                        {/* ghi chú */}
                        <View style={styles.view_ghichu}>
                            <Text style={styles.text_ghichu}>Ghi chú: Đến A69 gửi bảo vệ</Text>
                        </View>
                    </View>
                    {/* thông tin xuất bán */}
                    {/* text thông tin xuất bán */}
                    <Text style={styles.text_tt_all}> Thông tin xuất bán  </Text>
                    {/* view thông tin xuất bán(số tiền tổng) */}
                    <View style={styles.view_ttxb}>
                        <View style={styles.view_tt_so}>
                            <Text style={styles.text_nhat_all}>Tổng tiền hàng:</Text>
                            <Text style={styles.number_den}>5,580,000</Text>
                        </View>
                        <View style={styles.view_tt_so}>
                            <Text style={styles.text_nhat_all}>Tổng tiền hàng:</Text>
                            <Text style={styles.number_den}>5,580,000</Text>
                        </View>
                        {/* line ngang */}
                        <View style={styles.horizontalLine}></View>
                        {/* view số tiền thanh toán  */}
                        <View style={styles.view_thanhtoan}>
                            <Text style={styles.text_dam_all}>Thanh toán khi nhận hàng:</Text>
                            <Text style={styles.number_nau}>1,652,000</Text>
                        </View>
                    </View>
                    {/* text thông tin xuất bán */}
                    <Text style={styles.text_tt_all}> Thông tin đơn hàng  </Text>
                    {/* view thoong tin đơn hàng */}
                    <View style={styles.view_ttdh}>
                        <View style={styles.view_tt_so}>
                            <Text style={styles.text_nhat_all}>Tổng tiền hàng:</Text>
                            <Text style={styles.number_den}>1,580,000</Text>
                        </View>
                        <View style={styles.view_tt_so}>
                            <Text style={styles.text_nhat_all}>Lợi nhuận:</Text>
                            <Text style={styles.number_xanhla}>580,000</Text>
                        </View>
                        <View style={styles.view_tt_so}>
                            <Text style={styles.text_nhat_all}>Lợi nhuận đơn hàng:</Text>
                            <Text style={styles.number_xanhla}>580,000</Text>
                        </View>
                        <View style={styles.view_tt_so}>
                            <Text style={styles.text_nhat_all}>Tổng thành tiền:</Text>
                            <Text style={styles.number_den}>1,580,000</Text>
                        </View>
                        {/* line ngang */}
                        <View style={styles.horizontalLine}></View>
                        {/* view số tiền thanh toán  */}
                        <View style={styles.view_thanhtoan}>
                            <Text style={styles.text_dam_all}>Số tiền thanh toán:</Text>
                            <Text style={styles.number_nau}>1,652,000</Text>
                        </View>
                    </View>
                    {/* text địa chỉ nhận hàng */}
                    <Text style={styles.text_tt_all}>Địa chỉ nhận hàng</Text>
                    {/* view địa chỉ nhận hàng */}
                    <View style={styles.view_dcnh}>
                        {/* img home địa chỉ nhận hàng */}
                        <Image style={styles.img_diachi} source={require('../../image/diachihome.png')} />
                        {/* column text */}
                        <View style={styles.view_cl}>
                            {/* row */}
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.text_ten_sdt}>Thùy Linh</Text>
                                <View style={styles.verticalLine}></View>
                                <Text style={styles.text_ten_sdt}>0909078111</Text>
                            </View>
                            <Text style={styles.text_dc}>256 Bạch Đằng, Phường 24,
                                Q.Bình Thạnh, Thành phố Hồ Chí Minh</Text>
                        </View>
                    </View>
                    {/* text địa chỉ nhận hàng */}
                    <Text style={styles.text_tt_all}>Sản phẩm đã mua</Text>
                    {/* view sản phẩm đã mua */}
                    <View style={styles.view_sp}>
                        {/* image sản phẩm */}
                        <Image source={require('../../image/img_sp.png')} style={styles.img_item} />
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
                                        <Text style={{ fontWeight: '400', color: '#BE7229' }}>420,500</Text>
                                    </Text>
                                    {/* chiết khấu sản phẩm */}
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.gia_chietkhau}>Chiết khấu:{' '}
                                            <Text style={{ fontWeight: '400', color: '#1151F5' }}>420,500</Text>
                                        </Text>
                                        <Text style={styles.soluong_damua}>Số lượng:{' '}
                                            <Text style={styles.gia_chietkhau}>1</Text>
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.view_sp}>
                        {/* image sản phẩm */}
                        <Image source={require('../../image/img_sp.png')} style={styles.img_item} />
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
                                        <Text style={{ fontWeight: '400', color: '#BE7229' }}>420,500</Text>
                                    </Text>
                                    {/* chiết khấu sản phẩm */}
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.gia_chietkhau}>Chiết khấu:{' '}
                                            <Text style={{ fontWeight: '400', color: '#1151F5' }}>420,500</Text>
                                        </Text>
                                        <Text style={styles.soluong_damua}>Số lượng:{' '}
                                            <Text style={styles.gia_chietkhau}>1</Text>
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.view_sp}>
                        {/* image sản phẩm */}
                        <Image source={require('../../image/img_sp.png')} style={styles.img_item} />
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
                                        <Text style={{ fontWeight: '400', color: '#BE7229' }}>420,500</Text>
                                    </Text>
                                    {/* chiết khấu sản phẩm */}
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.gia_chietkhau}>Chiết khấu:{' '}
                                            <Text style={{ fontWeight: '400', color: '#1151F5' }}>420,500</Text>
                                        </Text>
                                        <Text style={styles.soluong_damua}>Số lượng:{' '}
                                            <Text style={styles.gia_chietkhau}>1</Text>
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Chitiet_donhang

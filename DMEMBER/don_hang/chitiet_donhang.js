import { Image, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style_chitiet_donhang'
import ButtonBack from '../Component/ButtonBack'
const { height: HeightScreen } = Dimensions.get('window');
const { width: WidthScreen } = Dimensions.get('window');

const Chitiet_donhang = () => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.view_chitiet_thontin}>
                    <View style={{
                    //    width: WidthScreen,
                       height: HeightScreen * 0.07,
                       justifyContent: 'center',
                       alignItems: 'center',
                      // backgroundColor:'red'
                    }}>
                        <ButtonBack
                            icon={require('../Assets/Back.png')}
                            title={"Chi tiết đơn hàng"} />
                    </View>
                    <View style={styles.view_madon}>
                        <Text style={styles.ten_madon}>Mã đơn hàng:{''}
                            <Text> 002220321D9M</Text>
                        </Text>
                        <View style={styles.view_ghichu}>
                            <Text style={styles.text_ghichu}>Ghi chú: Đến A69 gửi bảo vệ</Text>
                        </View>
                    </View>
                    <Text style={styles.text_tt_all}> Thông tin xuất bán  </Text>
                    <View style={styles.view_ttxb}>
                        <View style={styles.view_tt_so}>
                            <Text style={styles.text_nhat_all}>Tổng tiền hàng:</Text>
                            <Text style={styles.number_den}>5,580,000</Text>
                        </View>
                        <View style={styles.view_tt_so}>
                            <Text style={styles.text_nhat_all}>Tổng tiền hàng:</Text>
                            <Text style={styles.number_den}>5,580,000</Text>
                        </View>
                        <View style={styles.horizontalLine}></View>
                        <View style={styles.view_thanhtoan}>
                            <Text style={styles.text_dam_all}>Thanh toán khi nhận hàng:</Text>
                            <Text style={styles.number_nau}>1,652,000</Text>
                        </View>
                    </View>
                    <Text style={styles.text_tt_all}> Thông tin đơn hàng  </Text>
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
                        <View style={styles.horizontalLine}></View>
                        <View style={styles.view_thanhtoan}>
                            <Text style={styles.text_dam_all}>Số tiền thanh toán:</Text>
                            <Text style={styles.number_nau}>1,652,000</Text>
                        </View>
                    </View>
                    <Text style={styles.text_tt_all}>Địa chỉ nhận hàng</Text>
                    <View style={styles.view_dcnh}>
                        <Image style={styles.img_diachi} source={require('../Assets/paycomfirmHomelogo.png')} />
                        <View style={styles.view_cl}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.text_ten_sdt}>Thùy Linh</Text>
                                <View style={styles.verticalLine}></View>
                                <Text style={styles.text_ten_sdt}>0909078111</Text>
                            </View>
                            <Text style={styles.text_dc}>256 Bạch Đằng, Phường 24,
                                Q.Bình Thạnh, Thành phố Hồ Chí Minh</Text>
                        </View>
                    </View>
                    <Text style={styles.text_tt_all}>Sản phẩm đã mua</Text>
                    <View style={styles.view_sp}>
                    <Image style={styles.img_item} source={require('../image/img_sp.png')} />
                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                            <Text style={styles.ten_sp}>Dearanchy-Purifying Pure - Cleasing Water -
                                Nước tẩy trang làm sạch, khỏe da</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.gia_chietkhau}>Giá bán:{' '}
                                        <Text style={{ fontWeight: '600', color: '#BE7229',   fontSize: 9, }}>420,500</Text>
                                    </Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.gia_chietkhau}>Chiết khấu:{' '}
                                            <Text style={{ fontWeight: '600', color: '#1151F5',  fontSize: 9, }}>420,500</Text>
                                        </Text>
                                        <Text style={styles.soluong_damua}>Số lượng:{' '}
                                            <Text style={styles.gia_chietkhau}>1</Text>
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{height: HeightScreen * 0.02,}}></View>

                </View>
            </View>
        </ScrollView>
    )
}

export default Chitiet_donhang

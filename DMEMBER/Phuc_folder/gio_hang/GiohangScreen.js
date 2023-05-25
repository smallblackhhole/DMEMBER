import { Image, Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';
import React from 'react'
import styles from './style_giohang'
import { Swipeable } from 'react-native-gesture-handler';
const GiohangScreen = () => {

    const {
        height: height_screen,
        width: width_screen
    } = Dimensions.get('window');

    const handlePress = () => {
        // Xử lý logic khi nút được nhấn
        console.log("Nút Đăng kí đã được nhấn!");
    };
    //phần vuốt qua trái để xóa item
    const RightSwipe = () => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 30, marginLeft: 17 }}>
                <View style={styles.OptionBox}>
                    <Image style={styles.xoa}
                        source={require('../../image/fluent_delete-16-regular.png')} />
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            {/* view tổng nội dung */}
            <View style={styles.view_gh}>
                {/* view header */}
                <View style={{ flexDirection: 'row', marginTop: width_screen * 0.055 }}>
                    <Image source={require('../../image/back_p.png')} style={styles.icon_back} />
                    <Text style={styles.textgiohang}>Giỏ hàng</Text>
                </View>
                {/* san pham gio hang */}

                {/* item */}
                <Swipeable renderRightActions={RightSwipe}>
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
                                <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 5 }}>
                                    <TouchableOpacity style={styles.giam_sl} onPress={handlePress}>
                                        <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 17 }}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: '#000000', fontWeight: '600', fontSize: 17, marginLeft: 13, marginRight: 13 }}>1</Text>
                                    <TouchableOpacity style={styles.giam_sl} onPress={handlePress}>
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
                    <Image source={require('../../image/Bag.png')} style={styles.img_bag} />
                    <View style={styles.img_corner}>
                        <Image source={require('../../image/br_red.png')} style={styles.img_cornerIcon2} ></Image>
                    </View>
                </View>
                {/* text thanh toán */}
                <Text style={styles.text_tt}>1,590,000</Text>
                {/* button tiep tuc */}
                <TouchableOpacity style={styles.button_tt} onPress={handlePress}>
                    <Text style={styles.buttonText}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GiohangScreen


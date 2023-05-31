import { StyleSheet, Dimensions } from 'react-native'

const {
    height: height_screen,
    width: width_screen
} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
        alignItems: 'center',
        justifyContent: 'center',
    },
    //view thông tin khách hàng
    view_ttkh: {
        flex: 1,
        width: width_screen * 0.90,
        height: height_screen * 0.88,
        // marginLeft: width_screen * 0.06,
        // marginTop: width_screen * 0.08,
        flexDirection: 'column',
        //backgroundColor: 'green',
    },
    //text thông tin khách hàng//
    text_ttkh: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 17,
        marginTop: 91
    },
    //view search
    view_thanhsearch: {
        height: height_screen * 0.070,//58
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15
    },
    //icon_search
    icon_search: {
        width: width_screen * 0.061,//25
        height: height_screen * 0.0305,//25
        marginLeft: 13,
        marginRight: 10
    },
    //input search
    input_search: {
        height: height_screen * 0.070,//58
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderRadius: 10,
        fontSize: 15,
        fontWeight: '400'
    },
    //text sản phẩm đặt mua//
    text_spdm: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 17,
        marginTop: 25
    },
    //view sp
    view_sp: {
        height: height_screen * 0.137,//106
        backgroundColor: '#FFFFFF',
        marginTop: 15,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        color: '#000000',
    },
    //item hình ảnh
    img_all: {
        position: 'relative',
        justifyContent: 'flex-start',
    },
    img_item: {
        width: width_screen * 0.199,//80
        height: height_screen * 0.097,//79
        marginLeft: 8,

    },
    img_corner: {
        position: 'absolute',
        top: 4,
        right: 1,
    },
    img_cornerIcon: {
        width: width_screen * 0.050,//20
        height: 23,
    },
    // item tên sản phẩm
    ten_sp: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 13,
        width: width_screen * 0.584,//239
        height: 48,
        //backgroundColor:'yellow'

    },
    gia_chietkhau: {
        color: '#000000',
        fontSize: 12,
    },
    // nút tăng giảm số lượng
    giam_sl: {
        width: width_screen * 0.061,//25
        height: 25,
        backgroundColor: '#000000',
        borderRadius: 7,
        alignItems: 'center',
    },
})
export default styles
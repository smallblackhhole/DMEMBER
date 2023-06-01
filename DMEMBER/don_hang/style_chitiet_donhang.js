import { StyleSheet, Dimensions, View } from 'react-native'

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
    //text giỏ hàng
    textgiohang: {
        fontSize: 21,
        color: '#000000',
        fontWeight: '500',
        marginLeft: 58
    },
    view_chitiet_thontin: {
        flex: 1,
        width: width_screen * 0.90,
        // height: height_screen * 0.88,
        // marginLeft: width_screen * 0.06,
        // marginTop: width_screen * 0.08,
        flexDirection: 'column',
         //backgroundColor:'green',
    },
    //view tổng mã đơn
    view_madon: {
        height: height_screen * 0.154,//120
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'column',
        color: '#000000',
    },
    // item tên mã đơn
    ten_madon: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 19,
        width: width_screen * 0.85,
        marginTop: 16,
        marginLeft: 20,
       // backgroundColor: 'red',

    },
    //item ghi chú trong mã đơn
    view_ghichu: {
        width: width_screen * 0.793,
        height:  height_screen * 0.054,//120
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#E5E5E5',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 20
    },
    //text ghi chú trong mã đơn
    text_ghichu: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 15,
        marginLeft: 11
    },
    //text thông tin all
    text_tt_all: {
        width: width_screen * 0.58,
        color: '#000000',
        fontWeight: '500',
        fontSize: 17,
        marginTop: 16,
        //backgroundColor: '#FFFFFF',
    },
    //view thanh toán tổng tiền xuất bán
    view_ttxb: {
        height:  height_screen * 0.156,//121
        backgroundColor: '#FFFFFF',
        marginTop: 16,
        borderRadius: 10,
        flexDirection: 'column',
        color: '#000000',
    },
    view_tt_so: {
        width:  width_screen * 0.785,
        height: height_screen * 0.026,//20
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 13,
        justifyContent: 'space-between',
        // backgroundColor: 'green',
    },
    view_thanhtoan: {
        width: width_screen * 0.78,
        height: height_screen * 0.026,//20
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 12.5,
        justifyContent: 'space-between',
        // backgroundColor: 'red',
    },

    //text nhạt màu chung all
    text_nhat_all: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 15,

    },
    //text đậm màu chung all
    text_dam_all: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 15,

    },
    // number_den
    number_den: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 15,

    },
    //number_nau
    number_nau: {
        color: '#BE7229',
        fontWeight: '600',
        fontSize: 15,

    },
    //number_xanhla
    number_xanhla: {
        color: '#19A538',
        fontWeight: '500',
        fontSize: 15,

    },
    //line ngang
    horizontalLine: {
        width: width_screen * 0.72,
        height: 1,
        backgroundColor: '#C4C4C4',
        marginLeft: 33,
        marginTop: 11.5
    },
    //view thông tin đơn hàng
    view_ttdh: {
        height: height_screen * 0.242,//189
        backgroundColor: '#FFFFFF',
        marginTop: 16,
        borderRadius: 10,
        flexDirection: 'column',
        color: '#000000',
    },
    //view địa chỉ nhận hàng
    view_dcnh: {
        height: height_screen * 0.102,//180
        backgroundColor: '#FFFFFF',
        marginTop: 16,
        borderRadius: 10,
        flexDirection: 'row',
        color: '#000000',
        alignItems: 'center',
    },
    //img địa chỉ nhận hàng
    img_diachi: {
        width: width_screen * 0.090,//34
        height: height_screen * 0.0452,//34
        marginLeft: 10,
    },
    //view column img vs text
    view_cl: {
        flexDirection: 'column',
        width: width_screen * 0.655,//258
        marginLeft: 22,
       // backgroundColor: 'red',


    },
    //text tên , số điện thoại
    text_ten_sdt: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 13
    },
    //1 gạch dọc đen ngắn
    verticalLine: {
        width: 1,
        height: height_screen * 0.020,//17
        backgroundColor: '#000000',
        marginLeft: 10,
        marginRight: 10,
    },
    //text địa chỉ
    text_dc: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 12
    },
    //san phẩm đã mua
    view_sp: {
        height: height_screen * 0.098,//72
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        color: '#000000',
    },
    //item hình ảnh

    img_item: {
        width: width_screen * 0.140,//53
        height: height_screen * 0.068,//53
        marginLeft: 5,

    },

    // item tên sản phẩm
    ten_sp: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 12,
        width: width_screen * 0.675,//260
        marginBottom: 3,
       // backgroundColor: 'red',

    },
    gia_chietkhau: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 11,
    },
    soluong_damua: {
        color: '#000000',
        fontSize: 11,
        fontWeight: '400',
        marginLeft: 82
    },

})
export default styles
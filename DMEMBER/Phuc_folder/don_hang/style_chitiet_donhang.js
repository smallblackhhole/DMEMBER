import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    textgiohang: {
        fontSize: 21,
        color: '#000000',
        fontWeight: '500',
        marginTop: 20,
    },
    view_chitiet_thontin: {
        flex: 1,
        width: '88%',
        marginLeft: '6%',
        marginTop: '8%',

        //backgroundColor:'pink'
    },
    //view tổng mã đơn
    view_madon: {
        width: '100%',
        height: 120,
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
        width: '80%',
        height: 25,
        marginTop: 16,
        marginLeft: 20

    },
    //item ghi chú trong mã đơn
    view_ghichu: {
        width: '88%',
        height: 41,
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
        width: '60%',
        color: '#000000',
        fontWeight: '500',
        fontSize: 17,
        marginTop: 16
    },
    //view thanh toán tổng tiền xuất bán
    view_ttxb: {
        width: '100%',
        height: 122,
        backgroundColor: '#FFFFFF',
        marginTop: 16,
        borderRadius: 10,
        flexDirection: 'column',
        color: '#000000',
    },
    view_tt_so: {
        width: "87%",
        height: 20,
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 13,
        justifyContent: 'space-between',
        // backgroundColor: 'red',
    },
    view_thanhtoan: {
        width: "87%",
        height: 20,
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
        width: '80%',
        height: 1,
        backgroundColor: '#C4C4C4',
        marginLeft: 33,
        marginTop: 11.5
    },
    //view thông tin đơn hàng
    view_ttdh: {
        width: '100%',
        height: 189,
        backgroundColor: '#FFFFFF',
        marginTop: 16,
        borderRadius: 10,
        flexDirection: 'column',
        color: '#000000',
    },
    //view địa chỉ nhận hàng
    view_dcnh: {
        width: '100%',
        height: 80,
        backgroundColor: '#FFFFFF',
        marginTop: 16,
        borderRadius: 10,
        flexDirection: 'row',
        color: '#000000',
        alignItems: 'center',
    },
    //img địa chỉ nhận hàng
    img_diachi: {
        width: 34,
        height: 34,
        marginLeft: 10,
    },
    //view column img vs text
    view_cl: {
        flexDirection: 'column',
        width: 258,
        marginLeft: 22,


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
        height: 17,
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
        width: '100%',
        height: 72,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        color: '#000000',
    },
    //item hình ảnh

    img_item: {
        width: 53,
        height: 53,
        marginLeft: 5,

    },

    // item tên sản phẩm
    ten_sp: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 11,
        width: 284,
        height: 26,
        marginBottom: 7

    },
    gia_chietkhau: {
        color: '#000000',
        fontSize: 9,
    },
    soluong_damua: {
        color: '#000000',
        fontSize: 9,
        marginLeft: 82
    },

})
export default styles
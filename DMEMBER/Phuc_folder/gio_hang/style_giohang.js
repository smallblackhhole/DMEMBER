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
    view_gh: {
        flex: 1,
        width: '88%',
        height: '100%',
        marginLeft: '6%',
        marginTop: '8%',
        alignItems: 'center',
        //backgroundColor:'pink'
    },
    //view sp
    view_sp: {
        width: '100%',
        height: '15.2%',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
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
        width: 80,
        height: 79,
        marginLeft: 8,

    },
    img_corner: {
        position: 'absolute',
        top: 4,
        right: 7,
    },
    img_cornerIcon: {
        width: 20,
        height: 23,
    },
    // item tên sản phẩm
    ten_sp: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 13,
        width: 239,
        height: 48,

    },
    gia_chietkhau: {
        color: '#000000',
        fontSize: 12,
    },
    // nút tăng giảm số lượng
    giam_sl: {
        width: 25,
        height: 25,
        backgroundColor: '#000000',
        borderRadius: 7,
        alignItems: 'center',
    },
    //view thanh toán
    tongtien_gh: {
        width: '100%',
        height: 76,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
    },
    //so lượng trong bag img
    img_bag: {
        width: 30,
        height: 30,
        marginLeft: 24,
    },
    img_cornerIcon2: {
        position: 'absolute',
        top: 11,
        left: -3,
    },
    number: {
        color: '#FFFFFF',
        width: 7,
        height: 13,
    },
    //số tiền
    text_tt: {
        color: '#BE7229',
        fontWeight: '600',
        fontSize: 21,
        marginLeft: 20
    },
    //button thanh toán
    button_tt: {
        width: 112,
        height: 50,
        backgroundColor: '#000000',
        borderRadius: 10,
        justifyContent: 'center',
        marginLeft: 90
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '600',

    },
})
export default styles
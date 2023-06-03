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
    //headerbar
    headerbar : {
        height : height_screen*0.07,
        justifyContent : 'center',
       // backgroundColor: "red",
        
    },
    //text giỏ hàng
    textgiohang: {
        fontSize: 21,
        color: '#000000',
        fontWeight: '500',
        marginLeft: 103
    },
    //icon_back
    icon_back: {
        width: width_screen * 0.080,//28
        height: height_screen * 0.040, //28
    },
    view_gh: {
        flex: 1,
        width: width_screen * 0.90,
        flexDirection: 'column',
        // backgroundColor: 'red',

    },
    //view sp
    view_sp: {
        height: height_screen * 0.135, //106
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        color: '#000000',
    },
    img_item: {
        width: width_screen * 0.210,//80
        height: height_screen * 0.102,//79
        marginLeft: 8,

    },
    img_corner: {
        position: 'absolute',
        top: 4,
        right: 7,
        position : 'absolute',
        justifyContent : 'center',
        alignItems :'center',
        bottom :0,
        right : 0,
        width : 15,
        height : 15,
        borderRadius : 20,
        backgroundColor : '#EE2525'
    },
    img_corner2: {
        position : 'absolute',
        justifyContent : 'center',
        alignItems :'center',
        bottom :0,
        right : -3,
        width : 15,
        height : 15,
        borderRadius : 20,
        backgroundColor : '#EE2525'
    },
    
    img_cornerIcon: {
        width: width_screen * 0.056,//20
        height: height_screen * 0.033,//23
       // backgroundColor: 'pink',
    },
    //view kéo xóa sản phẩm 
    right_delete: {
        marginTop:10,
         justifyContent: 'center',
        alignItems: 'center',
        width: width_screen * 0.25,
        height: height_screen * 0.134,
        flexDirection: "row",
       // backgroundColor: 'green',
    },
    //phần vuốt item hiện nút xóa
    OptionBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width_screen * 0.106,//20
        height: height_screen * 0.053,//40
        backgroundColor: '#D7232D',
        borderRadius: 50,
    },
    xoa: {
        width: width_screen * 0.050,//20
        height: height_screen * 0.035,//40

    },
    text3: {
        fontSize: 15,
        fontWeight: "500",
        color: 'black'
    },
    // item tên sản phẩm
    ten_sp: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 13,
        width: width_screen * 0.620,//239
        height: height_screen * 0.062,//48
        // backgroundColor: 'red',

    },
    gia_chietkhau: {
        color: '#000000',
        fontSize: 12,
    },
    // nút tăng giảm số lượng
    giam_sl: {
        width: width_screen * 0.067,//20
        height: height_screen * 0.033,//48
        backgroundColor: '#000000',
        borderRadius: 7,
        alignItems: 'center',
    },
    //view thanh toán
    tongtien_gh: {
        width: width_screen,
        height: height_screen * 0.097,//76
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent : 'space-between',
        alignItems: 'center',
    },
    //so lượng trong bag img
    img_bag: {
        width: width_screen * 0.079,//20
        height: height_screen * 0.039,//30
        marginLeft: 24,
    },
    img_cornerIcon2: {
        width: width_screen * 0.038,//20
        position: 'absolute',
        top: 11,
        left: -3,
    },

    //số tiền
    text_tt: {
        width:width_screen* 0.456,
        color: '#BE7229',
        fontWeight: '600',
        fontSize: 21,
        marginLeft: 20,
        //backgroundColor: 'yellow',
    },
    //button thanh toán
    button_tt: {
        width: width_screen * 0.30,//122
        height: height_screen * 0.063,//50
        backgroundColor: '#000000',
        borderRadius: 10,
        justifyContent: 'center',
        marginRight : 20
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '600',

    },

})
export default styles
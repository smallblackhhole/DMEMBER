import { StyleSheet, Dimensions } from 'react-native'

const {
     height: height_screen, 
     width: width_screen
     } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
     //text lịch sử
     textlichsu: {
        fontSize: 21,
        color: '#000000',
        fontWeight: '500',
        marginTop: width_screen * 0.055, //20
    },
    //view tổng lịch sử
    view_lichsu: {
        flex: 1,
        width: width_screen * 0.88,
        height: height_screen * 0.88, 
        marginLeft:  width_screen * 0.06,
        marginTop:  width_screen * 0.08,
        flexDirection: 'column',
       // backgroundColor:'green',
    },
    //view thông tin lịch sử rút tiền
    view_lichsu_ruttien:{
        width: width_screen * 0.88,
        height: height_screen * 0.1445, 
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        flexDirection:'row',
        marginBottom: width_screen * 0.017
    },
     //view thông tin lịch sử bán trả hàng
     view_lichsu_bantrahang:{
        width: width_screen * 0.88,
        height: height_screen * 0.174, 
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        flexDirection:'row',
        marginBottom: width_screen * 0.017
    },
    // view hình ảnh
    view_img:{
        width: width_screen * 0.2,
        height: height_screen * 0.174, 
        alignItems:'center',
        //backgroundColor:'yellow',
    },
    //hình ảnh
    img_ruttien:{
        width: width_screen * 0.123,//46
        height: height_screen * 0.06,//46 
        marginTop: width_screen * 0.022//9
        
    },
    // view thông tin 
    view_tt:{
        width: width_screen * 0.625,
        height: height_screen * 0.174, 
        flexDirection:'column',
       // backgroundColor:'red',

    },
    // view thông tin nhỏ
    view_nho:{
        flexDirection:'row', 
        justifyContent:'space-between',
        marginTop: width_screen * 0.015//6
    },
    //text nhạt màu
    text_nhat:{
        color: '#000000',
        fontSize: 14,
        fontWeight: '500'
    },
    //text ngày tháng năm
    text_date: {
        color: 'rgba(0, 0, 0, 0.8)',
        fontWeight: '500',
        fontSize: 12,
    },
    //text số tiền rút
    text_sotienrut:{
        color: '#BE7229',
        fontWeight: '500',
        fontSize: 14,
    },
    //text đạm màu
    text_dam:{
        color: '#000000',
        fontWeight: '500',
        fontSize: 14,
    },
    // text trạng thái
    text_state:{
        color: '#19A538',
        fontWeight: '500',
        fontSize: 14,
    },
    //text mã đơn 
    text_madon:{
        color: '#000000',
        fontWeight: '500',
        fontSize: 14,
        // marginLeft:width_screen * 0.125
    }

})
export default styles
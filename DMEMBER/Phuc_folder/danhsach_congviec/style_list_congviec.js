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
    //text lịch sử
    textlistcv: {
        fontSize: 21,
        color: '#000000',
        fontWeight: '500',
        marginLeft:39
    },
    //icon_back
    icon_back: {
        width: width_screen * 0.080,//28
        height: height_screen * 0.040, //28
    },
    view_list_cv: {
        flex: 1,
        width: width_screen * 0.90,
        // height: height_screen * 0.88,
        // marginLeft: width_screen * 0.06,
        // marginTop: width_screen * 0.08,
        flexDirection: 'column',
       // backgroundColor:'green',
    },
    //view thanh tìm kiếm
    view_thanhsearch: {
        width: width_screen * 0.80,
        height: height_screen * 0.06,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 32
    },
    //icon_search
    icon_search: {
        width: width_screen * 0.053,//23
        height: height_screen * 0.026, //23
        marginLeft: width_screen * 0.032,//13
        marginRight: width_screen * 0.025,//13
    },
    //input search
    input_search: {
        width: width_screen * 0.68,
        height: height_screen * 0.06,
        //backgroundColor:'red',
        color: '#000000',
        borderRadius: 10,
        fontSize: 14,
        fontWeight: '400'

    },
    //icon_delete
    icon_delete: {
        width: width_screen * 0.066,//28
        height: height_screen * 0.035, //28
        marginLeft: width_screen * 0.024
    },
    // 2 button 
    view_2button: {
        width: width_screen * 0.88,
        height: height_screen * 0.060,
        backgroundColor: '#FFFFFF',
        marginTop: 25,
        borderRadius: 45,
        flexDirection: 'row',
        alignItems: 'center',
    },
    //button 1
    button1: {
        width: width_screen * 0.50,
        height: height_screen * 0.060,
        backgroundColor: '#000000',
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //text btn 1
    text_btn1: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 15
    },
    //text btn 2
    text_btn2: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 15,
        marginLeft: width_screen * 0.073
    },
    //view thông tin công việc
    view_tt_cv: {
        width: width_screen * 0.89,
        height: height_screen * 0.092,
        backgroundColor: '#FFFFFF',
        marginTop: width_screen * 0.024,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    //view tên, mã, date
    view_name_date_code: {
        width: width_screen * 0.61,
        height: height_screen * 0.059,
        // backgroundColor: 'red',
        marginLeft: 16
    },
    // text_name
    text_name: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 15,
    },
    //text code
    text_code: {
        color: '#C4C4C4',
        fontWeight: '500',
        fontSize: 13,
    },
    //text date
    text_date: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 13,
        marginRight: 15
    },
    //view trạng thái
    view_state: {
        width: width_screen * 0.2,
        height: height_screen * 0.059,
        //backgroundColor: 'yellow',
        justifyContent: 'center',
    },
    text_state_done: {
        color: '#19A538',
        fontWeight: '500',
        fontSize: 12,
    },
    text_state_notdone: {
        color: '#BE7229',
        fontWeight: '500',
        fontSize: 12,
    }

})
export default styles
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
    //icon_back
    icon_back: {
        width: width_screen * 0.080,//28
        height: height_screen * 0.040, //28
    },
    //text chi tiết công việc
    textlistcv: {
        fontSize: 21,
        color: '#000000',
        fontWeight: '500',
    },
    //icon_more
    icon_more: {
        width: width_screen * 0.039,//16
        height: height_screen * 0.030, //28
    },
    //view tổng 
    view_list_cv: {
        flex: 1,
        width: width_screen * 0.90,
        height: height_screen * 0.88,
        // marginLeft: width_screen * 0.06,
        // marginTop: width_screen * 0.08,
        flexDirection: 'column',
        // backgroundColor: 'green',
    },
    //view header
    view_hander: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: width_screen * 0.055
    },
    //text công việc
    text_congivec: {
        fontWeight: '400',
        fontSize: 15,
        color: '#000000',
        marginTop: 28
    },
    // view chi tiet cong việc
    view_ctcv: {
        height: height_screen * 0.066,//52
        backgroundColor: '#FFFFFF',
        marginTop: 16,
        justifyContent: 'center',
        borderRadius: 7
    },
    //text chung
    text_all: {
        fontWeight: '500',
        fontSize: 15,
        color: '#000000',
        marginLeft: 20
    },
    //view thời gian, trạng thái
    view_tg_tt: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between'
    },
    //text thời gian,trạng thái
    text_tg_tt: {
        width: width_screen * 0.429,//163
        fontWeight: '400',
        fontSize: 15,
        color: '#000000',
        // backgroundColor:'pink'
    },
    //view khugn thời gian, trạng thái
    view_khung_tg_tt: {
        // backgroundColor: '#000000',
        flexDirection: 'row',
        marginTop: 9,
        justifyContent: 'space-between'
    },
    //khung view thời gian + trạng thái
    khung_tg_tt: {
        width: width_screen * 0.429,//163
        height: height_screen * 0.060,//47
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    //text ngày tháng năm
    text_date: {
        fontWeight: '500',
        fontSize: 15,
        color: '#000000',
    },
    //text trang thái
    text_state: {
        fontWeight: '500',
        fontSize: 15,
        color: '#19A538',
    },
    //text mota
    text_mota: {
        fontWeight: 400,
        fontSize: 15,
        color: '#000000',
        marginTop: 16,
    },
    //view mota
    view_mota: {
        height: height_screen * 0.355,//277
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        alignItems: 'flex-start',
        marginTop: 16
    },
    //text_noidung_mota:
    text_noidung_mota: {
        fontWeight: '500',
        fontSize: 15,
        color: '#000000',
        marginTop: 17,
        marginLeft: 21,
        marginRight: 20,
        //backgroundColor:'pink'
    }
})
export default styles
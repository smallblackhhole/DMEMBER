import { StyleSheet, Dimensions } from 'react-native'

const {
    height: height_screen,
    width: width_screen
} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5E5E5",
    },
    //view tổng 
    view_filter: {
        flex: 1,
        width: width_screen * 0.88,
        marginLeft: width_screen * 0.06,
        marginTop: width_screen * 0.02,
        flexDirection: 'column',
        // backgroundColor: 'pink',
    },
    // text Chọn chi nhánh cần xem
    text_ccncx: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 16,
    },
    //view icon out
    view_icon_out: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        // backgroundColor:'pink',
        marginTop: 20,
        width: width_screen * 0.95,
    },
    //icon out
    img_icon_out: {
        width: width_screen * 0.040,
        height: height_screen * 0.020,
    },
    //danh sách thả xuống dropdown
    dropdown: {
        height: height_screen * 0.059,
        marginTop: 15,
        borderRadius: 10,
        padding: 20,
        backgroundColor: '#FFFFFF'
    },
    //vị trí item trong danh sách sổ xuống
    item: {
        padding: 15,
    },
    //text trong danh sách thả xuống
    textItem: {
        fontSize: 15,
        color: '#000000'
    },
    //text ở dropdown ngoài
    placeholderStyle: {
        fontSize: 15,
        color: '#000000'
    },
    //text khi chọn xuất hiện ngoài dropdown
    selectedTextStyle: {
        fontSize: 16,
        color: '#000000'
    },
    text_cpb: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 16,
        marginTop: 15,
        // backgroundColor:'red'
    },
    //view 4 button
    view_4_button: {
        width: width_screen * 0.80,
        // height: height_screen * 0.88,
        height: height_screen * 0.13,
        // backgroundColor:'green',
        marginTop: 15,
        flexDirection: 'column',
    },
    //view 2 button trên
    view_2btn_tren: {
        width: width_screen * 0.80,
        height: height_screen * 0.059,
        // backgroundColor:'#000000',
        flexDirection: 'row',
    },
    //btn 1
    btn1: {
        width:  width_screen * 0.41,//158
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    btn2: {
        width: width_screen * 0.36,//140
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },

    //view 2 button dưới
    view_2btn_duoi: {
        marginTop: 10,
        width: width_screen * 0.80,
        height: height_screen * 0.059,
        // backgroundColor:'#000000',
        flexDirection: 'row',
    },
    //btn 3 
    btn3: {
        width: width_screen * 0.32,//121
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    //btn 4
    btn4: {
        width: width_screen * 0.32,//121
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        alignItems: 'center',
        marginLeft: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },

    //text btn
    text_btn: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 15
    },
    //màu button khi được nhấn vào
    selectedButton: {
        borderColor: '#1151F5',
    },
    // view thời gian 
    view_date: {
        // height: height_screen * 0.88,
        height: height_screen * 0.1,
        // backgroundColor:'green',
        marginTop: 15,
        flexDirection: 'row',
    },
    //view từ ngày
    view_tungay: {
        flex: 1.7,
        // backgroundColor:'green',

    },
    //view đến ngày
    view_denngay: {
        flex: 1,
        //backgroundColor:'pink',
    },
    //text date
    text_date: {
        color: '#B3B3B3',
        fontWeight: '400',
        fontSize: 15
    },
    //img date
    img_date: {
        width: width_screen * 0.045,//18,
        height: height_screen * 0.021,
        marginLeft: 11
    },
    //Button Lưu
    btn_save: {
        width: width_screen * 0.70,
        height: height_screen * 0.070,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 20
    }

})
export default styles
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    //view tổng search
    view_sreach: {
        flex: 1,
        width: '88%',
        marginLeft: '6%',
        marginTop: '8%',
        flexDirection: 'column',
        //backgroundColor:'red',
    },
    //view search
    view_thanhsearch:{
        width: '85%',
        height: 56,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:10,
    },
    //icon_search
    icon_search:{
        width: 25,
        height: 25,
        marginLeft:13,
        marginRight:10
    },
    //input search
    input_search:{
        width: '91%',
        height: 56,
        backgroundColor:'#FFFFFF',
        color:'#000000',
        borderRadius:10,
        fontSize: 15,
        fontWeight:'400'
        
    },
    //icon_delete
    icon_delete:{
        width:  15,
        height: 15,
        marginLeft:13
    },
    //view tìm kiếm gần đây
    view_tkgd:{
        width:'100%',
        height:20,
        // backgroundColor:'#FFFFFF',
         marginTop:10,
         flexDirection: 'row',
         justifyContent: 'space-between',
    },
    // text tìm kiếm gần đây
    text_tkgd:{
        color:'#000000',
        fontSize:15,
        fontWeight:'500'
    },
    //text xóa
    text_xoa:{
        color:'#EE2525',
        fontSize:15,
        fontWeight:'500'
    },
    //lịch sử tìm kiếm
    lichsu_search:{
        width:'100%',
        height:39,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        marginTop:9
    },
    //icon lịch sử tìm kiếm
    icon_lichsu:{
        width:  20,
        height: 20,
        marginLeft:10
    },
    //text lịch sử tìm kiếm
    text_lichsu:{
        fontSize: 15,
        fontWeight:'400',
        color:'#000000',
        marginLeft:19,
    },
    // text kết quả liên quan
    text_kqlq:{
        color:'#000000',
        fontSize:15,
        fontWeight:'500',
        marginTop:10,
    },
    //sản phẩm đã được tìm kiếm
    sp_search:{
        width: 174,
        height: 220,
        backgroundColor:'#FFFFFF',
        marginTop:16,
         borderRadius:10,
         flexDirection:'column',
         alignItems:'center'
    },
    //image sản phẩm
    img_all: {
        position: 'relative',
        justifyContent: 'flex-start',
    },
    img_sp:{
        width: 132,
        height: 130,
    },
    img_corner: {
        position: 'absolute',
        top: 6,
        right: -15,
    },
    img_cornerIcon: {
        width: 25,
        height: 29,
    },

    //tên sản phẩm
    ten_sp:{
        width:144,
        height:38,
        color:'#000000',
        fontSize:11,
        fontWeight:'500',
        marginTop:7,
        textAlign:'center',
    },
    //view tổng 2 text 1 button 
    view_text_btn:{
        flexDirection: 'row',
        width:150,
        height:40,
        marginLeft:20, 
        marginTop:5, 
       // backgroundColor:'red',
        justifyContent: 'space-between',
    },
    // giá bán
    gia_ban: {
        color: '#000000',
        fontSize: 10,
        fontWeight:'400',
    },
    //gia chiet khấu,
    gia_chietkhau: {
        color: '#000000',
        fontSize: 10,
        fontWeight:'400',
    },
    // button thêm vào giỏ hàng
    add_cart: {
        width: 27,
        height: 27,
        backgroundColor: '#000000',
        borderRadius: 50,
        alignItems: 'center',
        marginTop:10
    },
})
export default styles
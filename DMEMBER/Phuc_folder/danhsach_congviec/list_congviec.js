import { Image, Text, View, TextInput, TouchableOpacity,Dimensions } from 'react-native'
import React, { useState } from 'react';
import styles from './style_list_congviec'

const List_congviec = () => {

  const {
    height: height_screen,
    width: width_screen
} = Dimensions.get('window');
//
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexChanged = (index) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* view tổng nội dung */}
      <View style={styles.view_list_cv}>
        {/* view header */}
      <View style={{ flexDirection:'row', marginTop: width_screen * 0.055}}>
      <Image source={require('../../image/back_p.png')} style={styles.icon_back} />
        <Text style={styles.textlistcv}>Danh sách công việc</Text>
      </View>
        {/* thanh search */}
        <View style={styles.view_thanhsearch}>
          {/* icon search */}
          <Image source={require('../../image/ei_search.png')} style={styles.icon_search} />
          {/* input search */}
          <TextInput style={styles.input_search}
            placeholder="Tên công việc/ Người tạo"
            placeholderTextColor='color: rgba(0, 0, 0, 0.5);'
          />
          {/* icon delete */}
          <Image source={require('../../image/iocn_filtter.png')} style={styles.icon_delete} />
        </View>
        {/* view 2 BUTTON */}
        <View style={styles.view_2button}>
          <TouchableOpacity style={styles.button1} >
            <Text style={styles.text_btn1}>Việc được giao</Text>
          </TouchableOpacity>
          <Text style={styles.text_btn2}>Việc đã giao</Text>
        </View>
        {/* view list */}
        <View style={{marginTop: 10}}>
          {/* view tổng thông tin  */}
          <View style={styles.view_tt_cv}>
            {/* view tên mã ngày tháng năm */}
            <View style={styles.view_name_date_code}>
              {/* text tên */}
              <Text style={styles.text_name}>Set camera A69 - Nông</Text>
              {/* view 2 text */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                {/* text 1: mã */}
                <Text style={styles.text_code}>#1603</Text>
                {/* view text 2 :ngày tháng năm */}
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.text_date}>Kết thúc:</Text>
                  <Text style={styles.text_date}>18/05/2022</Text>
                </View>
              </View>
            </View>
            {/* view trạng thái */}
            <View style={styles.view_state}>
              {/* text trạng thái  */}
              <Text style={styles.text_state_done} >Hoàn thành</Text>
            </View>
          </View>
          {/* view tổng thông tin  */}
          <View style={styles.view_tt_cv}>
            {/* view tên mã ngày tháng năm */}
            <View style={styles.view_name_date_code}>
              {/* text tên */}
              <Text style={styles.text_name}>Set camera A69 - Nông</Text>
              {/* view 2 text */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                {/* text 1: mã */}
                <Text style={styles.text_code}>#1603</Text>
                {/* view text 2 :ngày tháng năm */}
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.text_date}>Kết thúc:</Text>
                  <Text style={styles.text_date}>18/05/2022</Text>
                </View>
              </View>
            </View>
            {/* view trạng thái */}
            <View style={styles.view_state}>
              {/* text trạng thái  */}
              <Text style={styles.text_state_notdone} >Đang xử lí</Text>
            </View>
          </View>
          {/* view tổng thông tin  */}
          <View style={styles.view_tt_cv}>
            {/* view tên mã ngày tháng năm */}
            <View style={styles.view_name_date_code}>
              {/* text tên */}
              <Text style={styles.text_name}>Set camera A69 - Nông</Text>
              {/* view 2 text */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                {/* text 1: mã */}
                <Text style={styles.text_code}>#1603</Text>
                {/* view text 2 :ngày tháng năm */}
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.text_date}>Kết thúc:</Text>
                  <Text style={styles.text_date}>18/05/2022</Text>
                </View>
              </View>
            </View>
            {/* view trạng thái */}
            <View style={styles.view_state}>
              {/* text trạng thái  */}
              <Text style={styles.text_state_notdone} >Đang xử lí</Text>
            </View>
          </View>
        </View>

      </View>
    </View>
  )
}

export default List_congviec

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';
import styles from './style_filter'

const Filter_congviec = () => {

  const data = [
    { label: 'Tất cả chi nhánh', value: '1' },
    { label: 'Item 2', value: '2' },
  ];

  const [value, setValue] = useState(null);
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  //đổi màu button
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <ScrollView style={styles.container}>
      {/* icon X */}
      <View style={styles.view_icon_out}>
        <Image source={require('../../image/icon_outX.png')} style={styles.img_icon_out} />
      </View>
      {/* view tổng */}
      <View style={styles.view_filter}>
        {/* text chọn chi nhánh cần xem */}
        <Text style={styles.text_ccncx}>Chọn chi nhánh cần xem</Text>
        {/* danh sách thả xuống  ...v */}
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Tất cả chi nhánh"
          searchPlaceholder="Tìm kiếm..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderItem={renderItem}
        />
        {/* text chọn phòng ban */}
        <Text style={styles.text_cpb}>Chọn phòng ban</Text>
        {/* danh sách thả xuống  ...v */}
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Tất cả chi nhánh"
          searchPlaceholder="Tìm kiếm..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderItem={renderItem}
        />
        {/* text loại công việc */}
        <Text style={styles.text_cpb}>Loại công việc</Text>
        {/* danh sách thả xuống  ...v */}
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Tất cả chi nhánh"
          searchPlaceholder="Tìm kiếm..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderItem={renderItem}
        />
        {/* text trạng thái công việc */}
        <Text style={styles.text_cpb}>Loại công việc</Text>
        {/* danh sách thả xuống  ...v */}
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Tất cả chi nhánh"
          searchPlaceholder="Tìm kiếm..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderItem={renderItem}
        />
        {/* text trạng thái công việc */}
        <Text style={styles.text_cpb}>Trạng thái công việc</Text>
        {/* view 4 button  */}
        <View style={styles.view_4_button}>
          {/* view 2 button trên */}
          <View style={styles.view_2btn_tren}>
            {/* button 1 */}
            <TouchableOpacity
              style={[
                styles.btn1,
                selectedButton === 'button1' && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress('button1')}
            >
              <Text style={styles.text_btn}>Đã hoàn thành</Text>
            </TouchableOpacity>
            {/* button 2 */}
            <TouchableOpacity
              style={[
                styles.btn2,
                selectedButton === 'button2' && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress('button2')}
            >
              <Text style={styles.text_btn}>Đã xác nhận</Text>
            </TouchableOpacity>
          </View>
          {/* view 2 button dưới */}
          <View style={styles.view_2btn_duoi}>
            {/* button 3 */}
            <TouchableOpacity
              style={[
                styles.btn3,
                selectedButton === 'button3' && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress('button3')}
            >
              <Text style={styles.text_btn}>Đang xử lí</Text>
            </TouchableOpacity>
            {/* button 4 */}
            <TouchableOpacity
              style={[
                styles.btn4,
                selectedButton === 'button4' && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress('button4')}
            >
              <Text style={styles.text_btn}>Chờ xử lí</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* text thời gian */}
        <Text style={styles.text_cpb}>Thời gian</Text>
        {/* view date */}
        <View style={styles.view_date}>
          {/* view từ ngày */}
          <View style={styles.view_tungay}>
            <Text style={styles.text_btn}>Từ ngày</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text_date}>25/05/2022</Text>
              <Image source={require('../../image/akar-icons_calendar.png')} style={styles.img_date} />
            </View>
          </View>
          {/* view đến ngày */}
          <View style={styles.view_denngay}>
            <Text style={styles.text_btn}>Đến ngày</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text_date}>25/05/2022</Text>
              <Image source={require('../../image/akar-icons_calendar.png')} style={styles.img_date} />
            </View>
          </View>
        </View>
        {/* button Lưu */}
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <TouchableOpacity style={styles.btn_save}>
            <Text style={{ color: '#FFFFFF' }}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Filter_congviec

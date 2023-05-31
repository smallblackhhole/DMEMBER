import { Image, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react';
import styles from './style_chitiet_cv'

const Chitiet_congviec = () => {

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
            {/* view tổng  */}
            <View style={styles.view_list_cv}>
                <View style={styles.view_hander}>
                    <Image source={require('../../image/back_p.png')} style={styles.icon_back} />
                    <Text style={styles.textlistcv}>Chi tiết công việc</Text>
                    <Image source={require('../../image/icon_more.png')} style={styles.icon_more} />
                </View>
                {/* text công việc */}
                <Text style={styles.text_congivec}>Công việc</Text>
                {/* view chi tiet công việc */}
                <View style={styles.view_ctcv}>
                    <Text style={styles.text_all}>Đưa TV lên phòng họp VIP7</Text>
                </View>
                {/* view thời gian, trạng thái */}
                <View style={styles.view_tg_tt}>
                    <Text style={styles.text_tg_tt}>Thời gian</Text>
                    <Text style={styles.text_tg_tt}>Trạng thái</Text>
                </View>
                {/* view khung thời gian, trạng thái */}
                <View style={styles.view_khung_tg_tt}>
                    {/* thơi gian */}
                    <View style={styles.khung_tg_tt}>
                        {/* text ngay tháng năm */}
                        <Text style={styles.text_date}>24/05/2022</Text>
                    </View>
                    {/* trạng thái */}
                    <View style={styles.khung_tg_tt}>
                        <Text style={styles.text_state}>Hoàn thành</Text>
                    </View>
                </View>
                {/* text mô tả */}
                <Text style={styles.text_mota}>Mô tả</Text>
                <View style={styles.view_mota}>
                    <Text style={styles.text_noidung_mota}>
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s</Text>
                </View>
            </View>
        </View>
    )
}

export default Chitiet_congviec

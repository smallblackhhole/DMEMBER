import { Image, Text, View } from 'react-native'
import React from 'react'
import styles from './style_lichsu_all'
import ButtonBack from '../Component/ButtonBack'
const Lichsu_ruttien = () => {
    return (
        <View style={styles.container}>
            {/* text */}
            <View style={styles.headerBar}>
                <ButtonBack 
                icon={require('../Assets/Back.png')}
                title={"Lịch sử rút tiền"}/>
            </View>
            {/* view tổng lịch sử  */}
            <View style={styles.view_lichsu}>
                {/* view rút tiền */}
                <View style={styles.view_lichsu_ruttien}>
                    {/* view image */}
                    <View style={styles.view_img}>
                        <Image source={require('../Assets/icon_lichsu_ruttien.png')} style={styles.img_ruttien} />
                    </View>
                    {/* view thông tin rút tiền  */}
                    <View style={styles.view_tt}>
                        {/* thong tin 1 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Ngày thực hiện:</Text>
                            <Text style={styles.text_date}>23/09/2021 21:03</Text>
                        </View>
                        {/* thong tin 2 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Số tiền:</Text>
                            <Text style={styles.text_sotienrut}>5,000,000</Text>
                        </View>
                        {/* thong tin 3 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Rút về:</Text>
                            <Text style={styles.text_dam}>Techcombank</Text>
                        </View>
                        {/* thong tin 4 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Trạng thái:</Text>
                            <Text style={styles.text_state}>Hoàn thành</Text>
                        </View>

                    </View>
                </View>
                {/* view rút tiền */}
                <View style={styles.view_lichsu_ruttien}>
                    {/* view image */}
                    <View style={styles.view_img}>
                        <Image source={require('../Assets/icon_lichsu_ruttien.png')} style={styles.img_ruttien} />
                    </View>
                    {/* view thông tin rút tiền  */}
                    <View style={styles.view_tt}>
                        {/* thong tin 1 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Ngày thực hiện:</Text>
                            <Text style={styles.text_date}>23/09/2021 21:03</Text>
                        </View>
                        {/* thong tin 2 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Số tiền:</Text>
                            <Text style={styles.text_sotienrut}>5,000,000</Text>
                        </View>
                        {/* thong tin 3 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Rút về:</Text>
                            <Text style={styles.text_dam}>Techcombank</Text>
                        </View>
                        {/* thong tin 4 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Trạng thái:</Text>
                            <Text style={styles.text_state}>Hoàn thành</Text>
                        </View>

                    </View>
                </View>
                {/* view rút tiền */}
                <View style={styles.view_lichsu_ruttien}>
                    {/* view image */}
                    <View style={styles.view_img}>
                        <Image source={require('../Assets/icon_lichsu_ruttien.png')} style={styles.img_ruttien} />
                    </View>
                    {/* view thông tin rút tiền  */}
                    <View style={styles.view_tt}>
                        {/* thong tin 1 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Ngày thực hiện:</Text>
                            <Text style={styles.text_date}>23/09/2021 21:03</Text>
                        </View>
                        {/* thong tin 2 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Số tiền:</Text>
                            <Text style={styles.text_sotienrut}>5,000,000</Text>
                        </View>
                        {/* thong tin 3 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Rút về:</Text>
                            <Text style={styles.text_dam}>Techcombank</Text>
                        </View>
                        {/* thong tin 4 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Trạng thái:</Text>
                            <Text style={styles.text_state}>Hoàn thành</Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Lichsu_ruttien

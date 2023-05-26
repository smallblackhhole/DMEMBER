import { Image, Text, View } from 'react-native'
import React from 'react'
import styles from './style_lichsu_all'
const Lichsu_bantrahang = () => {
    return (
        <View style={styles.container}>
            {/* text */}
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.textlichsu}>Lịch sử bán trả hàng</Text>
            </View>

            {/* view tổng lịch sử  */}
            <View style={styles.view_lichsu}>
                {/* view lịch sử bán trả hàng  */}
                <View style={styles.view_lichsu_bantrahang}>
                    {/* view image */}
                    <View style={styles.view_img}>
                        <Image source={require('../../image/icon_lichsu_bantrahang.png')} style={styles.img_ruttien} />
                    </View>
                    {/* view thông tin rút tiền  */}
                    <View style={styles.view_tt}>
                        {/* thong tin 1 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_dam}>Mã đơn hàng:</Text>
                            <Text style={styles.text_madon}>002220321D9M</Text>
                        </View>
                        {/* thong tin 2 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Người tạo:</Text>
                            <Text style={styles.text_sotienrut}>CS_NGUYENNHUNG</Text>
                        </View>
                        {/* thong tin 3 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Tổng tiền:</Text>
                            <Text style={styles.text_dam}>1,536,000</Text>
                        </View>
                        {/* thong tin 4 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Chiết khấu:</Text>
                            <Text style={styles.text_state}>998,000</Text>
                        </View>
                         {/* thong tin 5 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Thực thu:</Text>
                            <Text style={styles.text_state}>537,000</Text>
                        </View>
                    </View>
                </View>      
                  {/* view lịch sử bán trả hàng  */}
                  <View style={styles.view_lichsu_bantrahang}>
                    {/* view image */}
                    <View style={styles.view_img}>
                        <Image source={require('../../image/icon_lichsu_bantrahang.png')} style={styles.img_ruttien} />
                    </View>
                    {/* view thông tin rút tiền  */}
                    <View style={styles.view_tt}>
                        {/* thong tin 1 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_dam}>Mã đơn hàng:</Text>
                            <Text style={styles.text_madon}>002220321D9M</Text>
                        </View>
                        {/* thong tin 2 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Người tạo:</Text>
                            <Text style={styles.text_sotienrut}>CS_NGUYENNHUNG</Text>
                        </View>
                        {/* thong tin 3 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Tổng tiền:</Text>
                            <Text style={styles.text_dam}>1,536,000</Text>
                        </View>
                        {/* thong tin 4 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Chiết khấu:</Text>
                            <Text style={styles.text_state}>998,000</Text>
                        </View>
                         {/* thong tin 5 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Thực thu:</Text>
                            <Text style={styles.text_state}>537,000</Text>
                        </View>
                    </View>
                </View>      
                  {/* view lịch sử bán trả hàng  */}
                  <View style={styles.view_lichsu_bantrahang}>
                    {/* view image */}
                    <View style={styles.view_img}>
                        <Image source={require('../../image/icon_lichsu_bantrahang.png')} style={styles.img_ruttien} />
                    </View>
                    {/* view thông tin rút tiền  */}
                    <View style={styles.view_tt}>
                        {/* thong tin 1 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_dam}>Mã đơn hàng:</Text>
                            <Text style={styles.text_madon}>002220321D9M</Text>
                        </View>
                        {/* thong tin 2 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Người tạo:</Text>
                            <Text style={styles.text_sotienrut}>CS_NGUYENNHUNG</Text>
                        </View>
                        {/* thong tin 3 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Tổng tiền:</Text>
                            <Text style={styles.text_dam}>1,536,000</Text>
                        </View>
                        {/* thong tin 4 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Chiết khấu:</Text>
                            <Text style={styles.text_state}>998,000</Text>
                        </View>
                         {/* thong tin 5 */}
                        <View style={styles.view_nho}>
                            <Text style={styles.text_nhat}>Thực thu:</Text>
                            <Text style={styles.text_state}>537,000</Text>
                        </View>
                    </View>
                </View>             
            </View>
        </View>
    )
}

export default Lichsu_bantrahang

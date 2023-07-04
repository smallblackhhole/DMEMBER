import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ButtonBack from '../Component/ButtonBack';
import Products from '../Realm/Products';
import styles from './style_giohang';

// Tạo thành phần vuốt qua trái để hiện thùng rác xóa sản phẩm 
const RightSwipe = ({ productId, handleDeleteProduct }) => {
    return (
        <View style={styles.right_delete}>
            <TouchableOpacity style={styles.OptionBox} onPress={() => { handleDeleteProduct(productId) }}>
                <Image style={styles.xoa} source={require('../Assets/binCart.png')} />
            </TouchableOpacity>
        </View>
    );
};

// Tạo hàm handlerender để thay đổi số lượng từng sản phẩm trong giỏ hàng
const HandleRender = ({ item, handleDeleteProduct, UpdateQuantity, UpdatePrice }) => {
    // tạo biến khởi đầu cho numberCart là item.current được set số lượng từ màn hình Detail
    const [numberCart, setNumberCart] = useState(item.current);

    // hàm giảm số lượng sản phẩm
    const MinusQuantity = () => {
        if (numberCart > 1) {
            setNumberCart(numberCart - 1);
        }
    };

    // hàm tăng số lượng sản phẩm
    const PlusQuantity = () => {
        setNumberCart(numberCart + 1);

    };

    // sử dụng useEffect để cập nhật số lượng của từng sản phầm dựa theo id sản phẩm đó
    useEffect(() => {
        Realm.open({ schema: [Products] }).then((realm) => {
            realm.write(() => {
                const productToUpdate = realm.objectForPrimaryKey("Products", item.id);
                productToUpdate.current = numberCart;
            });
        });
        UpdateQuantity()
        UpdatePrice()
    }, [numberCart]);

    // render layout item
    return (
        <View style={styles.view_gh}>
            {/* item */}
            <Swipeable renderRightActions={() => <RightSwipe productId={item.id} handleDeleteProduct={handleDeleteProduct} />} >
                <View style={styles.view_sp}>
                    {/* image sản phẩm */}
                    <View style={styles.img_all}>
                        <Image source={item.imgproduct} style={styles.img_item} />
                        <View style={styles.img_corner}>
                            <Image source={item.tag} style={styles.img_cornerIcon} />
                        </View>
                    </View>
                    {/* view colum  */}
                    <View style={{ flexDirection: 'column', marginLeft: 15, }}>
                        {/* tên sản phẩm */}
                        <Text style={styles.ten_sp}>{item.nameproduct}</Text>
                        {/* view row */}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                {/* giá sản phẩm */}
                                <Text style={styles.gia_chietkhau}>Giá bán:{' '}
                                    <Text style={{ fontWeight: '600', color: '#BE7229' }}>{item.price}</Text>
                                </Text>
                                {/* chiết khấu sản phẩm */}
                                <Text style={styles.gia_chietkhau}>Chiết khấu:{' '}
                                    <Text style={{ fontWeight: '600', color: '#1151F5' }}>{item.dis}</Text>
                                </Text>
                            </View>
                            {/* // tăng giảm số lượng sản phẩm */}
                            <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 5 }}>
                                <TouchableOpacity style={styles.giam_sl} onPress={() => { MinusQuantity() }}>
                                    <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 17 }}>-</Text>
                                </TouchableOpacity>
                                <Text style={{ color: '#000000', fontWeight: '600', fontSize: 17, marginLeft: 13, marginRight: 13 }}>{numberCart}</Text>
                                {/* <Text style={{ color: '#000000', fontWeight: '600', fontSize: 17, marginLeft: 13, marginRight: 13 }}>{newcurrent}</Text> */}
                                <TouchableOpacity style={styles.giam_sl} onPress={() => { PlusQuantity() }}>
                                    <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 17 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Swipeable>
        </View>
    );
};

const GiohangScreen = () => {
    // tạo biến khởi đầu products là 1 mảng chứa tất cả sản phẩm được thêm từ màn hình Detail
    const [products, setProducts] = useState([]);
    const [Totalquantity, setTotalquantity] = useState(0);
    const [Totalprice, setTotalprice] = useState(0);
    const navigation = useNavigation();
    const [PriceToConfirm , setPriceToConfirm] = useState(0);

    // sử dụng useEffect để thêm sản phẩm vào Realm và thêm vào mảng hiển thị trên layout Giỏ hàng
    useEffect(() => {
        Realm.open({ schema: [Products] }).then((realm) => {
            const productList = realm.objects("Products");
            setProducts([...productList]);
            UpdateQuantity()
            UpdatePrice()
        });
    }, []);

    // Tạo hàm xóa sản phẩm trong giỏ hàng dựa theo id của sản phẩm đó
    const handleDeleteProduct = (productId) => {
        Realm.open({ schema: [Products] }).then((realm) => {
            realm.write(() => {
                const productToDelete = realm.objectForPrimaryKey("Products", productId);
                realm.delete(productToDelete);
            });
        });
        // cập nhật lại giỏ hàng sau khi xóa 
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
        UpdateQuantity()
        UpdatePrice()
    };

    // tạo hàm tính tổng và cập nhật lại số lượng sản phẩm có trong giỏ hàng
    const UpdateQuantity = () => {
        Realm.open({ schema: [Products] }).then((realm) => {
            const productList = realm.objects("Products");
            const AllquantityCart = productList.reduce((total, product) => total + product.current, 0);
            setTotalquantity(AllquantityCart);
        });
    }

    // tạo hàm tính tổng tiền và cập nhật lại tổng tiền sản phẩm trong giỏ hàng
    const UpdatePrice = () => {
        Realm.open({ schema: [Products] }).then((realm) => {
            const productList = realm.objects("Products");
            const AllpriceCart = productList.reduce((total, product) => {
                const price = parseFloat(product.price.replace(/,/g, ''));
                return total + (price * product.current);
            }, 0);
            const formattedPrice = AllpriceCart.toLocaleString();
            setTotalprice(formattedPrice);
            setPriceToConfirm(AllpriceCart);
        });
    };



    const renderItem = ({ item }) => {
        return <HandleRender
            item={item}
            handleDeleteProduct={handleDeleteProduct}
            UpdateQuantity={UpdateQuantity}
            UpdatePrice={UpdatePrice} />;
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerbar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Giỏ hàng"} />
            </View>
            {/* view tổng nội dung */}
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.tongtien_gh}>
                {/* //image bag */}
                <View style={{ flexDirection: 'row', margin: 20 }}>
                    <View>
                        <Image source={require('../Assets/BagCart.png')} />
                        <View style={styles.img_corner2}>
                            <Text style={{ color: 'white', fontSize: 12 }}>{Totalquantity}</Text>
                        </View>
                    </View>
                    <Text style={styles.text_tt}>{Totalprice}</Text>
                </View>
                <TouchableOpacity style={styles.button_tt} onPress={() => { navigation.navigate('PayComfirm', { products , PriceToConfirm , Totalquantity }) }}>
                    <Text style={styles.buttonText}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default React.memo(GiohangScreen);

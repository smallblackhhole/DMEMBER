import { StyleSheet, View, Text, Dimensions, Image, FlatList, SafeAreaView } from "react-native";
import ButtonBack from "../Component/ButtonBack";
const { width: WidthScreen } = Dimensions.get('window');
const { height: HeightScreen } = Dimensions.get('window');
import NewData from "./NewData";
const News = () => {
    const renderItem = ({ item }) => {
        // console.log(item);
        return (
            <View style={{alignItems : "center" }}>
                <View style={style.AnotherNewBord}>
                    <View style={style.flexAnotherNew1}>
                        <Text style={style.textNew1}>{item.titleNew}</Text>
                        <Text style={style.textNew2}>{item.dateNew}</Text>
                    </View>
                    <View style={style.flexAnotherNew2}>
                        <Image style={{ width: '100%', height: '100%' }} resizeMode="stretch" source={item.imgNew} />
                    </View>
                </View>
            </View>
        );
    }
    return (
        <SafeAreaView style={style.container}>
            <View style={style.headerbar}>
                <ButtonBack
                    icon={require('../Assets/Back.png')}
                    title={"Tin Tức"} />
            </View>
            <View style={style.ViewFull}>
                <View style={style.titleView}>
                    <Text style={style.titleText}>Tin mới nhất</Text>
                </View>
                <View style={style.NewView}>
                    <View style={style.NewBord}>
                        <View style={style.flexNew1}>
                            <Image style={{ width: '100%', height: '100%' }} resizeMode="stretch" source={require('../Assets/New.png')} />
                        </View>
                        <View style={style.flexNew2}>
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>DSTORE - Startup 32 chi nhánh Hồ Chí Minh</Text>
                            <Text>22:46 12/03/2022</Text>
                        </View>
                    </View>
                </View>
                <View style={style.titleView}>
                    <Text style={style.titleText}>Tin khác</Text>
                </View>
                <View style={{flex : 1}}>
                    <FlatList
                        data={NewData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default News;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBAE35",
    },
    headerbar: {
        height: HeightScreen * 0.07,
        justifyContent: 'center',
    },
    ViewFull: {
        flex: 1,
    },
    titleText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 24,
        marginLeft: 15
    },
    titleView: {
        width: WidthScreen,
        height: HeightScreen * 0.05,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    NewView: {
        width: WidthScreen,
        height: HeightScreen * 0.3,
        alignItems: "center",
    },
    NewBord: {
        width: '90%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: 'white'
    },
    flexNew1: {
        flex: 7,
    },
    flexNew2: {
        flex: 3,
        padding: 10
    },
    AnotherNewView: {
        flex : 1,
        alignItems: "center",
    },
    AnotherNewBord: {
        width: '90%',
        height: HeightScreen*0.12,
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: 'white',
        marginTop: 10
    },
    flexAnotherNew1: {
        flex: 7,
    },
    flexAnotherNew2: {
        flex: 3,
    },
    textNew1: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        margin : 10
    },
    textNew2: {
        position: "absolute",
        bottom: 0,
        margin : 10
    }
});
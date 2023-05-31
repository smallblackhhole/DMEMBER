import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryScreen from './HistoryScreen'
import HomeScreen from "./HomeScreen";
import ShopScreen from "./ShopScreen";
import TranfersScreen from "./TranfersScreen";
import AccountScreen from "./AccountScreen";
import WalletDcash from "../WalletScreen/WalletDcash";
import CartScreen from "../CartScreen.js/CartScreen";
import Shareapp from "../AccountFunction/Shareapp";
import Security from "../AccountFunction/Security";
import Team from "../AccountFunction/Team";
import Map from "../AccountFunction/Map";
import Report from "../AccountFunction/Report";
import GiohangScreen from "../gio_hang/GiohangScreen";
import DetailTeam from "../AccountFunction/DetailTeam";
import DetailScreen from "../DetailProduct/DetailScreen";
import CreateTopicScreen from "../CreateTopic/CreateTopicScreen";
import Payment from "../Payment_confirm/PayConfirm";
import SearchScreen from "../SearchScreen/SearchScreen";
import Login from "../login/Login";
import Quenmatkhau from "../login/quenmatkhau";
import Screnn from "../Screen/Screen";
import Register from "../login/Register";
const Tab = createBottomTabNavigator();


const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Screnn" component={Screnn} options={{
          headerShown: false
        }} />
      <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Quenmatkhau" component={Quenmatkhau} options={{
          headerShown: false
        }} />
         <Stack.Screen name="Register" component={Register} options={{
          headerShown: false
        }} />
        <Stack.Screen name="MenuScreen" component={MenuAccount} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Dcash" component={WalletDcash} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Shareapp" component={Shareapp} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Security" component={Security} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Map" component={Map} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Team" component={Team} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Report" component={Report} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="DetailTeam" component={DetailTeam} options={{
          headerShown: false
        }} />
        <Stack.Screen name="CreateTopic" component={CreateTopicScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Cart2" component={GiohangScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="PayComfirm" component={Payment} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const MenuAccount = () => {
  const [focusBottom, setfocusBottom] = useState('Home');

  useEffect(() => {
    setfocusBottom('Home');
  }, []);

  return (

    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: () => (
          <View style={styles.clickbottom}></View>
        ),
        tabBarStyle: {
          height: '8%',
          backgroundColor: 'white',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          position: 'absolute',
          bottom: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            focusBottom === 'Home' ? (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.clickbottom}></View>
                <Image style={styles.ImageIcon} source={require('../Assets/Home1.png')} />
              </View>
            ) : (
              <Image
                style={styles.ImageIcon}
                resizeMode="contain"
                source={require('../Assets/Home.png')}
              />
            )
          ),
          tabBarLabel: () => null,
          headerShown: false,
        }}
        listeners={{
          focus: () => setfocusBottom('Home'),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: () => (
            focusBottom === 'Shop' ? (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.clickbottom}></View>
                <Image style={styles.ImageIcon} source={require('../Assets/Shop1.png')} />
              </View>
            ) : (
              <Image
                style={styles.ImageIcon}
                resizeMode="contain"
                source={require('../Assets/Shop.png')}
              />
            )
          ),
          tabBarLabel: () => null,
          headerShown: false,
        }}
        listeners={{
          focus: () => setfocusBottom('Shop'),
        }}
      />
      <Tab.Screen
        name="Tranfers"
        component={TranfersScreen}
        options={{
          tabBarIcon: () => (
            focusBottom === 'Tranfers' ? (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.clickbottom}></View>
                <Image style={styles.ImageIcon} source={require('../Assets/Tranfers1.png')} />
              </View>
            ) : (
              <Image
                style={styles.ImageIcon}
                resizeMode="contain"
                source={require('../Assets/Tranfers.png')}
              />
            )
          ),
          tabBarLabel: () => null,
          headerShown: false,
        }}
        listeners={{
          focus: () => setfocusBottom('Tranfers'),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: () => (
            focusBottom === 'History' ? (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.clickbottom}></View>
                <Image style={styles.ImageIcon} source={require('../Assets/Group1.png')} />
              </View>
            ) : (
              <Image
                style={styles.ImageIcon}
                resizeMode="contain"
                source={require('../Assets/Group.png')}
              />
            )
          ),
          tabBarLabel: () => null,
          headerShown: false,
        }}
        listeners={{
          focus: () => setfocusBottom('History'),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: () => (
            focusBottom === 'Account' ? (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.clickbottom}></View>
                <Image style={styles.ImageIcon} source={require('../Assets/Account1.png')} />
              </View>
            ) : (
              <Image
                style={styles.ImageIcon}
                resizeMode="contain"
                source={require('../Assets/Account.png')}
              />
            )
          ),
          tabBarLabel: () => null,
          headerShown: false,
        }}
        listeners={{
          focus: () => setfocusBottom('Account'),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  ImageIcon: {
    position: "absolute",
    width: 25,
    height: 25,
  },
  clickbottom: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    justifyContent: "center",
    borderRadius: 10,
    transform: [{ rotate: '45deg' }]
  }
});
export default MyStack;


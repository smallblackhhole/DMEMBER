import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HistoryScreen from './HistoryScreen'
import HomeScreen from "./HomeScreen";
import ShopScreen from "./ShopScreen";
import TranfersScreen from "./TranfersScreen";
import AccountScreen from "./AccountScreen";
const Tab = createBottomTabNavigator();
const MenuAccount = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: '8%',
            backgroundColor: 'white',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            position: "absolute",
            bottom: 0,
          }
        }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: (focused, tintColor, size) => (

            <Image style={styles.ImageIcon}
              resizeMode="contain"
              source={require('../Assets/Home.png')} />
          ),
          tabBarLabel: () => { return null },
          headerShown: false
        }} />
        <Tab.Screen name="Shop" component={ShopScreen} options={{
          tabBarIcon: (focused, tintColor) => (
            <Image style={styles.ImageIcon}
              resizeMode="contain"
              source={require('../Assets/Shop.png')} />
          ),
          tabBarLabel: () => { return null },
          headerShown: false
        }} />
        <Tab.Screen name="Tranfers" component={TranfersScreen} options={{
          tabBarIcon: (focused, tintColor) => (
            <Image style={styles.ImageIcon}
              resizeMode="contain"
              source={require('../Assets/Tranfers.png')} />
          ),
          tabBarLabel: () => { return null },
          headerShown: false
        }} />
        <Tab.Screen name="History" component={HistoryScreen} options={{
          tabBarIcon: (focused, tintColor) => (
            <Image style={styles.ImageIcon}
              resizeMode="contain"
              source={require('../Assets/Group.png')} />
          ),
          tabBarLabel: () => { return null },
          headerShown: false
        }} />
        <Tab.Screen name="Account" component={AccountScreen} options={{
          tabBarIcon: (focused, tintColor) => (
            <Image style={styles.ImageIcon}
              resizeMode="contain"
              source={require('../Assets/Account.png')} />
          ),
          tabBarLabel: () => { return null },
          headerShown: false
        }} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  ImageIcon: {
    width: 30,
    height: 25
  }
});
export default MenuAccount;


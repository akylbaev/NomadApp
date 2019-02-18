import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  AsyncStorage
} from "react-native";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import Icons from "react-native-vector-icons/Ionicons";

import SignIn from "./view/SignIn";
import SignUp from "./view/SignUp";

import Home from "./view/Home";
import Insurance from "./view/Insurance";
import Office from "./view/Office";
import Menu from "./view/Menu";

import AuthLoading from "./view/AuthLoading";

const AuthStackNavigator = createStackNavigator({
  SignIn: SignIn,
  SignUp: SignUp
});

const HomeStackNavigator = createStackNavigator({
  Home: Home
});

const InsuranceStackNavigator = createStackNavigator({
  Insurance: Insurance
});

const OfficeStackNavigator = createStackNavigator({
  Office: Office
});

const MenuStackNavigator = createStackNavigator({
  Menu: Menu
});

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarLabel: "Главная",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/icons/home.png")}
            style={{ width: 25, height: 25, tintColor: tintColor }}
          />
        )
      }
    },
    Insurance: {
      screen: InsuranceStackNavigator,
      navigationOptions: {
        tabBarLabel: "Купить",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/icons/calc.png")}
            style={{ width: 24, height: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Office: {
      screen: OfficeStackNavigator,
      navigationOptions: {
        tabBarLabel: "Офисы",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/icons/office.png")}
            style={{ width: 26, height: 26, tintColor: tintColor }}
          />
        )
      }
    },
    Menu: {
      screen: MenuStackNavigator,
      navigationOptions: {
        tabBarLabel: "Меню",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/icons/menu.png")}
            style={{ width: 24, height: 24, tintColor: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#fba603"
    }
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoading,
  Auth: AuthStackNavigator,
  App: AppTabNavigator
});

const App = createAppContainer(AppSwitchNavigator);

export default App;

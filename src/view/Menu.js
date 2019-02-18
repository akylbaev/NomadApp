import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";

import Icons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

class Menu extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Меню",
    headerTintColor: "#961F10",
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.clear();
          navigation.navigate("AuthLoading");
        }}
      >
        {/* <Icons
          name="ios-exit"
          size={30}
          color={"#000"}
          style={{ marginRight: 10 }}
        /> */}
        <Image
          source={require("../../assets/icons/exit.png")}
          style={{ width: 25, height: 25, marginRight: 15 }}
        />
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "#fff", marginTop: 20 }}>
          <TouchableOpacity
            style={{
              width: width,
              height: 40,
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Image
              source={require("../../assets/icons/account.png")}
              style={{
                width: 25,
                height: 25,
                marginHorizontal: 12
              }}
            />
            <Text style={{ fontSize: 18 }}>Профиль</Text>
          </TouchableOpacity>
          <View style={{ width, height: 1, backgroundColor: "#eaeaea" }} />
          <TouchableOpacity
            style={{
              width: width,
              height: 40,
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Image
              source={require("../../assets/icons/card.png")}
              style={{
                width: 25,
                height: 25,
                marginHorizontal: 12
              }}
            />
            <Text style={{ fontSize: 18 }}>Мои карты</Text>
          </TouchableOpacity>
          <View style={{ width, height: 1, backgroundColor: "#eaeaea" }} />
          <TouchableOpacity
            style={{
              width: width,
              height: 40,
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Image
              source={require("../../assets/icons/shtraf.png")}
              style={{
                width: 25,
                height: 25,
                marginHorizontal: 12
              }}
            />
            <Text style={{ fontSize: 18 }}>Проверка штрафов</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "#fff", marginTop: 20 }}>
          <TouchableOpacity
            style={{
              width: width,
              height: 40,
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Image
              source={require("../../assets/icons/settings.png")}
              style={{
                width: 25,
                height: 25,
                marginHorizontal: 12
              }}
            />
            <Text style={{ fontSize: 18 }}>Настройки</Text>
          </TouchableOpacity>
          <View style={{ width, height: 1, backgroundColor: "#eaeaea" }} />
          <TouchableOpacity
            style={{
              width: width,
              height: 40,
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Image
              source={require("../../assets/icons/nomad.png")}
              style={{
                width: 25,
                height: 25,
                marginHorizontal: 12
              }}
            />
            <Text style={{ fontSize: 18 }}>О компании</Text>
          </TouchableOpacity>
          <View style={{ width, height: 1, backgroundColor: "#eaeaea" }} />
          <TouchableOpacity
            style={{
              width: width,
              height: 40,
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Image
              source={require("../../assets/icons/info.png")}
              style={{
                width: 25,
                height: 25,
                marginHorizontal: 12
              }}
            />
            <Text style={{ fontSize: 18 }}>О приложении</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7"
  }
});

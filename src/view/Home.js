import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";
import LinearGradient from "react-native-linear-gradient";

import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Ionicons";

import PolicyCard from "../components/PolicyCard";

const { height, width } = Dimensions.get("window");

const images = [
  require("../../assets/images/travel.jpeg"),
  require("../../assets/images/insurance.jpeg"),
  require("../../assets/images/travel.jpeg")
];

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <Image
        source={require("../../assets/images/logo.png")}
        style={{
          width: 200,
          height: 38,
          alignSelf: "center",
          resizeMode: "contain"
        }}
      />
    ),
    headerRight: (
      <TouchableOpacity>
        <Icons
          name="ios-notifications"
          size={30}
          color={"#fba603"}
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
    ),
    headerLeft: <View />
  });

  renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width: 350,
          height: 144,
          top: 20,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 2, height: 4 },
          shadowOpacity: 1.0,
          shadowRadius: 5,
          elevation: 1
        }}
      >
        <Image
          source={item}
          style={{ width: 350, height: 144, borderRadius: 10 }}
        />
      </View>
    );
  };

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ height: 200, width: width }}>
          <Carousel
            firstItem={0}
            sliderWidth={width}
            itemWidth={350}
            data={images}
            layout={"default"}
            renderItem={this.renderItem}
            onSnapToItem={index => this.setState({ activeSlide: index })}
          />
          {/* <Pagination dotsLength={images.length} activeDotIndex={activeSlide} /> */}
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <LinearGradient
            colors={["#ef7f1a", "#a73112"]}
            style={{
              width: width * 0.9,
              height: 80,
              alignItems: "center",
              borderRadius: 10,
              marginHorizontal: width * 0.05,
              flexDirection: "row"
            }}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          >
            <Image
              source={require("../../assets/icons/coin.png")}
              style={{ height: 30, width: 30, marginLeft: 50, marginRight: 30 }}
            />
            <Text style={{ fontSize: 24, color: "#fff", fontWeight: "700" }}>
              Бонусы
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: "#000",
            marginLeft: width * 0.05,
            marginTop: 20,
            fontWeight: "500"
          }}
        >
          Мои полисы
        </Text>
        <PolicyCard
          policyId={"1009368549"}
          name={"Adam Lambert Sheeran"}
          sum={"12000тг"}
          validThru={"09/08/2019"}
          navigation={this.props.navigation}
        />
      </ScrollView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7"
  }
});

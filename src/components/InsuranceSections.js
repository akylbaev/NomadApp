import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";

const {width} = Dimensions.get('window')

class InuranceSections extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            marginLeft: 12,
            marginVertical: 10
          }}
        >
          {this.props.sectionName}
        </Text>
        <View style={{ backgroundColor: "#fff" }}>
          <TouchableOpacity
            style={{
              width: width,
              height: 40,
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Image
              source={this.props.firstIcon}
              style={{
                width: 25,
                height: 25,
                marginHorizontal: 12
              }}
            />
            <Text style={{ fontSize: 18 }}>{this.props.firstName}</Text>
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
              source={this.props.secondIcon}
              style={{
                width: 25,
                height: 25,
                marginHorizontal: 12
              }}
            />
            <Text style={{ fontSize: 18 }}>{this.props.secondName}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default InuranceSections;

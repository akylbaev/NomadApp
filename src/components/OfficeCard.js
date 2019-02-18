import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image
} from "react-native";

const {width} = Dimensions.get('window')

class OfficeCard extends Component {
    render() {
        return (
            <TouchableOpacity
          style={{
            width: width * 0.9,
            height: 120,
            borderRadius: 10,
            backgroundColor: "#fff",
            marginVertical: 10,
            paddingHorizontal: 20,
            justifyContent: "space-around"
          }}
          activeOpacity={0.8}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            {this.props.address}
          </Text>
          <View style={{ flexDirection: "row", alignItems: 'center'}}>
            <Image
              source={require("../../assets/icons/metro.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text style={{ fontSize: 14, fontWeight: "700", marginLeft: 10 }}>
              {this.props.metro}
            </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-between'}}>

            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/icons/call.png")}
                style={{ width: 25, height: 25 }}
              />
              <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10, color: 'skyblue'}}>
                {this.props.phone}
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: 'center' }}>
              <Image
                source={require("../../assets/icons/compass.png")}
                style={{ width: 15, height: 15 }}
              />
              <Text style={{ fontSize: 14, fontWeight: "700", marginLeft: 10 }}>
                {this.props.distance}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        );
    }
}
export default OfficeCard;
import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from "react-native";

const {width, height} = Dimensions.get('window')

class PolicyCard extends Component {
    render() {
        return (
            <View
          style={{
            width: width * 0.9,
            height: 280,
            backgroundColor: "#961F10",
            borderRadius: 10,
            marginTop: 10,
            marginHorizontal: width * 0.05,
            marginBottom: 20
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
              width: width * 0.9,
              height: 80,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, marginLeft: 12 }}>
              Номер полиса
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 26,
                marginLeft: 12,
                fontWeight: "400"
              }}
            >
              {this.props.policyId}
            </Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              marginLeft: 12,
              marginTop: 15
            }}
          >
            ФИО страховщика
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              marginLeft: 12,
              fontWeight: "500"
            }}
          >
            {this.props.name}
          </Text>
          <View
            style={{
              marginHorizontal: 12,
              backgroundColor: "#fff",
              height: 1,
              marginTop: 15
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 12,
                  marginLeft: 12,
                  marginTop: 15
                }}
              >
                К оплате
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  marginLeft: 12,
                  fontWeight: "500"
                }}
              >
                {this.props.sum}
              </Text>
            </View>

            <View style={{ marginLeft: 50 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 12,
                  marginLeft: 12,
                  marginTop: 15
                }}
              >
                Действителен до
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  marginLeft: 12,
                  fontWeight: "500"
                }}
              >
                {this.props.validThru}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              width: 100,
              borderColor: "#fff",
              borderWidth: 1,
              borderRadius: 5,
              marginLeft: 12,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15
            }}
          >
          <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>Детально</Text>
          </TouchableOpacity>
        </View>
        );
    }
}
export default PolicyCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
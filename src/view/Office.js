import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView
} from "react-native";

import OfficeCard from '../components/OfficeCard'

const {width} = Dimensions.get('window')

class Office extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Офисы",
    headerTintColor: "#961F10"
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <OfficeCard
            address={'ул. Толе Би, д.101'}
            metro = {'Байконыр'}
            phone = {'+7 (727) 321 20 00'}
            distance = {'3.097км'}
        />
        <OfficeCard
            address={'ул. Толе Би, д.101'}
            metro = {'Байконыр'}
            phone = {'+7 (727) 321 20 00'}
            distance = {'3.097км'}
        />
        <OfficeCard
            address={'ул. Толе Би, д.101'}
            metro = {'Байконыр'}
            phone = {'+7 (727) 321 20 00'}
            distance = {'3.097км'}
        />
        <OfficeCard
            address={'ул. Толе Би, д.101'}
            metro = {'Байконыр'}
            phone = {'+7 (727) 321 20 00'}
            distance = {'3.097км'}
        />
        <OfficeCard
            address={'ул. Толе Би, д.101'}
            metro = {'Байконыр'}
            phone = {'+7 (727) 321 20 00'}
            distance = {'3.097км'}
        />
      </ScrollView>
    );
  }
}
export default Office;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7",
    paddingHorizontal: width*0.05
  }
});

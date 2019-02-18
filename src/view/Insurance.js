import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

import InsuranceSection from '../components/InsuranceSections'

class Insurance extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Страхование",
    headerTintColor: "#961F10"
  });

  render() {
    return (
      <View style={styles.container}>
        <InsuranceSection
          sectionName = {'Автострахование'}
          firstIcon = {require("../../assets/icons/kasko.png")}
          firstName = {'КАСКО'}
          secondIcon = {require('../../assets/icons/ogpo.png')}
          secondName = {'ОГПО'}
          />
        <InsuranceSection
          sectionName = {'Путешествия'}
          firstIcon = {require("../../assets/icons/travel.png")}
          firstName = {'По Казахстану'}
          secondIcon = {require('../../assets/icons/travel.png')}
          secondName = {'За границу'}
          />
        <InsuranceSection
          sectionName = {'Имущество'}
          firstIcon = {require("../../assets/icons/house.png")}
          firstName = {'Дом'}
          secondIcon = {require('../../assets/icons/flat.png')}
          secondName = {'Квартира'}
          />
        <InsuranceSection
          sectionName = {'Здоровье'}
          firstIcon = {require("../../assets/icons/kasko.png")}
          firstName = {'ДМС'}
          secondIcon = {require('../../assets/icons/shield.png')}
          secondName = {'Несчастный случай'}
          />
      </View>
    );
  }
}
export default Insurance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7'
  }
});

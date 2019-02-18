import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage,
  Dimensions,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  AlertIOS
} from "react-native";

import TouchID from "react-native-touch-id";

const { width, height } = Dimensions.get("window");

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      biometryType: null
    };
  }

  componentDidMount() {


    TouchID.isSupported()
    .then(biometryType => {
      this.setState({ biometryType });
    })

    const numOfBackground = 4;
    let scrollValue = 0,
      scrolled = 0;
    setInterval(function() {
      scrolled++;
      if (scrolled < numOfBackground) scrollValue = scrollValue + width;
      else {
        scrollValue = 0;
        scrolled = 0;
      }
      _scrollView.scrollTo({ x: scrollValue, animated: false });
    }, 3000);
  }

  clickHandler() {
    TouchID.isSupported()
      .then(this.authenticate)
      .catch(error => {
        AlertIOS.alert('TouchID not supported');
      });
  }

  authenticate() {
    return TouchID.authenticate()
      .then(success => {
        this.handleSignIn
      })
      .catch(error => {
        console.log(error)
        AlertIOS.alert(error.message);
      });
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  handleSignIn = async () => {
    AsyncStorage.setItem("userToken", "someToken");
    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} >
        <ScrollView
          ref={scrollView => {
            _scrollView = scrollView;
          }}
          horizontal={true}
          pagingEnabled={true}
          style={{ position: "absolute" }}
        >
          <Image
            source={require("../../assets/images/bg.png")}
            style={{ height, width }}
          />
          <Image
            source={require("../../assets/images/travel.jpeg")}
            style={{ height, width }}
          />
          <Image
            source={require("../../assets/images/insurance.jpeg")}
            style={{ height, width }}
          />
          <Image
            source={require("../../assets/images/travel.jpeg")}
            style={{ height, width }}
          />
        </ScrollView>

        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: 280, height: 50, marginTop: 70 }}
        />
        <TouchableOpacity style={{marginTop: 180}} onPress={this.clickHandler}>
          <Image source={require('../../assets/icons/fingerprint.png')}
            style = {{width: 50, height: 50, tintColor: '#fff'}} />
        </TouchableOpacity>
        <View style={{ width: width * 0.9, height: 60, marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require("../../assets/icons/phone.png")}
            style={{ width: 35, height: 35 }}
          />
          <TextInput
            style={{ flex: 1,marginLeft: 20, fontSize: 22, color: '#fff'}}
            onChangeText={text => this.setState({ login: text })}
            placeholder="Телефон"
            placeholderTextColor={'#fff'}
            textContentType="telephoneNumber"
            underlineColorAndroid={'#fff'}
          />
        </View>
        <View style={{ width: width * 0.9, height: 60, marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require("../../assets/icons/password.png")}
            style={{ width: 35, height: 35 }}
          />
          <TextInput
            style={{ flex: 1,marginLeft: 20, fontSize: 22, color: '#fff'}}
            onChangeText={text => this.setState({ password: text })}
            placeholder="Пароль"
            placeholderTextColor={'#fff'}
            textContentType="password"
            underlineColorAndroid={'#fff'}
            secureTextEntry={true}
          />
        </View>
        
        <TouchableOpacity
          style={{
            width: 200,
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
            backgroundColor: '#ef7f1a',
            borderRadius: 30
          }}
          onPress={this.handleSignIn}
        >
          <Text style={{fontSize: 24, fontWeight: '600', color: '#fff'}}>Войти</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            marginTop: 10,
          }}
          // onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Text style={{fontSize: 18, fontWeight: '400', color: '#fff'}}>Регистрация</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});

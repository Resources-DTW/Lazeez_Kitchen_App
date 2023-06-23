import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import {
  MainView,
  LoginTitle,
  LoginButton,
  ButtonText,
  SocialLoginView,
  LinkText,
  FooterView,
  OrLine,
  OrContainer,
} from "../global/styles";
import { TextInput } from "react-native-paper";
import { AuthenticationContext } from "../authentication/authentication.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [userInfo, setUserInfo] = useState();

  const { onLogin, Glogin, fblogin, error, isLoading } = useContext(
    AuthenticationContext
  );

  return (
    <MainView>
      <ImageBackground
        source={require("../assets/images/bg.png")}
        style={{
          height: Dimensions.get("window").height / 2.5,
        }}
      ></ImageBackground>
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <LoginTitle>Login Using Email Address</LoginTitle>
          <View>
            <TextInput
              style={{ marginTop: 20 }}
              keyboardType="email-address"
              mode="outlined"
              activeOutlineColor="#F49F1C"
              placeholder="Email Address"
              label="Email"
              value={email}
              onChangeText={(u) => setEmail(u)}
              autoCapitalize="none"
            />
          </View>
          <TextInput
            value={password}
            style={{ marginTop: 20 }}
            secureTextEntry={visible}
            mode="outlined"
            activeOutlineColor="#F49F1C"
            placeholder="Password"
            label="Password"
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
            right={
              <TextInput.Icon
                icon={visible ? "eye-off-outline" : "eye-outline"}
                onPress={() => setVisible(!visible)}
              />
            }
          />
          {!isLoading ? (
            <LoginButton onPress={() => onLogin(email, password)}>
              <ButtonText>Login</ButtonText>
            </LoginButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.orange500} />
          )}
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ fontWeight: 600, fontSize: 16, color: "#F49F1C" }}>
              Register Now
            </Text>
          </TouchableOpacity>
        </View>
        <OrContainer>
          <OrLine />
          <Text style={{ fontSize: 18, textAlign: "center" }}>Or</Text>
          <OrLine />
        </OrContainer>
      </View>
      <SocialLoginView>
        {!isLoading ? (
          <TouchableOpacity onPress={() => Glogin(userInfo)}>
            <Image source={require("../assets/images/gmail.png")} />
          </TouchableOpacity>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.orange500} />
        )}
        {!isLoading ? (
          <TouchableOpacity onPress={() => fblogin(userInfo)}>
            <Image source={require("../assets/images/fb.png")} />
          </TouchableOpacity>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.orange500} />
        )}
      </SocialLoginView>
      <FooterView>
        <Text style={{ textAlign: "center", justifyContent: "center" }}>
          By Clicking, I Accept The
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <LinkText> Terms Of Service</LinkText>
          </TouchableOpacity>{" "}
          And
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <LinkText>Privacy Policy</LinkText>
          </TouchableOpacity>
        </Text>
      </FooterView>
    </MainView>
  );
};

export default Login;

const styles = StyleSheet.create({
  bottomView: {
    flex: 1.5,
    backgroundColor: "#fff",
    bottom: 100,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
});

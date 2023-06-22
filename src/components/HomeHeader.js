import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Header, HomeLogo, LocationView, SearchView } from "../global/styles";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const Location = styled.Text`
  padding: ${(props) => props.theme.space[2]};
`;

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Header>
        <HomeLogo>
          <Image
            source={require("../../assets/splash.png")}
            style={{ width: 65, height: 60 }}
          />
        </HomeLogo>
        <LocationView>
          <TouchableOpacity
            style={{ alignItems: "center", flexDirection: "row" }}
            onPress={() => navigation.navigate("MapScreen")}
          >
            <Location>Chennai, Tamilnadu</Location>
            <Feather name="map-pin" size={24} color="#F49F1C" />
          </TouchableOpacity>
        </LocationView>
      </Header>
      <SearchView>
        <TextInput
          placeholderTextColor={"#F49F1C"}
          placeholder="Type Something And Hit Enter..."
        />
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="#F49F1C" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="microphone" size={24} color="#F49F1C" />
        </TouchableOpacity>
      </SearchView>
    </View>
  );
};

export default HomeHeader;

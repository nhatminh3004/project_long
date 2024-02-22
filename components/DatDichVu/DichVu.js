import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
// import { Icon } from 'react-native-vector-icons/icon';

function _getColorFromStatus(status) {
  if (status.toLowerCase().trim() == "dùng lẻ định kỳ") {
    return (color = "blue");
  }
}

export default function DichVu(props) {
  const socialMedia = {
    facebook: { icon: "facebook-square", text: "Có Facebook" },
    instagram: { icon: "instagram", text: "Có Instagram" },
    twitter: { icon: "twitter", text: "Có Twitter" },
  };
  const renderSocialLinks = () => {
    const elements = [];
    for (const [key, value] of Object.entries(socialMedia)) {
      if (socialnetworks[key]) {
        // Check if key exists and has value
        elements.push(
          <Text key={key} style={{ marginRight: 10 }}>
            {value.text}
          </Text>
        );
        if (socialnetworks[key] !== "") {
          // Check if value is not empty
          elements.push(
            <AntDesign
              key={`${key}-icon`}
              name={value.icon}
              size={20}
              color="black"
              style={{ marginRight: 5 }}
            />
          );
        }
      }
    }
    return elements;
  };
  let { name, price, socialnetworks, status, url, website } = props.food;
  return (
    <View
      style={{
        height: 150,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: "row",
      }}
    >
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: "cover",
          borderRadius: 10,
          marginRight: 15,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "black",
            height: 1,
          }}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 12,
            }}
          >
            Status:{" "}
          </Text>
          <Text
            style={{
              color: _getColorFromStatus(status),
              fontSize: 12,
            }}
          >
            {status.toUpperCase()}
          </Text>
        </View>
        <Text
          style={{
            color: "black",
            fontSize: 12,
          }}
        >
          Price: {price}$
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 12,
          }}
        >
          Food Type: Pizza
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 12,
          }}
        >
          Website: {website}
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {socialnetworks[0].facebook !== undefined && (
            <AntDesign
              name="facebook-square"
              size={20}
              color="black"
              style={{ paddingEnd: 5 }}
            />
          )}
          {socialnetworks[0].instagram !== undefined && (
            <AntDesign
              name="instagram"
              size={20}
              color="black"
              style={{ paddingEnd: 5 }}
            />
          )}
          {socialnetworks[0].twitter !== undefined && (
            <AntDesign
              name="twitter"
              size={20}
              color="black"
              style={{ paddingEnd: 5 }}
            />
          )}
        </View>
      </View>
    </View>
  );
}

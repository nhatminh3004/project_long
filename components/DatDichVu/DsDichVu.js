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
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import DichVu from "./DichVu";
import axios from "axios";

export default function DsDichVu({ navigation }) {
  // Ds bài đăng

  const [users, setUsers] = useState(undefined);
  useEffect(() => {
    // Lấy danh sách user
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://nhatminh-api-backend.onrender.com/api/long/getAllDichVu"
        );
        const data = await response.data;
        // console.log("Nv", data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const [posts, setposts] = useState([
    {
      name: "Anh A",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvql9JLlo5do1LEUkgnJI_TNGpZn8h0yZoAwVRk73uIg&s",
      status: "Dùng lẻ, Định kỳ",
      price: 123,
      website: "",
      socialnetworks: [
        {
          facebook: "https://www.facebook.com/",
        },
      ],
    },
    {
      name: "Dich vu don dep nha B",
      status: "Dung le",
      price: 123,
      socialnetworks: [
        {
          facebook: "f",

          instagram: "s",
        },
      ],
    },
    {
      name: "Dich vu don dep nha C",
      status: "Dung le",
      price: 123,
      socialnetworks: [
        {
          facebook: "https://www.facebook.com/",
          twitter: "",
          instagram: "https://www.instagram.com/",
        },
      ],
    },
    {
      name: "Dich vu don dep nha C",
      status: "Dung le",
      price: 123,
      socialnetworks: [
        {
          facebook: "",
          twitter: "",
          instagram: "",
        },
      ],
    },
    {
      name: "Dich vu don dep nha C",
      status: "Dung le",
      price: 123,
      socialnetworks: [
        {
          facebook: "",
          twitter: "",
          instagram: "",
        },
      ],
    },
    {
      name: "Dich vu don dep nha C",
      status: "Dung le",
      price: 123,
      socialnetworks: [
        {
          facebook: "",
          twitter: "",
          instagram: "",
        },
      ],
    },
    {
      name: "Dich vu don dep nha C",
      status: "Dung le",
      price: 123,
      socialnetworks: [
        {
          facebook: "",
          twitter: "s",
          instagram: "g",
        },
      ],
    },
  ]);
  // console.log(users);
  return (
    <View style={styles.container}>
      {/* Ds bài đăng */}
      <ScrollView>
        {users &&
          users.map((eachfood) => (
            <DichVu food={eachfood} key={eachfood.name} />
          ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

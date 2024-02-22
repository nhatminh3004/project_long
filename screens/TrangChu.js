import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DsDichVu from "../components/DatDichVu/DsDichVu";
import Donhang from "../components/DonHang";
import DangBai from "../components/DangBai";
import LichSu from "../components/LichSu";
import TaiKhoan from "../components/TaiKhoan";

import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import DuyetDangBai from "../components/DuyetDangBai";

// Bottom tab
const Tab = createBottomTabNavigator();

export default function TrangChu({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="DsDichVu"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "DsDichVu") {
            return (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={size}
                color={focused ? "#2baf66" : "gray"}
              />
            );
          } else if (route.name === "DangBai") {
            return (
              <MaterialCommunityIcons
                name={focused ? "post" : "post-outline"}
                size={size}
                color={focused ? "#2baf66" : "gray"}
              />
            );
          } else if (route.name === "DuyetDangBai") {
            return (
              <MaterialCommunityIcons
                name={focused ? "post" : "post-outline"}
                size={size}
                color={focused ? "#e07d3c" : "red"}
              />
            );
          } else if (route.name === "DonHang") {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={focused ? "#2baf66" : "gray"}
              />
            );
          } else if (route.name === "LichSu") {
            return (
              <MaterialIcons
                name={focused ? "" : "history"}
                size={size}
                color={focused ? "#2baf66" : "gray"}
              />
            );
          } else if (route.name === "TaiKhoan") {
            return (
              <Feather
                name={focused ? "users" : "user"}
                size={size}
                color={focused ? "#2baf66" : "gray"}
              />
            );
          }
        },
        tabBarActiveTintColor: "#2baf66",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="DsDichVu" component={DsDichVu} />
      <Tab.Screen name="DonHang" component={Donhang} />
      <Tab.Screen name="LichSu" component={LichSu} />
      <Tab.Screen name="DangBai" component={DangBai} />
      <Tab.Screen name="DuyetDangBai" component={DuyetDangBai} />
      <Tab.Screen name="TaiKhoan" component={TaiKhoan} />
    </Tab.Navigator>
  );
}

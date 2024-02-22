import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, } from 'react-native';
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useState } from 'react';
import axios from "axios";

export default function DangNhap({ navigation }) {

  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dangNhap = () => {
    axios
      .post("https://vuquanghuydev.pythonanywhere.com/api/v1/auth/login/", {
        phone_number: phone_number,
        password: password,
      })
      .then((response) => {
        // Nếu đăng nhập thành công thì chuyển vào trang chủ
        console.log(response.data);
        if (response.data.message === "Login successful") {
          console.log("Đăng nhập thành công");
          navigation.navigate("TrangChu");
        }
      })
      .catch((error) => {
        // Nếu đăng nhập thất bại thì in ra lỗi
        if (error.response && error.response.data) {
          const { message } = error.response.data;
          // console.error("Lỗi API:", error.response.data);
          // Đăng nhập sai mật khẩu hoặc sai tài khoản
          if (message === "Invalid phone number or password") {
            console.log("Sai số điện thoại hoặc sai sai mật khẩu");
            Alert.alert('', 'Sai số điện thoại hoặc sai sai mật khẩu');
          }
          // Chưa điền số điện thoại hoặc mật khẩu
          else if (message === "Missing required fields") {
            console.log("Bạn chưa điền số điện thoại hoặc mật khẩu");
            Alert.alert('', 'Bạn chưa điền số điện thoại hoặc mật khẩu');
          }
          // Lỗi khác
          else {
            console.log("Lỗi khác:", message);
          }
        } else {
          console.error("Lỗi kết nối API:", error);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 0.3,
      }}>
        <Text style={{
          fontSize: 40,
          color: "#2baf66",
          fontWeight: "bold",
        }}>HELP CARE!</Text>
      </View>
      <View style={{
        flex: 0.7,
      }}>
        <View style={{
          height: 60,
          width: "80%",
          marginLeft: "10%",
          marginBottom: 40,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "gray",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <TextInput
            style={{
              paddingLeft: 10,
              fontSize: 20,
              width: "85%",
            }}
            placeholder="Số điện thoại"
            onChangeText={(phone_number) => setPhone(phone_number)}
            value={phone_number}
          />
          <View style={{
            resizeMode: "center",
            width: "15%",
          }}>
            <AntDesign name="phone" size={30} color="gray" />
          </View>
        </View>
        <View style={{
          height: 60,
          width: "80%",
          marginLeft: "10%",
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "gray",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <TextInput
            style={{
              paddingLeft: 10,
              fontSize: 20,
              width: "85%",
            }}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
          <View style={{
            resizeMode: "center",
            width: "15%",
          }}>
            <AntDesign name="lock" size={30} color="gray" />
          </View>
        </View>
        <TouchableOpacity style={{
          height: 30,
          width: '80%',
          marginLeft: "10%",
          marginTop: 10,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 10,
        }}
          onPress={() => navigation.navigate("OTP")}>
          <Text style={{
            fontSize: 20,
            color: "#2baf66",
          }}>Quên mật khẩu ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: "#2baf66",
          height: 60,
          width: "80%",
          marginLeft: "10%",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 50,
        }}
          onPress={dangNhap}>
          <Text style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
          }}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Text style={{ fontSize: 20, }}>Bạn chưa có tài khoản?</Text>
          <Text style={{
            fontSize: 20,
            color: "#2baf66",
            marginLeft: 10,
          }} onPress={() => navigation.navigate("DangKy")} >Đăng ký</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

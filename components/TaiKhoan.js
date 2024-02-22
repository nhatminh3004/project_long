import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TaiKhoan({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông tin cá nhân</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="md-menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="md-notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Họ và tên</Text>
            <TextInput
              style={styles.formInput}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Số điện thoại</Text>
            <TextInput
              style={styles.formInput}
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              editable={false}
              style={styles.formInput}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Địa chỉ</Text>
            <TextInput
              style={{
                height: 90,
                borderColor: "gray",
                borderWidth: 3,
                borderRadius: 1,
                padding: 10,
              }}
              value={address}
              onChangeText={setAddress}
              multiline={true}
              numberOfLines={9}
            />
          </View>
          <View style={styles.formGroup}>
            <TouchableOpacity style={styles.formButton}>
              <Text style={styles.formButtonText}>Lưu thông tin</Text>
            </TouchableOpacity>
            <View style={{ marginVertical: 10 }}></View>
            <TouchableOpacity style={styles.formButton}>
              <Text style={styles.formButtonText}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  headerButton: {
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  form: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 16,
    color: "gray",
  },
  formInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  formButton: {
    height: 40,
    backgroundColor: "blue",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  formButtonText: {
    color: "white",
    fontSize: 16,
  },
});

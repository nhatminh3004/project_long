import React, { useEffect, useState } from "react";
import { Icon, MD3Colors } from "react-native-paper";

import axios from "axios";
import {
  Modal,
  Portal,
  Text,
  Button,
  PaperProvider,
  TextInput,
  Divider,
  Avatar,
  Checkbox,
} from "react-native-paper";

import { StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { DatePickerInput } from "react-native-paper-dates";
import { FAB } from "react-native-paper";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { TimePickerModal } from "react-native-paper-dates";
import { Image } from "react-native";
import { Chip } from "react-native-paper";

export default function DuyetDangBai() {
  const [dsbaiDang, setDSBaiDang] = useState(undefined);
  useEffect(() => {
    // Lấy danh sách bài đăng
    const getAllDSBaiDang = async () => {
      try {
        const response = await axios.get(
          "https://65d587c9f6967ba8e3bbba2f.mockapi.io/api/dsbaidang/baidang"
        );
        const data = await response.data;
        // console.log("baidang", data);
        setDSBaiDang(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllDSBaiDang();
  }, []);

  console.log(dsbaiDang);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#9999FF",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <ScrollView>
        {dsbaiDang &&
          dsbaiDang.map(
            (baidang) =>
              baidang.status_duyet === false && (
                <View
                  style={{
                    padding: 15,
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
                      uri: `${baidang.image}`,
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
                      {baidang.desprtion.map((mota, index) => (
                        <Text key={mota} variant="headlineSmall">
                          {index === baidang.desprtion.length - 1
                            ? mota
                            : `${mota}, `}
                        </Text>
                      ))}
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
                        Tên:{baidang.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                        }}
                      ></Text>
                    </View>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 12,
                      }}
                    >
                      Số điện thoại: {baidang.phone}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        maxWidth: "70%",
                      }}
                    >
                      <Text
                        style={{
                          color: "black",
                          fontSize: 12,
                        }}
                      >
                        Từ ngày:{" "}
                        <Chip mode="outlined" textStyle={{ fontSize: 11 }}>
                          {baidang.work_day_start}
                        </Chip>
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                        }}
                      >
                        Đến ngày:{" "}
                        <Chip mode="outlined" textStyle={{ fontSize: 11 }}>
                          {baidang.work_day_end}
                        </Chip>
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        maxWidth: "70%",
                        marginHorizontal: 5,
                      }}
                    >
                      <Text
                        style={{
                          color: "black",
                          fontSize: 12,
                        }}
                      >
                        Giờ làm{" "}
                        <Chip mode="outlined" textStyle={{ fontSize: 11 }}>
                          {baidang.work_time_start}
                        </Chip>
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                        }}
                      >
                        Giờ về:{" "}
                        <Chip mode="outlined" textStyle={{ fontSize: 11 }}>
                          {baidang.work_time_end}
                        </Chip>
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 12,
                      }}
                    >
                      Status duyệt:
                      {baidang.status_duyet ? (
                        <Icon
                          source="check-outline"
                          color={MD3Colors.secondary99}
                          size={20}
                        />
                      ) : (
                        <Icon
                          source="comment-remove"
                          color={MD3Colors.error50}
                          size={20}
                        />
                      )}
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "black",
                          fontSize: 15,
                        }}
                      >
                        Thanh toán:
                      </Text>
                      {
                        <Chip mode="outlined" textStyle={{ fontSize: 11 }}>
                          {baidang.hinh_thuc_thanh_toan}
                        </Chip>
                      }
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Button
                        style={{ backgroundColor: "#00EE00" }}
                        icon="text-box-check"
                        mode="contained"
                        onPress={() => console.log("Pressed")}
                      >
                        Duyệt
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "#FF0000",
                        }}
                        icon="text-box-remove"
                        mode="contained"
                        onPress={() => console.log("Pressed")}
                      >
                        Huỷ
                      </Button>
                    </View>
                  </View>
                </View>
              )
          )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    position: "absolute", // Đặt vị trí tuyệt đối
    bottom: 16, // Thay đổi vị trí theo ý muốn
    right: 16, // Thay đổi vị trí theo ý muốn
  },

  textInput: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  avatar: {
    alignSelf: "center",
    marginBottom: 20,
  },
});

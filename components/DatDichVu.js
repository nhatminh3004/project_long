import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react";
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function DatDichVu({ navigation }) {

    // Data bài đăng
    const [posts, setposts] = useState([
        {
            name: 'Dich vu don dep nha A',
            status: 'Dung le',
            price: 123,
            socialnetworks: [
                {
                    facebook: '',
                    twitter: '',
                    instagram: '',
                }
            ]
        },
        {
            name: 'Dich vu don dep nha B',
            status: 'Dung le',
            price: 123,
            socialnetworks: [
                {
                    facebook: '',
                    twitter: '',
                    instagram: '',
                }
            ]
        },
        {
            name: 'Dich vu don dep nha C',
            status: 'Dung le',
            price: 123,
            socialnetworks: [
                {
                    facebook: '',
                    twitter: '',
                    instagram: '',
                }
            ]
        },
    ])
    return (
        <View style={styles.container}>
            <View style={styles.c1}>
                {/* Danh sách  cac bai dang*/}
                <View style={{
                    height: 150,
                    paddingTop: 20,
                    paddingStart: 10,
                    flexDirection: 'row',
                    backgroundColor:'red',
                }}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: 'cover',
                            borderRadius: 10,
                            marginRight: 15,
                            backgroundColor:'yellow',
                        }}
                        source={{ uri: 'https://static.wikia.nocookie.net/doraemon/images/8/8d/Doraemon_%282017_Remake%29.png/revision/latest?cb=20230908064228&path-prefix=en' }} />
                    <View style={{
                        flex: 1,
                        marginRight: 15,
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: 15,
                            fontWeight: 'bold',
                        }}>Dich vu don dep nha A</Text>
                        <View style={{
                            height: 1,
                            backgroundColor: 'black',
                        }}/>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{
                                    color: 'black',
                                    fontSize: 15,
                                }}>Status: </Text>
                                <Text style={{
                                    color: 'brown',
                                    fontSize: 15,
                                }}>OPENING SOON</Text>
                            </View>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

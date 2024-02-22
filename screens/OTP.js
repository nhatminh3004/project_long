import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

export default function OTP({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={{
                flex: 0.4,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image style={{
                    height: '100%',
                }}
                    source={require('../imgs/Otp.png')} />
            </View>
            <View style={{
                flex: 0.6,
                width: '80%',
                marginLeft: '10%',
                marginTop: 15,
            }}>
                <Text style={{
                    fontSize: 15,
                    marginBottom: 15,
                }}>Nhập mã OTP bao gồm 5 số được gửi về số điện thoại:</Text>
                <View style={{
                    height: 50,
                    flexDirection: 'row',
                    marginBottom: 15,
                }}>
                    <View style={{
                        width: '17%',
                        borderRadius: 10,
                        borderColor: 'gray',
                        borderWidth: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TextInput
                            style={{
                                fontSize: 20,
                            }}
                        />
                    </View>
                    <View style={{
                        width: '17%',
                        marginLeft: '4%',
                        borderRadius: 10,
                        borderColor: 'gray',
                        borderWidth: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TextInput
                            style={{
                                fontSize: 20,
                            }}
                        />
                    </View>
                    <View style={{
                        width: '17%',
                        marginLeft: '4%',
                        borderRadius: 10,
                        borderColor: 'gray',
                        borderWidth: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TextInput
                            style={{
                                fontSize: 20,
                            }}
                        />
                    </View>
                    <View style={{
                        width: '17%',
                        marginLeft: '4%',
                        borderRadius: 10,
                        borderColor: 'gray',
                        borderWidth: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TextInput
                            style={{
                                fontSize: 20,
                            }}
                        />
                    </View>
                    <View style={{
                        width: '17%',
                        marginLeft: '4%',
                        borderRadius: 10,
                        borderColor: 'gray',
                        borderWidth: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TextInput
                            style={{
                                fontSize: 20,
                            }}
                        />
                    </View>
                </View>
                <Text>Xác minh số điện thoại trong: </Text>
                <TouchableOpacity style={styles.btn1} >
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 'bold',
                    }}>Xác minh</Text>
                </TouchableOpacity>
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
    header: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img1: {
        height: '100%',
    },
    body: {
        flex: 0.6,
        width: '80%',
        marginLeft: '10%',
        marginTop: 15,
    },
    lbl1: {
        fontSize: 15,
        marginBottom: 15,
    },
    c1: {
        height: 50,
        flexDirection: 'row',
        marginBottom: 15,
    },
    pnl1: {
        width: '17%',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pnl2: {
        width: '17%',
        marginLeft: '4%',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn1: {
        marginTop: 15,
        backgroundColor: '#2baf66',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt2: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});

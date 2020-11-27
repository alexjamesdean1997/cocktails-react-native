import React, { Component } from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Header from "./Header";

const Main = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Coming soon</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingTop: 115,
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 100,
    },
    title: {
        fontSize: 22,
        fontWeight: 700,
        paddingBottom: 13
    }
});

export default Main;
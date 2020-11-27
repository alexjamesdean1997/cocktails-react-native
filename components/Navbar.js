import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const Navbar = () => {
    return(
        <View style={styles.container}>
            <Image style={{
                width: 28,
                height: 28,
                resizeMode: 'contain'
            }} source={require('../assets/icons/home_g.svg')} />
            <Image style={{
                width: 28,
                height: 28,
                resizeMode: 'contain'
            }} source={require('../assets/icons/calendar_b.svg')} />
            <Image style={{
                width: 28,
                height: 28,
                resizeMode: 'contain'
            }} source={require('../assets/icons/add_b.svg')} />
            <Image style={{
                width: 28,
                height: 28,
                resizeMode: 'contain'
            }} source={require('../assets/icons/profile_b.svg')} />
            <Image style={{
                width: 28,
                height: 28,
                resizeMode: 'contain'
            }} source={require('../assets/icons/settings_b.svg')} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 32,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f2f2f2",
        boxShadow: "0 0 16px rgba(0,0,0,0.25)",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 3,
    },
    logoText: {
        color: "#39D0B2",
        paddingLeft: 10,
        fontSize: 33,
        fontWeight: 800,
    },
});

export default Navbar;
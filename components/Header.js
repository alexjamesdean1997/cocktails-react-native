import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const Header = () => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.logoText}>Cocktails</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 44,
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        boxShadow: "0 0 16px rgba(0,0,0,0.25)",
        position: "fixed",
        top: 0,
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

export default Header;
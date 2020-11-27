import React, { useEffect, useState, Component } from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const Main = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/cocktail')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? <Text>loading</Text> : (
                <Text>{data.strDrink}</Text>
            )}
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
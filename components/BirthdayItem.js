import React from "react";
import {View, Text, StyleSheet} from "react-native";

const BirthdayItem = (props) => {

    const name = props.birthday.firstName + " " + props.birthday.lastName;

    if(props.birthday.birthDay < 10){
        props.birthday.birthDay = "0" + props.birthday.birthDay
    }
    if(props.birthday.birthMonth < 10){
        props.birthday.birthMonth = "0" + props.birthday.birthMonth
    }
    const date = props.birthday.birthDay + "/" + props.birthday.birthMonth;

    return(
        <View style={styles.container}>
            <View style={styles.picContainer}>
                <View style={styles.pic}></View>
            </View>
            <View style={styles.inner}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        display: "flex",
        flexDirection: "row",
    },
    picContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    pic: {
        height: 37,
        width: 37,
        backgroundColor: "#39D0B2",
        borderRadius: 37,
    },
    inner: {
        paddingLeft: 12,
        borderTopWidth: 1,
        borderTopColor: "#EBEBEB",
        width: "-webkit-fill-available",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        fontSize: 17,
        fontWeight: 600,
    },
    date: {
        fontSize: 15,
    }
});


export default BirthdayItem;
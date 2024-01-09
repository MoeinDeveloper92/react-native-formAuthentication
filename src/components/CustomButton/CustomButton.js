import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable
            style={[styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {}

            ]}
            onPress={onPress}
        >
            <Text
                style={[styles.text, styles[`text_${type}`],
                fgColor ? { color: fgColor } : {}
                ]}
            >
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {

        width: '100%',
        padding: 15,
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: "#3B71f3",
    },
    container_TERTIARY: {
        backgroundColor: ""
    },
    container_SECONDARY: {
        borderColor: "#3B71f3",
        borderWidth: 2
    },
    text: {
        fontWeight: 'bold',
        color: '#fff'
    },
    text_TERTIARY: {
        color: 'gray'
    },
    text_SECONDARY: {
        color: "blue"
    }
})

export default CustomButton
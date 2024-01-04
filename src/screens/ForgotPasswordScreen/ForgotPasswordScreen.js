import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
    //this is the code that your reciev from your email
    const [username, setUsername] = useState("")

    const navigation = useNavigation()
    const onSendPressed = () => {
        navigation.navigate("NewPassword")
    }


    const onSignInPressed = () => {
        navigation.navigate("SignIn")
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}

        >
            <View
                style={styles.root}

            >
                <Text
                    style={styles.title}
                >
                    Reset Your Password
                </Text>

                <CustomInput
                    placeholder={"Username"}
                    value={username}
                    setValue={setUsername}
                />


                <CustomButton
                    onPress={onSendPressed}
                    text={"Send"}

                />
                <CustomButton
                    onPress={onSignInPressed}
                    text={"Back to SignIn"}
                    type={"TERTIARY"}
                />
            </View>
        </ScrollView>

    )
}

//Once you send forgot password, the app automatiicaly redirect you to reset password page
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingVertical: 100
    },
    text: {
        color: 'gray',
        marginVertical: 10
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#051C60",
        margin: 10
    },
    link: {
        color: "#FDB075"
    }
})
export default ForgotPasswordScreen
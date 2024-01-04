import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocilasignInButtons/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const ConfirmEmailScreen = () => {
    //this is the code that your reciev from your email
    const [code, setCode] = useState("")

    const navigation = useNavigation()

    const onConfirmPressed = () => {
        navigation.navigate("Home")
    }


    const onSignInPressed = () => {
        navigation.navigate("SignIn")
    }

    const onResendPressed = () => {
        console.warn("Resend Code")
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
                    Confirm Your Email
                </Text>

                <CustomInput
                    placeholder={"Enter your confirmation code"}
                    value={code}
                    setValue={setCode}
                />

                <CustomButton
                    onPress={onConfirmPressed}
                    text={"Confirm"}
                />

                <CustomButton
                    onPress={onResendPressed}
                    text={"Resend Code"}
                    type={"SECONDARY"}
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
export default ConfirmEmailScreen
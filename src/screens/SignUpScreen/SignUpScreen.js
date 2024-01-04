import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocilasignInButtons/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const navigation = useNavigation()

    const onRegisterPressed = () => {
        navigation.navigate("ConfirmEmail")
    }

    const onTermsOfUsePressed = () => {
        console.warn("On terms of used pressed.")
    }
    const onPrivacyPressed = () => {
        console.warn("on privacy Pressed")
    }

    const onSignInPressed = () => {
        // console.warn("Redirect the user to sign up page")
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
                    Create an Account
                </Text>

                <CustomInput
                    placeholder={"username"}
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder={"Email"}
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    value={password}
                    setValue={setPassword}
                    placeholder={"Password"}
                    secureTextEntry={true}
                />
                <CustomInput
                    value={password1}
                    setValue={setPassword1}
                    placeholder={"Repeat Password"}
                    secureTextEntry={true}
                />
                <CustomButton
                    onPress={onRegisterPressed}
                    text={"Register"}
                />
                <Text
                    style={styles.text}
                >
                    Bt Registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>terms of use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>privacy policy</Text> .
                </Text>

                <SocialSignInButtons />

                <CustomButton
                    onPress={onSignInPressed}
                    text={"Have an account? Sign In!"}
                    type={"TERTIARY"}
                />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingVertical: 20
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
export default SignUpScreen
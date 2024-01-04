import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from "../../../assets/images/peta.png"
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocilasignInButtons/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'



const SingInScreen = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { height } = useWindowDimensions()
    const navigation = useNavigation()


    const onSignInPress = () => {
        // console.warn("Sign In")
        //Validate user

        navigation.navigate("Home")
    }
    const onforgotPasswordPressed = () => {
        // console.warn("Forgot Password")
        navigation.navigate("ForgotPassword")
    }


    const onSignUpPressed = () => {
        // console.warn("Redirect the user to sign up page")
        navigation.navigate("SignUp")
    }


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}

        >
            <View
                style={styles.root}

            >
                <Image
                    resizeMode='contain'
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                />

                <CustomInput
                    placeholder={"username"}
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    value={password}
                    setValue={setPassword}
                    placeholder={"Password"}
                    secureTextEntry={true}
                />
                <CustomButton
                    onPress={onSignInPress}
                    text={"Sign In"}
                />
                <CustomButton
                    onPress={onforgotPasswordPressed}
                    text={"ForgotPassword"}
                    type={"TERTIARY"}
                />
                <SocialSignInButtons />

                <CustomButton
                    onPress={onSignUpPressed}
                    text={"Don't have an account? Create One"}
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
    logo: {
        width: "70%",
        maxHeight: 400,
        maxWidth: 400
    }
})
export default SingInScreen
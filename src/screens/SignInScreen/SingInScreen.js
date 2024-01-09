import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import Logo from "../../../assets/images/peta.png"
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocilasignInButtons/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from "react-hook-form"


const SingInScreen = () => {

    const { height } = useWindowDimensions()
    const navigation = useNavigation()
    const { control, handleSubmit,
        formState: { errors }
    } = useForm()

    const onSignInPress = (data) => {
        // console.warn("Sign In")
        //Validate user
        console.log(data)
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
                    name={"username"}
                    placeholder={"username"}
                    control={control}
                    rules={{
                        required: "username is required!",
                    }}
                />
                <CustomInput
                    placeholder={"Password"}
                    secureTextEntry={true}
                    name={"password"}
                    control={control}
                    rules={{
                        required: "password is required!",
                    }}
                />






                <CustomButton
                    onPress={handleSubmit(onSignInPress)}
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
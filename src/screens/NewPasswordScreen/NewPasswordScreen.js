import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const NewPasswordScreen = () => {
    //this is the code that your reciev from your email
    const [code, setCode] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const navigation = useNavigation()


    const onSubmitPressed = () => {
        navigation.navigate("Home")
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
                    placeholder={"Code"}
                    value={code}
                    setValue={setCode}
                />

                <CustomInput
                    placeholder={"Enter your new password"}
                    value={newPassword}
                    setValue={setNewPassword}
                />

                <CustomButton
                    onPress={onSubmitPressed}
                    text={"Submit"}

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
export default NewPasswordScreen
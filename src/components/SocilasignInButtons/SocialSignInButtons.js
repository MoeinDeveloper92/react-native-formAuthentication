import { View, Text } from 'react-native'
import CustomButton from '../CustomButton'
import React from 'react'

const SocialSignInButtons = () => {

    const onSignInFacebook = () => {
        console.warn("Facebook sign in")
    }
    const onSignInGoogle = () => {
        console.warn("Google sign In")
    }
    const onSignInApple = () => {
        console.warn("Apple Sign In")
    }
    return (
        <>
            <CustomButton
                onPress={onSignInFacebook}
                text={"Sign In With Facebook"}
                bgColor={"#E7EAF4"}
                fgColor={"#4567A9"}
            />
            <CustomButton
                onPress={onSignInGoogle}
                text={"Sign In with Google"}
                bgColor={"#FAE9EA"}
                fgColor={"#DD4D44"}
            />
            <CustomButton
                onPress={onSignInApple}
                text={"Sign In With Apple"}
                bgColor={"#e3e3e3"}
                fgColor={"#363636"}
            />
        </>
    )
}

export default SocialSignInButtons
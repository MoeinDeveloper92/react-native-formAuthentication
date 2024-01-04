import { View, Text } from 'react-native'
import React from 'react'
import SingInScreen from "../screens/SignInScreen/SingInScreen";
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='SignIn' component={SingInScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
                <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
                <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
                <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
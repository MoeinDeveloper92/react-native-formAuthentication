
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Navigation from './src/Navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.root}
    >
      {/* <SingInScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <NewPasswordScreen /> */}
      <Navigation />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9fbfc',
    // paddingHorizontal: 20
    paddingHorizontal: 10
  }
})



export default App

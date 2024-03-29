import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'


const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {


    return (

        <Controller
            rules={rules}
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
                <>
                    <View
                        style={[styles.container, { borderColor: error ? "red" : "#e8e8e8" }]}
                    >
                        <TextInput
                            placeholder={placeholder}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            style={[styles.input]}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && (
                        <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || "Error"}</Text>
                    )}
                </>

            }
        />

    )


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5
    },
    input: {

    }
})
export default CustomInput
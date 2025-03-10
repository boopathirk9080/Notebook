import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'

const AddShopping = ({ addData, resetData }) => {

    const [item, setItem] = useState('')

    const pressHandler = (item) => {
        addData(item)
        setItem("")
    }

    return (
        <View style={styles.container} >
            <TextInput
                value={item}
                style={styles.input}
                onChangeText={(text) => { setItem(text) }}
                placeholder='Enter a Item' />
            <View style={styles.buttonRowManage} >
                <Button title='Reset Notes' onPress={resetData} style={styles.buttonwid} color="grey" />

                <Button title='Add Note' onPress={() => pressHandler(item)} color="cornflowerblue" />
            </View>
        </View>
    )
}

export default AddShopping



const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderBottomColor: "lightgray",
        marginVertical: 20,
        padding: 10,
        textAlign: "center"
    },
    container: {
        marginHorizontal: 40
    },
    buttonRowManage: {
        flexDirection: "row",
        justifyContent: "space-between"

    },
    buttonwid: {
        width: 30
    }
})

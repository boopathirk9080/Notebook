import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.headerhead} >
            <Text style={styles.headertext} > Routine Notebook</Text>
        </View>
    )
}

export default Header



const styles = StyleSheet.create(
    {
        headerhead: {
            backgroundColor: "darkblue",
            height: 50,
            alignItems:"center",
            justifyContent:"center"
        },
        headertext:{
fontWeight:"bold",
color:"#fff",
fontSize:20
        }
    }
)
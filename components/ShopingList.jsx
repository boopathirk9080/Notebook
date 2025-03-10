import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const ShopingList = ({ list, deleteItem }) => {
    return (
        <View>
            <FlatList
                data={list}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => {
                    return <View style={styles.separator} ></View>
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity  >
                            <View style={styles.container} >
                                <Text style={styles.item} > {item.todo} </Text>
                                <MaterialIcons name="delete"
                                    size={40}
                                    onPress={() => deleteItem(item)}
                                    color="darkred"
                                    style={styles.deliconstyle} />
                            </View>
                        </TouchableOpacity>
                    )
                }}
                style={styles.flatlist}

            />
        </View>
    )
}

export default ShopingList

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // paddingHorizontal: 20
    },
    item: {
        fontWeight: "bold",
        padding: 20,
        fontSize: 20

    },

    separator: {
        height: 1.5,
        backgroundColor: "lightgray"
    },
    flatlist: {
        paddingTop: 20
    },
    deliconstyle: {
        marginRight: 10
    },

})

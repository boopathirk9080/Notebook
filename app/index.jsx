import { Text, View, StyleSheet, StatusBar, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from "../components/Header";
import { useState } from "react";
import ShopingList from "../components/ShopingList";
import AddShopping from "../components/AddShopping"

export default function Index() {
  const [shoppingList, setShoppingList] = useState([
    { "id": "1", "todo": "Buy groceries" },
    { "id": "2", "todo": "Complete React Native project" },
    { "id": "3", "todo": "Read 10 pages of a book" },
    { "id": "4", "todo": "Exercise for 30 minutes" },
    { "id": "5", "todo": "Call a friend or family member" }
  ]);
  const deleteItem = (item) => {
    setShoppingList((prevShoppinglist) =>
      prevShoppinglist.filter((listItem) => listItem.id !== item.id)
    );
  };
  function addData(item) {
    if (item.length === 0) {
      Alert.alert("Alert", "Please enter an item")
      return
    }
    setShoppingList([...shoppingList, { todo: item, id: Math.random().toString() }])
  }
  function dismiskeyboard() {

    Keyboard.dismiss()
  }
  function resetData() {
    setShoppingList([]); // Reset to an empty array
}

  return (
    <TouchableWithoutFeedback onPress={dismiskeyboard} >
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Header />
        <AddShopping addData={addData} resetData={resetData} />
        <ShopingList list={shoppingList} deleteItem={deleteItem} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

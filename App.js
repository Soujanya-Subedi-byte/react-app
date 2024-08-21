import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, Alert } from "react-native";
import Header from "./components/header";
import ListItem from "./components/list-item";
import AddItem from "./components/addItem";
const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Milk" },
    { id: 2, text: "Eggs" },
    { id: 3, text: "Bread" },
    { id: 4, text: "Sausage" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };
  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error!', 'Please Enter an Item', [{ text: 'Ok' }]);
    } else {
      setItems((prevItems) => {
        return [
          { id: Math.floor(Math.random() * 10000) + 1, text: text },
          ...prevItems,
        ];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;

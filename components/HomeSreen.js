import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function HomeScreen() {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');
  const [menuItems, setMenuItems] = useState([]);

  const addItem = () => {
    if (!dishName || !price) return;
    const newItem = { id: Date.now(), dishName, description, course, price };
    setMenuItems(prev => [...prev, newItem]);
    setDishName(''); setDescription(''); setPrice('');
  };
  return (
     <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/d1/81/28/d181288201887353a6d459b97aeb17af.jpg' }} 
      style={styles.container}
      resizeMode="cover"
    >
    <View style={styles.container}>
      <Text style={styles.header}>Christoffel’s Menu</Text>

      <TextInput placeholder="Dish Name" value={dishName} onChangeText={setDishName} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />

      <Picker selectedValue={course} onValueChange={setCourse} style={styles.picker}>
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />

      <Button title="Add Menu Item" onPress={addItem} />

      <Text style={styles.total}>Total Menu Items: {menuItems.length}</Text>

      <FlatList
        data={menuItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.dishName}</Text>
            <Text>{item.course} - R{item.price}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        )}
      />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20, backgroundColor:'#' },
  header: { fontSize:22, fontWeight:'bold', marginBottom:12 },
  input: { borderWidth:1, borderColor:'#ddd', padding:8, borderRadius:8, marginBottom:10 },
  picker: { marginBottom:10 },
  total: { fontWeight:'bold', marginTop:14 },
  card: { backgroundColor:'#fff', padding:10, borderRadius:8, marginTop:8, elevation:2 },
  cardTitle: { fontWeight:'bold', fontSize:16 },
  desc: { color:'#555' }
});

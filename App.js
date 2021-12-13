/*
CPE170P-C1 (2Q 21-22)
CO, JUSTIN MIGUEL ALMAZAN
*/

import React from 'react';
import Product from './Product'

import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text
} from 'react-native';

const products = [
  { brand: "Versace", type: "Cologne", name: "Versace Eros", price: "100" },
  { brand: "Dolce & Gabbana", type: "Cologne", name: "The One", price: "100" },
  { brand: "Calvin Klein", type: "Cologne", name: "Eternity", price: "200" },
  { brand: "Versace", type: "Perfume", name: "Bright Crystal", price: "200" },
  { brand: "Dolce & Gabbana", type: "Perfume", name: "Light Blue", price: "300" },
  { brand: "Calvin Klein", type: "Perfume", name: "Obsession", price: "300" },
];

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.header}>Gift Shop</Text>
      <FlatList 
        data={products}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={( { item } ) => (<Product product={item}/>)}>  
      </FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 60,
    color: 'orange',
    textAlign: 'center',
    padding: 30,
    marginLeft: 5
  },
});

export default App;
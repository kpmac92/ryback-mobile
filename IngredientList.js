import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PrimaryList from './PrimaryList';

function IngredientList (props) {
    return (
      <PrimaryList data={props.ingredients} title="Ingredients" renderItem={renderIngredient}/>
    );
  }

function renderIngredient(ingredient) {
  return (
    <Text style={styles.mainText}>
      {ingredient.amount} {ingredient.unit} {ingredient.name}
    </Text>
  );
}

const styles = StyleSheet.create({
  mainText: {
    flex: 1,
    width: '100%',
    fontSize: 25,
    fontFamily: 'sans-serif-light'
  }
});
export default IngredientList;
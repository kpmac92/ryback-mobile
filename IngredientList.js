import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class IngredientList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ingredients: props.ingredients };
  }

  render() {

    return (
      <View style={styles.container}>
        <Text adjustsFontSizeToFit style={styles.titleText}>Ingredients</Text>
        <FlatList
          data={this.state.ingredients}
          renderItem={({ item }) => renderIngredient(item)}
          keyExtractor={(item) => item.name}
          testID='ingredient-list'
        />
      </View>
    );
  }
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
  },
  titleText: {
    fontSize: 30,
    fontFamily: 'sans-serif'
  },
  container: {
    shadowColor: 'black',
    elevation: 10,
    shadowRadius: 50,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 1,
    backgroundColor: '#F8F1D1',
  },
});

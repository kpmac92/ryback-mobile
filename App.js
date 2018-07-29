import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { sampleRecipe: {
    name: "pancakes",
    ingredients: [
      {id:1, name: "eggs", amount: "1", unit: ""},
      {id:2, name: "butter", amount:"4", unit: "tbsp"}, 
      {id:3, name: "milk", amount:"1", unit: "cup"},
      {id:4, name: "flour", amount:"1", unit: "cup"},
      {id:5, name: "baking powder", amount:"2", unit: "tsp"}
    ],
    instructions: [
      {order: 1, ingredients: [4,5], verb: "mix", suffix: "."},
      {order: 2, ingredients: [1], verb: "beat", suffix: "into a liquid."},
      {order: 3, ingredients: [1,2,3], verb: "combine", suffix: "gently."},
      {order: 4, ingredients: [1,2,3,4,5], verb: "stir", suffix: "thoroughly."}
    ]
  }}
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.sampleRecipe.ingredients[1].name}</Text>
        <FlatList data = {this.state.sampleRecipe.ingredients}
          renderItem={({item}) => <Text>{item.amount} {item.unit} {item.name}</Text>}
          keyExtractor={(item) => item.name}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class IngredientList extends React.Component {

    constructor(props){
        super(props);
        this.state = { ingredients: props.ingredients};
    }

    render() {
        return (
          <View style={styles.container}>
            <Text>Ingredients</Text>
            <FlatList data = {this.state.ingredients}
              renderItem={({item}) => <Text>{item.amount} {item.unit} {item.name}</Text>}
              keyExtractor={(item) => item.name}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 25,
      flex: 1,
      backgroundColor: '#e6ac00',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

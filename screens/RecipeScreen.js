import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ingredients from '../components/Ingredients';

export default class RecipeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const recipe = navigation.getParam('recipe');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{recipe.name}</Text>
        <View style={styles.container}>
          <Ingredients ingredients={recipe.ingredients} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BAF2AE',
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontFamily: 'sans-serif',
    textAlign: 'center',
    textAlignVertical: 'top',
  }
});

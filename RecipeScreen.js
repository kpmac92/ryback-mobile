import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IngredientList from './IngredientList';

export default class RecipeScreen extends React.Component {
 constructor(props){
   super(props);
 }

 render() {
   const { navigation } = this.props;
   const recipe = navigation.getParam('recipe'); 
   return (
     <View style={styles.container}>
       <Text>{recipe.name}</Text>
       <IngredientList ingredients = {recipe.ingredients}/>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#e6ffff',
   paddingTop: 20,
   paddingLeft: 15,
   paddingRight: 15,
   paddingBottom: 20,
   alignItems: 'stretch',
   justifyContent: 'center',
 }
});

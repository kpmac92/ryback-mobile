import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import RecipeScreen from "./RecipeScreen";

class HomeScreen extends React.Component {

  render() {
    const sampleRecipes = [{
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
    },
    {
      name: "cheese quesadilla",
      ingredients: [
        {id:1, name: "tortilla", amount: "2", unit: "shells"},
        {id:2, name: "cheese", amount: "3", unit: "cups"},
        {id:3, name: "butter", amount: "2", unit: "tbsp"}
      ],
      instructions: [
        {order: 1, ingredients: [1,2,3], verb: "do stuff with", suffix: "real hard."}
      ]
    }];

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        {sampleRecipes.map((recipe, i) => {
        return <Button
          key={i}
          title={recipe.name}
          onPress={() => this.props.navigation.navigate('Recipe', {recipe: sampleRecipes[i]})}
        />;
        })}
      </View>
    );
  }
}

const RootStack = createStackNavigator({
    Home: HomeScreen,
    Recipe: RecipeScreen
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
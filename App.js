import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import RecipieScreen from "./RecipieScreen";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Recipie"
          onPress={() => this.props.navigation.navigate('Recipie')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
    Home: HomeScreen,
    Recipie: RecipieScreen
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
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class IngredientList extends React.Component {

    constructor(props){
        super(props);
        this.state = { ingredients: props.ingredients};
    }

    render() {

        textStyles = StyleSheet.create({
            main: {
                flex: 1,
                width: '100%',
                fontSize: 40,
            },
            title: {
                fontSize: 40
            }
        })

        return (
          <View style={styles.container}>
            <Text adjustsFontSizeToFit style={textStyles.title}>Ingredients</Text>
            <FlatList data = {this.state.ingredients}
              renderItem={({item}) => <Text adjustsFontSizeToFit minimumFontScale={.01} style={textStyles.main}>
                {item.amount} {item.unit} {item.name}
              </Text>}
              keyExtractor={(item) => item.name}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#e6ac00',
    },
  });

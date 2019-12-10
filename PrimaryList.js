import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

function PrimaryList(props) {
    return <View style={styles.container}>
    <Text adjustsFontSizeToFit style={styles.titleText}>{props.title}</Text>
    <FlatList
      data={props.data}
      renderItem={({ item }) => props.renderItem(item)}
      keyExtractor={(item) => item.name}
      testID='ingredient-list'
    />
  </View>
}

const styles = StyleSheet.create({
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

export default PrimaryList;
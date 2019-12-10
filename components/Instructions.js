import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PrimaryList from './PrimaryList';
import _ from 'lodash';

function Instructions(props) {
    return <PrimaryList data={props.instructions} title="Instructions" renderItem={renderInstruction} />
}

function renderInstruction(instruction) {
    return <Text style={styles.mainText}>
        {instruction.verb} {renderIngredients(instruction.ingredients)}
    </Text>
}

function renderIngredients(ingredients) {
    ingredientString = _.reduce(ingredients, (result, ingredient) =>
        result+=ingredient.amount + ' ' + ingredient.unit + ' ' + ingredient.name + ' and '
        , '');
    return ingredientString.slice(0, -4);
}

const styles = StyleSheet.create({
    mainText: {
      flex: 1,
      width: '100%',
      fontSize: 25,
      fontFamily: 'sans-serif-light'
    }
});

export default Instructions;
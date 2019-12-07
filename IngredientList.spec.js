import { expect } from 'chai';
import React from 'react';
import { render } from '@testing-library/react-native';
import IngredientList from './IngredientList';

describe('Ingredient List', () => {
    it('should pass', () => {
        const { getAllByText, baseElement } = render(<IngredientList ingredients={[]}/>);
        expect(getAllByText('Ingredients')).to.have.length(1);
    })

})
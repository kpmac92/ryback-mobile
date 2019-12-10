import { expect } from 'chai';
import React from 'react';
import { render } from '@testing-library/react-native';
import Ingredients from './Ingredients';

describe('Ingredients', () => {
    it('should render ingredients', () => {
        const ingredients = [
            {name:'sour cream', unit:'cups', amount:'1/4'},
            {name:'shredded cheese', unit:'cups', amount:'2'}
        ]
        const { getAllByText, getByTestId } = render(<Ingredients ingredients={ingredients}/>);
        
        expect(getAllByText('Ingredients')).to.have.length(1);
        expect(getAllByText('1/4 cups sour cream')).to.have.length(1);
        expect(getByTestId('ingredient-list').getProp('data')).to.have.length(2);
    })

})
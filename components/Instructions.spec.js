import { expect } from 'chai';
import React from 'react';
import { render } from '@testing-library/react-native';
import Instructions from './Instructions';

describe('Instructions', () => {
    it('should render instructions', () => {
        const ingredients = [
            {name:'sour cream', unit:'cups', amount:'1/4'},
            {name:'shredded cheese', unit:'cups', amount:'2'}
        ]
        const instructions = [
            {verb:'mix', ingredients:ingredients},
            {verb:'boil', ingredients:[{name: 'noodles', unit: 'cups', amount: '2'}]}
        ]

        const { getAllByText, getByTestId } = render(<Instructions instructions={instructions}/>);

        expect(getAllByText('Instructions')).to.have.length(1);
        expect(getAllByText('mix 1/4 cups sour cream and 2 cups shredded cheese'))
            .to.have.length(1);
        expect(getAllByText('boil 2 cups noodles')).to.have.length(1);
        //TODO: move testId out of primarylist
        expect(getByTestId('ingredient-list').getProp('data')).to.have.length(2);
    })
})
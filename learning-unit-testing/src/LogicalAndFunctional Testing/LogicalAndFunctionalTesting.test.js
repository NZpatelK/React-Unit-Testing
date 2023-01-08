import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import DisplayName from './DispalyName';
import { validateName } from './LogicalAndFunctionalTesting';

//This is to test the text that should be in dsiplay.
describe('DisplayName', () => {  
    test('should render text', () => {  
      const component = renderer.create(<DisplayName name={"Patel"} />);  
      let tree = component.toJSON();  
      expect(tree).toMatchSnapshot();  
    });  
});   

describe('Validation', () => {
    test('can set the error if input is number', () => {
        const name = 123;
        const error = validateName(name);
        expect(error).toBeTruthy();
    });
    test('Could reset error if input is empty', () => {
        const name = null;
        const error = validateName(name);
        expect(error).toEqual(false);
    });
})  

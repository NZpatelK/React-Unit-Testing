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

// This validation testing
describe('Validation', () => {

    // This is to test when user input the number and error message should be display. 
    test('can set the error if input is number', () => {
        const name = 123;
        const error = validateName(name);
        expect(error).toBeTruthy();
    });

    // This is to test when the input is empty then error message should not display. 
    test('Could reset error if input is empty', () => {
        const name = null;
        const error = validateName(name);
        expect(error).toEqual(false);
    });
})  

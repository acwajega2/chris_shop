
import React,{Component} from 'react';
import {shallow,mount} from './enzyme';
import Methods from './Methods';

describe('METHOD TESTTING', () => {
    it('shoud add 2 and 3 to give 5 ', () => {
        const wrapper = shallow(<Methods />);

        wrapper.addNumbers = jest.fn().mockReturnValue(5);
        const result = wrapper.addNumbers(2,3);
        expect(result).toBe(5);
    });
});



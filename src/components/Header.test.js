import React,{Component} from 'react';
import {shallow,mount} from '../enzyme';
import Header from './Header';


describe('Header Component', () => {
    it('should Render ', () => {

        const wrapper = shallow(<Header />);
        
    });
    

    it('Should Increase counter', () => {
        const wrapper = mount(<Header />);
        const button = wrapper.find('button');
        button.simulate('click');

        expect(wrapper.state().counter).toBe(1);
 
    });

 
});

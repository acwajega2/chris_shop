import React from 'react';
import renderer from 'react-test-renderer';
import {shallow,mount} from './enzyme';


import {ProductProvider} from './context';



describe("MAIN CONTEXT", ()=>{

      //------------------Snap Shot Testing-------
  it("Matches the snap Shot", () =>{
    const tree = renderer.create(<ProductProvider />).toJSON();
    expect(tree).toMatchSnapshot();

});
//------------------End of Snap Shot Testing--------


//----------Should increment the values
it("Should perform an increment",() =>{
     const component = mount(<ProductProvider />);
console.log(component)



})

    //----------Checking if it initializes properly
    it("Should Initialize", ()=>{
        shallow(<ProductProvider />);
    })
})
import React from 'react';
import { shallow,mount} from './enzyme';
import App from './App'

describe("MAIN APP", () =>{


  //-----App Initializing Test-----
  it("Should Run Properly",()=>{
    shallow(<App />)
  });
  //-----End of Initializing Test----




  

})
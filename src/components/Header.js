import React, { Component } from 'react';

class Header extends Component {

    constructor(){
        super()
        this.state ={
            counter : 0
        }
        this.increaseCounter = this.increaseCounter.bind(this)
    }
  addNumbers =(a,b) =>{
      return  a + b
      }
  

    increaseCounter = () =>{
        let currentCount = this.state.counter;
        this.setState(
            
            () =>{
               
                return{
                    counter:currentCount +1
                }
            }
        )
    }


    render() {
        return (
            <div>
                <h2>Increment Exercise</h2>
                <button onClick={this.increaseCounter}>Increase Counter</button>
                <h3>Your New Count is <b>{this.state.counter}</b></h3>
            </div>
        );
    }
}

export default Header;
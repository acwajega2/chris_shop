import React,{Component} from 'react';




//--------Creating the context....
const ProductContext = React.createContext();


//-----------------Creating the Provider Class-----
class ProductProvider extends Component{
    constructor(){
        super();
        this.state ={
            numCount :0
        }
    }
   
    //------------Methods to run when the componet has mounted'
    componentDidMount(){

        console.log('Greate, I did Mount to the DOM....');
    }
    //--------------------End of mounting functions----
  addNumbers =(a) =>{
      return a+2
  }

    //------------Increasing the count---------
increaseCount = () =>{

    let initiaCount = this.state.numCount;

    this.setState(() =>{
        return {
            numCount : initiaCount+ 1
        }
    })

}
//-----------------End of Count increment


    render() {
        return(
            <ProductContext.Provider  value={{...this.state,increaseCount :this.increaseCount,addNumbers :this.addNumbers}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }

}
//--------------End of the Provider Class


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer}

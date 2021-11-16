import React, { Component } from 'react'
import {storeProducts} from './Data';

const ProductContext = React.createContext();
//provider - going to provide information in application 
//consumer
export default class ProductProvider extends Component {
    state ={
        products:storeProducts
    };
    componentDidMount(){
        this.setProducts();
      
    };
    setProducts = ()=>{
        let tempProducts =[];
        storeProducts.forEach(item =>{
            const singleItem ={...item};
            tempProducts =[...tempProducts, singleItem]
        })
        this.setState(()=>{
            return{products:tempProducts}
        })
    };
    addToCart = id =>{
        console.log(`add to cart handler id is ${id}`);
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                addToCart : this.addToCart

            }}>
                {this.props.children}
             </ProductContext.Provider>
                
            
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export{ ProductProvider, ProductConsumer};

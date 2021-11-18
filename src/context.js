import React, { Component } from 'react'
import {storeProducts} from './Data';

const ProductContext = React.createContext();
//provider - going to provide information in application 
//consumer
export default class ProductProvider extends Component {
    state ={
        products:[],
        cart:storeProducts,
        cartSubTotal : 0,
        cartTax : 0,
        cartTotal : 0,
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
    getItem=(id)=>{
        const product= this.state.products.find(item =>item.id===id)
        return product;
      };

    addToCart = id =>{
       /*  console.log(`add to cart handler id is ${id}`);  */
       alert("Plant added to cart successfully");
    //console.log(`from add to cart. id is ${id}`)
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(()=>{
    return {products:tempProducts, cart:[...this.state.cart, product]};
    
    },
    () => {
     console.log(this.state);
    
    }
    );
};
increment = (id)=>{
    console.log('increment');
  
};
decrement = (id)=>{
      console.log('decrement');
      
};
removeItem = (id)=>{
    console.log('remove item method');
    
  };
clearCart = () =>{
   console.log('clear cart method');
};
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                addToCart : this.addToCart,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart

            }}>
                {this.props.children}
             </ProductContext.Provider>
                
            
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export{ ProductProvider, ProductConsumer};

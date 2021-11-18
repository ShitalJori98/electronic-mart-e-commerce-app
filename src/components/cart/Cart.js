import React, { Component } from 'react'
import { ProductConsumer } from '../../context'
import CartColumns from './CartColumns'
import CartList from './CartList'
import EmptyCart from './EmptyCart'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                         const {cart} = value;
                         if(cart.length>0){
                             return(
                                 <React.Fragment>
                                          <h2>In Cart</h2>
                                          <CartColumns/>
                                          <CartList value={value}/>
                                 </React.Fragment>
                             
                               
                             );
                         }
                         else{
                            return <EmptyCart/>;
                         }
                    }}
                    
                </ProductConsumer>
                
            </section>
        )
    }
}

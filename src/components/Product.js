import React, { Component } from 'react'
import ProductList from './ProductList'
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class Product extends Component {
    render() {
        const { id, name, img, price, inCart} = this.props.product;
        return (
            
           <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card" style={{borderRadius:'30px'}}>
                    <ProductConsumer>
                    {value => {
                      return(
                            <div className="img-container p-3"> 
                                        
                                        <img src={img} alt="product" className="card-img-top"/>
                                        {/* <div style={{textAlign:'center',marginTop:'20px'}}>
                                                <b> 
                                                    <h5 className="align-self-center mb-0">{name}</h5>
                                                </b>
                                        </div>*/}

                                    <div className=" d-flex justify-content-between m-2 p-2">
                                        <p className="align-self-center mb-0"><b>{name}</b>
                                        <p><span className="mr-1"><b>$</b></span>{price}</p>
                                        </p>
                                        
                                        <button className="cart-btn btn-warning"
                                         onClick={()=> { 
                                            value.addToCart(id);
                                        }}
                                         style={{borderRadius:'5px', height:"40px"}}>
                                            <span> <ShoppingCartIcon/></span>   
                                        </button>
                                </div>
                            </div> 
                             );
                            }}
                           
                    </ProductConsumer>

                </div>
            </ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div`
 .img-container{
     position: relative;
     overfow: hidden;
     border-radius: 15px
 }
`
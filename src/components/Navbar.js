import React, { Component } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
          <div className="container-fluid">
              <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#202059", color:"white"}}>
                 <div class="container-fluid">
               <div> <span><h5>Electronic Mart</h5></span></div>

                 <ul class="navbar-nav" >
                    <li class="nav-item" style={{marginLeft:'1px'}} >
                       <Link to="/" class="nav-link active">Home</Link> 
                    </li>
                    <li class="nav-item" style={{marginLeft:'50px'}}>
                      <Link to="/list" class="nav-link" >Product List</Link>
                    </li>
                    <li class="nav-item" style={{marginLeft:'50px'}}>
                      <Link to="/contact" class="nav-link" >Contact</Link>
                    </li>
                    <li class="nav-item" style={{marginLeft:'50px'}}>
                      <Link to="/blogs" class="nav-link" >Blogs</Link>
                    </li>
                </ul>
                     <ul className="ml-auto">
                         <Link to="/cart">
                            <span> <ShoppingCartIcon/></span> 
                        </Link> 
                    {' '}
                        <Link to ="/account">
                        <span> <AccountCircleIcon/></span> 
                        </Link>
            
                     </ul>
                   
                
                 </div>
             </nav>
           
        </div>
           
           
           
        )
    }
}


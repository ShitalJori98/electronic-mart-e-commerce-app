import React from 'react'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Switch ,Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar/>
        
        <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/list" component={ProductList} />
              <Route exact path="/cart" component={Cart} />
          </Switch>

      </React.Fragment>
    </div>
  );
}

export default App;
